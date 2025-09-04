import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(`https:dummyjson.com/products`).then((res) => setData(res.data));
  }, []);
  return (
    <>
      <div className="grid grid-cols-4 rounded-2xl mb-[4%] gap-[30px] p-[30px] bg-gray-100">
        {data?.products.map((el) => (
          <div key={el.id} className="rounded-2xl bg-white">
            <div
              onClick={() => navigate(`/product/${el.id}`)}
              className="place-items-center cursor-cell"
            >
              <img className="hover:translate-1" src={el.thumbnail} alt="" />
            </div>
            <div className="p-[4%]">
              <strong className="text-3xl">{el.price}$</strong>
              <h3 className="text-2xl italic mt-[5%]">{el.title}</h3>
              <p className="text-[1.3rem] my-[2%]">brand: {el.brand}</p>
              <p className="font-medium text-2xl justify-self-end">
                {el.rating} ✩
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
