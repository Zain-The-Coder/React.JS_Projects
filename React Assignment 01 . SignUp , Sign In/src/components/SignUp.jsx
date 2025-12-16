import { useState } from "react";

function SignUp() {
    const [error, setError] = useState("");
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    let userKnames = [];
    let userKemails = [];
    let userKpasswords = [];

    function errorHandler() {
        let storedEmails = JSON.parse(localStorage.getItem("userEmails")) || [];
        let storedNames = JSON.parse(localStorage.getItem("userNames")) || [];

        if (!userName || !userEmail || !userPassword) {
            setError("Fill The Above All Requirements !");
            return false;
        }
        if (!userEmail.includes("@")) {
            setError("Please Enter Correct Email !");
            return false;
        }
        if (userEmail.includes(" ")) {
            setError("Remove Extra Spaces From Email");
            return false;
        }
        if (userPassword.length < 6) {
            setError("Password Should Be Strong or 6 Letters !");
            return false;
        }
        if(storedNames.includes(userName)) {
            setError("The User Name Is Already Been Taken !");
            return ;
        }
        if(storedEmails.includes(userEmail)) {
            setError("Email Adress Is Already In Use !");
            return false ;
        }
        setError("Login Successfully !");
        return true;
    }

    const formSubmit = (e) => {
        e.preventDefault();
        if (!errorHandler()) return;

        let x = localStorage.getItem("userNames");
        let y = localStorage.getItem("userEmails");
        let z = localStorage.getItem("userPasswords");

        if (x) userKnames = JSON.parse(x);
        if (y) userKemails = JSON.parse(y);
        if (z) userKpasswords = JSON.parse(z);

        userKnames.push(userName);
        userKemails.push(userEmail);
        userKpasswords.push(userPassword);

        localStorage.setItem("userNames", JSON.stringify(userKnames));
        localStorage.setItem("userEmails", JSON.stringify(userKemails));
        localStorage.setItem("userPasswords", JSON.stringify(userKpasswords));

        setUserName("");
        setUserEmail("");
        setUserPassword("");
    };

    return (
        <>
        <section className="min-h-screen flex items-center justify-center bg-gray-100 p-[40px] w-[100%]">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign Up Form</h1>

                <form className="flex flex-col gap-4" onSubmit={formSubmit}>
                    <div className="flex flex-col text-left">
                        <label htmlFor="userName" className="font-semibold text-gray-700">Enter Your Name</label>
                        <input className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            type="text" id="userName" value={userName}
                            onChange={(e) => setUserName(e.target.value)} />
                    </div>

                    <div className="flex flex-col text-left">
                        <label htmlFor="userEmail" className="font-semibold text-gray-700">Enter Your Email</label>
                        <input className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            type="email" id="userEmail" value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)} />
                    </div>

                    <div className="flex flex-col text-left">
                        <label htmlFor="userPassword" className="font-semibold text-gray-700">Enter Your Password</label>
                        <input className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            type="password" id="userPassword" value={userPassword}
                            onChange={(e) => setUserPassword(e.target.value)} />
                    </div>

                    <p className="text-black italic text-[17px]">{error}</p>

                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl font-semibold transition-all mt-3 cursor-pointer" type="submit">Sign Up</button>
                </form>
            </div>
        </section>
        </>
    );
}

export default SignUp;

