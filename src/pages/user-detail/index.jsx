import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  console.log(id);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${id}`)
      .then((res) => setData(res.data));
  }, []);
  console.log(data);

  return (
    <>
      <div>
        <div className="flex flex-col justify-center px-[5%] gap-[4%]">
          <div className="w-[100%] place-items-center flex justify-center my-[3%]">
            <img className="w-[250px]" src={data?.image} alt="" />
          </div>
          <div className=" bg-gray-100 p-[2%] rounded-2xl">
            <h1 className="text-4xl italic mb-[7%]">
              {data?.firstName} {data?.lastName}
            </h1>
            <strong className="text-2xl">age: {data?.age}</strong>
            <div className="my-[1%] mb-[5%] text-2xl font-medium italic">
              <p>gender: {data?.gender}</p>
              <p>email: {data?.email} ✩</p>
              <p>birth date: {data?.birthDate}</p>
              <p>blood group: {data?.bloodGroup}</p>
              <p>height: {data?.height}</p>
              <p>weight: {data?.weight}</p>
              <p>eye-color: {data?.eyeColor}</p>
            </div>
            <div className="text-2xl text-gray-700 font-serif mb-[3%]">
              <p className="italic">
                hair: {data?.hair?.color} {data?.hair?.type}
              </p>
              <p className="italic text-black">ip: {data?.ip}</p>
            </div>

            <div className="my-[1%] mb-[5%] text-2xl font-medium italic">
              <p>Address:</p>
              <p>address: {data?.address?.address} ✩</p>
              <p>city: {data?.address?.city}</p>
              <p>state: {data?.address?.state}</p>
              <p>postalCode: {data?.address?.postalCode}</p>
              <p>country: {data?.address?.country}</p>
            </div>

            <div className="text-2xl text-gray-900 font-serif mb-[3%]">
              <p className="">
                Company <br /> department: {data?.company?.department} <br />
                name: {data?.company?.name}
              </p>
            </div>
            <hr />

            <div className="my-[1%] mb-[5%] text-2xl font-medium italic">
              <p>Bank:</p>
              <p>card expired: {data?.bank?.cardExpire} </p>
              <p>card number: {data?.bank?.cardNumber} ✩</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
