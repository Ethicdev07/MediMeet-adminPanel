import React from "react";
import { useState, useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import axios from "axios";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [state, setState] = useState("Admin");

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { setAToken, backendUrl } = useContext(AdminContext);
 
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if(state === "Admin"){
        const { data } = await axios.post(`${backendUrl}/api/admin/login`, {email, password});

        if(data.success){
          localStorage.setItem('aToken', data.token);
          setAToken(data.token);
          toast.success(data.message);
          console.log(data.token);
          
        }else{
          toast.error(data.message);
        }
      }
      
    }catch (error) {
      console.error('API ERROR:', error);
    
      const message = error.response?.data?.message;
      console.log("Error message from server:", message);
    
      if (message) {
        toast.error(message, {
          position: "top-right",
          autoClose: 2000,
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  }

 
  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto  items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm  shadow-lg">
        <p className="text-2xl font-semibold m-auto">
          <span className="text-primary">{state}</span> Login
        </p>
        <div className="w-full">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email || ''}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="email"
            required
          />
        </div>

        <div className="w-full relative">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password || ''}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type={showPassword ? "text" : "password"}
            required
          />
            <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-[50%] right-5 cursor-pointer text-gray-500"
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} size="lg" />
          </span>
        </div>

        <button className="bg-primary text-white w-full py-2 rounded-md text-base">
          Login
        </button>

        {state === "Admin" ? (
          <p>
            Doctor Login?{" "}
            <span
              onClick={() => setState("Doctor")}
              className="text-primary underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Admin Login?{" "}
            <span
              onClick={() => setState("Admin")}
              className="text-primary underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
