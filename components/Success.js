import { useState } from "react";
import { BiCheck } from "react-icons/bi";

const Success = ({ message }) => {
  return (
    <div className="success container mx-auto transition duration-1000">
      <div className="flex justify-center mx-auto border border-yellow-300 bg-yellow-300 w-3/6 text-gray-900 text-md my-4 py-2 text-center bg-opacity-5">
        {message}
        <BiCheck size={25} color="#3CFF33" />
      </div>
    </div>
  );
};

export default Success;
