/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react'
import { Todos} from './components/Todos';
import { FilterVal, type Todo, type TodoID , type TodoTitle} from './types';
import { TODO_FILTERS } from './consts';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

const saveTodosToLocalStorage = (todos:Todo[]):void=>{
  localStorage.setItem('todos',JSON.stringify(todos))
}

const loadTodosFromLocalStorage = (): Todo[]=>{
  const todos = localStorage.getItem('todos');
  return todos? JSON.parse(todos):[];
}
const App = ():JSX.Element=> {
  const [todos,setTodos] = useState<Todo[]>(loadTodosFromLocalStorage())
  const [filterSelected,setFilterSelected] = useState<FilterVal>(TODO_FILTERS.ALL)
  
  useEffect(()=>{
    saveTodosToLocalStorage(todos);
  },[todos]);

  const handleRemove = ({id}:TodoID):void =>{
    const newTodos = todos.filter(todo=>todo.id != id)
    setTodos(newTodos)
  }

    const handleCompleted = ({ id }: TodoID): void => {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

const handleFilterChange = (filter: FilterVal):void =>{
  setFilterSelected(filter)
}

const handleRemoveAllCompleted = ():void=>{
  const newTodos = todos.filter(todo=>!todo.completed)
  setTodos(newTodos)
}

const activeCount = todos.filter(todo=> !todo.completed).length
const completedCount = todos.length - activeCount
const filteredTodos = todos.filter(todo=>{
  if(filterSelected==TODO_FILTERS.ACTIVE)return !todo.completed
  if(filterSelected==TODO_FILTERS.COMPLETED)return todo.completed
  return todo
})

  const handleAddTodo = ({title}:TodoTitle):void=>{
    const newTodo ={
      title,
      id: crypto.randomUUID(),
      completed:false
    }

    const newTodos = [...todos,newTodo]
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Header onAddTodo={handleAddTodo}/>
      <Todos 
      todos={filteredTodos}
      onRemoveTodo={handleRemove}
      onToggleCompleted ={handleCompleted}
      />
      <Footer
      activeCount={activeCount}
      completedCount={completedCount}
      filterSelected={filterSelected}
      onClearCompleted={handleRemoveAllCompleted}
      handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
