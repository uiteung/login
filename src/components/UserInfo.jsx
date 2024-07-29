import React from "react";

const UserInfo = ({ data }) => {
  return (
    <>
      <h1 className="text-5xl font-extralight">
        Welcome, <span className="font-extrabold">{data.name}</span>
      </h1>
      <p className="mt-5 mb-5 badge badge-primary">{data.email}</p>

      <div className="avatar">
        <div className="w-24 shadow-2xl rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={data.picture} alt={data.name} />
        </div>
      </div>
    </>
  );
};

export default UserInfo;
