import Image from "next/image";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { getUsers } from "../lib/helper";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleChangeAction,
  updateAction,
  deleteAction,
} from "../redux/reducer";

export default function Table() {
  const { isLoading, isError, data, error } = useQuery("users", getUsers); // return the cache data instead
  if (isLoading) return <div>Employee is Loading</div>;
  if (isError) return <div>Got Error {error}</div>;

  return (
    <table className="min-w-full table-auto overflow-x-auto">
      <thead>
        <tr className="bg-gray-800">
          <th className="lg:px-16 py-2">
            <span className="text-gray-200 text-xs">Name</span>
          </th>
          <th className="lg:px-16 py-2">
            <span className="text-gray-200 md:text-md text-xs">Email</span>
          </th>
          <th className="lg:px-16 py-2">
            <span className="text-gray-200 text-xs">Salary</span>
          </th>
          <th className="lg:px-16 py-2">
            <span className="text-gray-200 text-xs">Birthday</span>
          </th>
          <th className="lg:px-16 py-2">
            <span className="text-gray-200 text-xs">Status</span>
          </th>
          <th className="lg:px-16 py-2">
            <span className="text-gray-200 text-xs">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        {data.map((d) => {
          return <Tr {...d} key={d._id} />;
        })}
      </tbody>
    </table>
  );
}

function Tr({ _id, name, avatar, email, salary, date, status }) {
  const visible = useSelector((state) => state.app.client.toggleForm);
  console.log("visible", visible);
  const dispatch = useDispatch();
  const [firstname, lastname] = name ? name.split(" ") : formData;

  const onUpdate = () => {
    dispatch(toggleChangeAction(_id));
    if (visible) {
      dispatch(updateAction(_id));
    }
  };

  const onDelete = () => {
    if (!visible) {
      dispatch(deleteAction(_id));
    }
  };
  return (
    <tr className="bg-gray-50 text-center overflow-x-auto">
      <td className="lg:px-4 py-2 ">
        <div className="grid grid-cols-2 items-center">
          <Image
            src={avatar}
            width={50}
            height={50}
            alt=""
            layout="fixed"
            className="rounded-full"
          />
          <span className="text-center lg:ml-2 font-semibold text-xs flex ">
            {firstname || "unknown"} {lastname || "unknown"}
          </span>
        </div>
      </td>
      <td className="lg:px-16 py-2 px-2">
        <span className="text-center lg:font-semibold text-xs ">
          {email || "unknown"}
        </span>
      </td>
      <td className="lg:px-10 py-2  ">
        <span className="text-center font-semibold text-xs md:flex-row md:justify-around flex flex-col">
          <span>{salary || "unknown"} </span>
          <span>usd</span>
        </span>
      </td>
      <td className="lg:px-12 py-2">
        <span className="text-center font-semibold text-xs">
          {date || "unknown"}
        </span>
      </td>
      <td className="lg:px-16 py-2">
        <button className="cursor">
          <span
            className={`${
              status == "Active" ? "bg-green-400" : "bg-red-400"
            } text-white lg:px-5 py-1 rounded-full md:text-md text-xs p-1`}
          >
            {status || "unknown"}
          </span>
        </button>
      </td>
      <td className="lg:px-16 py-2 ">
        <div className="flex justify-around items-center md:gap-5">
          <button className="cursor " onClick={onUpdate}>
            <BiEdit size={25} color="#33FF8A" />
          </button>
          <button className="cursor" onClick={onDelete}>
            <BiTrashAlt size={24} color="#FF4C33" />
          </button>
        </div>
      </td>
    </tr>
  );
}
