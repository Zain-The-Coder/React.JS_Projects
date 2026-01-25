import Section from './components/SEction';
import './App.css'
import { useState } from 'react';

function App () {

  const [title , setTitle] = useState("");
  const [des , setDes] = useState("");
  const [obj , setObj] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newObj = [...obj];
    newObj.push({title , des});
    setObj(newObj);
    console.log(obj);
    setTitle("");
    setDes("");
  }

  const deleteTask = (index) => {
  setObj(obj.filter((_, i) => i !== index));
  setObj(updatedTasks);
  };

  return (
    <>
    <div className="flex flex-col lg:flex-row h-[100vh]">
      <section className='p-[40px] bg-black text-white w-full lg:w-1/2'>

      <h2 className='uppercase text-[22px] mb-[10px]'>Add Notes</h2>

      <form onSubmit={handleSubmit} className='w-[100%] flex flex-col gap-[30px] text-white'>
        <input value={title} onChange={(e) => {setTitle(e.target.value)}} className='border-3 p-[10px] rounded-[10px]' type="text" name='text' placeholder='Enter Notes Heading'/>
        <textarea value={des} onChange={(e) => {setDes(e.target.value)}} className='border-3 h-[20vh] p-[10px] rounded-[10px]' name="mytextarea" placeholder='Enter Details'></textarea>
        <button className='p-[10px] bg-white text-black font-bold rounded-[10px] cursor-pointer active:scale-95'>Add Notes</button>
      </form> 

    </section>

    <section className='p-[40px] bg-black w-full lg:w-1/2 lg:border-l-2 border-white'>
      <h2 className='uppercase text-[22px] text-white'>Your Notes</h2>
      <section className='flex flex-wrap justify-start items-start'>
        {obj.map((item , index) => (
          <Section key={index} index={index} object={item.title} description={item.des} func={deleteTask} />
        ))}
      </section>
    </section>
    </div>
    </>
  )
}

export default App
