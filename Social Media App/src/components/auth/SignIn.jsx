import React, { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  localStorage.setItem("userName" , user);
  localStorage.setItem("userEmail" , email)

  async function formHandler(e) {
    e.preventDefault();
    setIsSuccess(false);
    setError("");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const loggedInUser = userCredential.user;
        setIsSuccess(true);
        setError(`Welcome back, ${loggedInUser.email}`);
      })
      .catch((error) => {
        setIsSuccess(false);
        setError((error.message).slice(9));
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6"> Sign In</h2>

        <form onSubmit={formHandler} className="space-y-4">
          <div>
            <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              onChange={(e) => setUser(e.target.value)} value={user}
              type="text" placeholder="Enter Your Name"/>
          </div>

          <div>
            <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              onChange={(e) => setEmail(e.target.value)} value={email}
               type="email" placeholder="Enter Your Email" required />
          </div>

          <div>
            <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              onChange={(e) => setPassword(e.target.value)} value={password}
              type="password" placeholder="Enter Your Password" required/>
          </div>

          {error && (
             <div className={`p-3 rounded-lg text-sm text-center ${ isSuccess ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
              {error}</div>
          )}

          <button type="submit"className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold 
            py-2 rounded-lg transition-colors duration-300 shadow-md">Submit</button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Don't have an account? <span className="text-blue-600 cursor-pointer hover:underline">Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;