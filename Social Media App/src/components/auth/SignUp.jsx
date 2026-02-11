import React, { useState } from 'react'
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
    const [user , setUser] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [msg , setMsg] = useState("");
    const [error , setError] = useState("");
    localStorage.setItem("userName" , user);
    localStorage.setItem("userEmail" , email)

    function formHandler (e) {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setError("");
            setMsg("User Created Successfully! ")
            setEmail("");
            setUser("");
            setPassword("");
        })
        .catch((error) => {
            setMsg("");
            setError(error.message);
        });
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Create Account</h2>

        <form onSubmit={formHandler} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input value={user} onChange={(e) => {setUser(e.target.value)}} 
            type="text" placeholder='Zain Ur Rehman (Creator Of App)'
              className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"/>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input  value={email} onChange={(e) => setEmail(e.target.value)}  type="email"  placeholder='name@company.com'
              className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input  value={password}  onChange={(e) => setPassword(e.target.value)} type="password" 
              placeholder='••••••••' className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              required />
          </div>

          {msg && (
            <div className="p-3 rounded bg-green-100 text-green-700 text-sm font-medium">{msg}</div>)}
          {error && (
            <div className="p-3 rounded bg-red-100 text-red-700 text-sm font-medium">{error}</div>)}

          <button  type='submit' className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 
            rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out transform active:scale-[0.98]"> Sign Up </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already Have An Account <a className="text-blue-600 hover:underline cursor-pointer">Log in</a>
        </p>
      </div>
    </div>
  )
}

export default SignUp