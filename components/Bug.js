import { BiCheck } from "react-icons/bi";

const Bug = ({ message }) => {
  return (
    <div className="success container mx-auto">
      <div className="flex justify-center mx-auto border border-red-300 bg-red-300 w-3/6 text-gray-900 text-md my-4 py-2 text-center bg-opacity-5">
        {message}
        <BiCheck size={25} color="#FF4D33" />
      </div>
    </div>
  );
};

export default Bug;
