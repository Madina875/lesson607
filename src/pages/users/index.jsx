import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(`https:dummyjson.com/users`).then((res) => setData(res.data));
  }, []);
  return (
    <>
      <div className="grid grid-cols-4 rounded-2xl mb-[4%] gap-[30px] p-[30px] bg-gray-100">
        {data?.users?.map((el) => (
          <div key={el.id} className="rounded-2xl bg-white pt-[3%]">
            <div
              onClick={() => navigate(`/user/${el.id}`)}
              className="place-items-center cursor-cell"
            >
              <img className="hover:translate-1" src={el.image} alt="" />
            </div>
            <div className="p-[4%] mt-[4%] place-items-center">
              <p className="text-3xl">
                {el.firstName} {el.lastName}
              </p>
              <h3 className="text-2xl italic mt-[5%]">{el.phone}</h3>
              <p className="text-[1.3rem] my-[2%]">age: {el.age}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
