import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  console.log(id);

  useEffect(() => {
    axios
      .get(`https:dummyjson.com/products/${id}`)
      .then((res) => setData(res.data));
  }, []);
  console.log(data);

  return (
    <>
      <div>
        <div className="flex justify-center px-[5%] gap-[4%]">
          <div className="flex-1/8">
            <img className="w-[100%]" src={data?.thumbnail} alt="" />
          </div>
          <div className="flex-2/9 bg-gray-100 p-[2%] rounded-2xl">
            <h1 className="text-4xl italic mb-[7%]">{data?.title}</h1>
            <strong className="text-2xl">price: {data?.price}$</strong>
            <div className="my-[1%] mb-[13%] font-medium italic">
              <p>category: {data?.category}</p>
              <p>rating: {data?.rating} ✩</p>
              <p>brand: {data?.brand}</p>
            </div>
            <p className="text-2xl text-gray-700 font-serif mb-[3%]">
              {data?.description}
            </p>
            <p>minimum order quantities: {data?.minimumOrderQuantity}</p>
            <p>available: {data?.availabilityStatus}</p>
          </div>
        </div>
        <h3 className="mt-[4%] text-3xl">Ratings</h3>
        <div className="grid grid-cols-4 gap-[8%] mt-[2%]">
          {data?.reviews?.map((el) => (
            <div
              key={el.id}
              className="bg-gray-100 rounded-2xl p-[5%] grid gap-0.5"
            >
              <h2 className="text-2xl italic">rating: {el.rating}✩</h2>
              <p className="text-2xl">{el.comment}</p>
              <p className="text-2xl italic text-gray-400">
                user: {el.reviewerName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
