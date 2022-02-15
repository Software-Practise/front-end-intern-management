import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <div className="flex bg-nwgreen items-center justify-center p-12 mt-0 mb-0"> {/* Page Background */}
      <div className="w-full max-w-md">   
        <form className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">    {/* Login block */}
          <div className="text-nwgreen text-2xl flex justify-center border-b-2 py-2 mb-4">    {/* Northwest Login Text */}
            Northwest Login
          </div>
          <div className="mb-4">      {/* Northwest Email Text Block */}
            <label className="block text-gray-700 text-sm font-normal mb-2">  {/* Email Input Label */}
              Northwest Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
            />    {/* Email Input Block */}
          </div>
          <div className="mb-6">     {/* Northwest Password Text Block */}
            <label className="block text-gray-700 text-sm font-normal mb-2">   {/* Password Input Label */}
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Password"
            />    {/* Password Input Block */}
          </div>
          <div className="flex justify-center items-center">  {/* Sign In Button Block */}
            <button
              className="px-4 text- py-2 rounded text-white inline-block shadow-lg bg-nwgreen "
              onClick={handleSubmit}
            >
              Sign In
            </button>     {/* Sign In Button */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
