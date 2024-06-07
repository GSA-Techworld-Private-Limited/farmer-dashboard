import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "./context/ContextStore";
import logo from "../assets/images/png/gsa.png";
import axios from "axios";
import { baseUrl, fetchStats } from "./api/auth";
const LoginPage = () => {
  const navigate = useNavigate();
  const { setAuthenticated, setStats } = useContext(MyContext);

  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
  });
  const handleInput = (e) => {
    const { value, name } = e.target;
    setLoginCredentials({ ...loginCredentials, [name]: value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${baseUrl}superadmin/dashboard-login/`,
        loginCredentials
      );
      const token = res.data.token;
      sessionStorage.setItem("token", token);
      console.log(res);
      setAuthenticated(true);
      navigate("/dashboard");
      // fetch other details
      fetchStats(setStats);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(loginCredentials);
  return (
    <div className="bg-white flex items-center justify-center py-20 container min-h-screen">
      <div className="w-[559px] pt-4 px-[50px] pb-11 border border-light-green rounded-3xl">
        <img className="mx-auto" src={logo} alt="" />
        <form onSubmit={handleLogin}>
          <input
            required
            name="username"
            onChange={handleInput}
            type="text"
            value={loginCredentials.username}
            className="font-inter mt-9 text-xl outline-none 2xl:text-2xl !leading-[29px] text-gray border border-black rounded-lg w-full py-4 placeholder:text-gray 2xl:py-5 text-center"
            placeholder="Username"
          />
          <input
            required
            name="password"
            onChange={handleInput}
            type="password"
            value={loginCredentials.password}
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
