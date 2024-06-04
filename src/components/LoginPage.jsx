import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "./context/ContextStore";
import logo from "../assets/images/png/gsa.png";
const LoginPage = () => {
  const navigate = useNavigate();
  const { setAuthenticated } = useContext(MyContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setAuthenticated(true);
    navigate("/dashboard");
  };
  return (
    <div className="bg-white flex items-center justify-center py-20 container min-h-screen">
      <div className="w-[559px] pt-4 px-[50px] pb-11 border border-light-green rounded-3xl">
        <img className="mx-auto" src={logo} alt="" />
        <form onSubmit={handleSubmit}>
          <input
            // required
            type="text"
            className="font-inter mt-9 text-xl outline-none 2xl:text-2xl !leading-[29px] text-gray border border-black rounded-lg w-full py-4 placeholder:text-gray 2xl:py-5 text-center"
            placeholder="Username"
          />
          <input
            // required
            type="password"
            className="font-inter mt-6 text-xl outline-none 2xl:text-2xl !leading-[29px] text-gray border border-black rounded-lg w-full py-4 placeholder:text-gray 2xl:py-5 text-center"
            placeholder="Password"
          />
          <button className="text-white text-2xl 2xl:text-[32px] leading-[38px] font-inter p-3 2xl:p-4 rounded-lg bg-primary w-full mt-10 2xl:mt-12">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
