import React from "react";
import not_foundd from "../../assets/not_found.png";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-[400px]">
        <img
          className="w-[100%] h-[100%] object-cover bg-center"
          src={not_foundd}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-8 text-center justify-center mt-[5%]  mb-[.5%] place-items-center text-2xl w-[100%]">
        <p>something went wrong!</p>
        <div>
          <button className="h-[40px] w-[200px]" onClick={() => navigate("/")}>
            Go Home ⌂
          </button>
          <button className="h-[40px] w-[200px]" onClick={() => navigate(-1)}>
            Go Back ⭶
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
