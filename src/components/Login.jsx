import doctor from "../assets/Doctor.jpg";
import logo from "../assets/Impeerical_logo_nb.png";
import { FaUserCircle, FaLock } from "react-icons/fa";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  }

  return (
    <div className="w-screen h-screen top-0 right-0 bg-gradient-to-tr from-gray-950 to-blue-800 flex justify-center items-center sm:p-4 p-3">
      <div className="h-full w-full bg-slate-200 rounded-md flex p-4">
        <div
          className="w-[40%] sm:block hidden h-full bg-gray-950 rounded-md bg-center bg-cover"
          style={{
            backgroundImage: `url(${doctor})`,
            boxShadow: "inset 0 0 40px 30px rgba(0,0,0,0.8)",
          }}
        ></div>
        <div className="sm:w-[60%] w-full h-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center sm:gap-[8%] gap-[5%] sm:w-1/2 w-full h-full">
            <div className="w-full flex justify-center">
              <img src={logo} alt="Logo" className="w-1/2" />
            </div>

            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col justify-center items-center gap-4"
            >
              <div className="w-full flex flex-col justify-center items-center">
                <h1 className="text-sky-800 font-bold sm:text-3xl text-4xl">
                  WELCOME
                </h1>
                <p className="text-gray-500 text-sm">
                  Please Login to your account
                </p>
              </div>

              <div className="w-[80%] bg-white rounded-md p-2 flex items-center gap-2 border border-sky-800 focus-within:ring-2 focus-within:ring-sky-600 transition-all">
                <FaUserCircle className="text-xl text-sky-800" />
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="outline-none w-full text-gray-700"
                  required
                />
              </div>

              {/* Password */}
              <div className="w-[80%] bg-white rounded-md p-2 flex items-center gap-2 border border-sky-800 focus-within:ring-2 focus-within:ring-sky-600 transition-all">
                <FaLock className="text-xl text-sky-800" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="outline-none w-full text-gray-700"
                  required
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-[80%] bg-gradient-to-tr from-gray-950 to-blue-800 text-white rounded-md p-2 flex justify-center items-center gap-2 border-2 border-sky-800
                transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40 active:scale-95"
              >
                LOGIN
              </button>
              {error && (
                <div
                  className="w-[80%] rounded-md flex justify-center text-sm italic text-red-600
                  transition-all duration-300 ease-in-out animate-slideDown"
                >
                  Username or Password is Invalid
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
