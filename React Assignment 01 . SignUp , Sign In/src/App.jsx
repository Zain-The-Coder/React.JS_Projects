import { use, useState } from 'react'
import './App.css';
import SignUp from './components/signUp';
import SignIn from './components/signIn';

function App () {
  return (
    <>
    <h1 className='text-[40px] text-center uppercase'>hello react</h1>
    <div className='flex justify-around div'>
    <SignUp />
    <SignIn />
    </div>

    </>
  )
}




export default App
