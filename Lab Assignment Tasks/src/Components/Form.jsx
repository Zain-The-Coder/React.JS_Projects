import { useState } from "react";

function Form () {
    const [userName , setUserName] = useState("");
    const [userEmail , setUserEmail] = useState("");
    const [userPassword , setUserPassword] = useState("");

    const handleSubmit = (e) => {
        console.log("hello world")
    }

    return (
    <section className="flex flex-col items-center justify-center p-4">
      <form onSubmit={handleSubmit()} className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md w-80">
        <input onChange={(e) => {setUserName(e.target.value)}} className="border border-gray-300 text-black italic px-2 py-1 rounded" type="text" placeholder="Enter Your Name..."/>
        <input onChange={(e) => {setUserEmail(e.target.value)}} className="border border-gray-300 text-black italic px-2 py-1 rounded" type="email" placeholder="Enter Your Email..." />
        <input onChange={(e) => {setUserPassword(e.target.value)}} className="border border-gray-300 text-black italic px-2 py-1 rounded" type="password" placeholder="Enter Your Password"/>
        <p className="text-red-500"></p>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"> Submit</button>
      </form>
    </section>
  );
}
export default Form ;