import { useState } from "react";

function SignIn() {
  let userNames = JSON.parse(localStorage.getItem("userNames")) || [];
  let userEmails = JSON.parse(localStorage.getItem("userEmails")) || [];
  let userPasswords = JSON.parse(localStorage.getItem("userPasswords")) || [];

  const [error, setError] = useState("");
  const [userName, setuserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    let matchedUserName = userNames.indexOf(userName);

    if (!userName || !userEmail || !userPassword) {
      setError("Please Fill The Above All Fields !");
      return;
    }
    if(!userNames.includes(userName)) {
      setError("Incorrect User Name !");
    return
    }
    if(userEmails[matchedUserName] !== userEmail) {
      setError("The Email Adress Is Wrong !") ;
      return ;
    }
    if(userPasswords[matchedUserName] !== userPassword) {
      setError("Incorrect Password !");
      return ;
    }
    setError("Welcome " + userName);

      setuserName("");
      setUserEmail("");
      setUserPassword("");
  } 

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-gray-100 p-[40px] w-[100%]">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign In Form</h1>

          <form className="flex flex-col gap-4" onSubmit={formSubmit}>
            <div className="flex flex-col text-left">
              <label htmlFor="userName" className="font-semibold text-gray-700">Enter Your Name</label>
              <input className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" type="text" id="userName"value={userName}
                onChange={(e) => {setuserName(e.target.value);}}/>
            </div>

            <div className="flex flex-col text-left">
              <label htmlFor="userEmail" className="font-semibold text-gray-700">Enter Your Email</label>
              <input className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"type="email"id="userEmail"value={userEmail}
                onChange={(e) => {setUserEmail(e.target.value);}}/>
            </div>

            <div className="flex flex-col text-left">
              <label htmlFor="userPassword" className="font-semibold text-gray-700">Enter Your Password</label>
              <input className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" type="password" id="userPassword" value={userPassword}
               onChange={(e) => {setUserPassword(e.target.value);}}/>
            </div>

            <p className="text-black italic text-[17px]">{error}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl font-semibold transition-all mt-3 cursor-pointer" type="submit">Sign Up</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default SignIn;
