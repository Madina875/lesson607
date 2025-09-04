import React from "react";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="text-2xl font-medium">service</h2>
      <button
        className="w-[150px] p-[10px] mt-[3%] rounded-2xl bg-gray-300 font-medium"
        onClick={() => navigate("/contact")}
      >
        Contact
      </button>
    </div>
  );
};

export default Service;
