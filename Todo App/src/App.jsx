import { useEffect, useState } from 'react';
import './App.css'
import Add from './components/Add';

function App() {
  const [todo , setTodo] = useState('');
  const [place , setPlace] = useState('');
  useEffect(() => {
    setPlace("Add Todo")
  } , [])
  console.log(todo)
  return (
    <>
    <input onChange={(e) => {setTodo(e.target.value)}} value={todo}
     type="text" name='text' />
     <Add />
    </>
  )
}

export default App;
