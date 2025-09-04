import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <section className="container place-items-center my-[6%]">
      <div className="flex w-[500px] justify-between px-[1%] mb-[2%]">
        <button className="h-[40px] w-[100px]" onClick={() => navigate("/")}>
          Go Home ⌂
        </button>
        <button className="h-[40px] w-[100px]" onClick={() => navigate(-1)}>
          Go Back ⭶
        </button>
      </div>
      <form className="place-items-center flex flex-col gap-6 w-[500px] h-[500px] border rounded-2xl border-gray-400 self-center pt-[2%]">
        <h2 className="text-4xl lowercase mb-[5%]">Login</h2>
        <input
          type="text"
          className="border rounded-2xl border-gray-400 w-[90%] h-[10%] px-[4%] text-1xl"
          placeholder="name"
        />
        <input
          type="text"
          className="border rounded-2xl border-gray-400 w-[90%] h-[10%] px-[4%] text-1xl"
          placeholder="name"
        />
        <input
          type="text"
          className="border rounded-2xl border-gray-400 w-[90%] h-[10%] px-[4%] text-1xl"
          placeholder="name"
        />
        <div className="w-[90%]  flex gap-[10%] mt-[11%]">
          <button className="w-[100%] h-[50px] rounded-2xl bg-gray-300 text-gray-500 hover:text-white hover:bg-gray-500">
            cancel
          </button>
          <button className="w-[100%] h-[50px] rounded-2xl bg-gray-300 text-gray-500 hover:text-white hover:bg-gray-500">
            send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
