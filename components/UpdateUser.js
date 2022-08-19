import { BiBrush, BiPlus } from "react-icons/bi";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getUser, getUsers, updateUser } from "../lib/helper";

const UpdateUser = ({ formId, formData, setFormData }) => {
  const queryClient = useQueryClient();
  const { isLoading, isError, data, error } = useQuery(["users", formId], () =>
    getUser(formId)
  );
  const UpdateMutation = useMutation((newData) => updateUser(formId, newData), {
    onSuccess: async (data) => queryClient.prefetchQuery("users", getUsers),
  });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const { name, avatar, salary, date, email, status } = data;
  const [firstname, lastname] = name ? name.split(" ") : formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userName = `${formData.firstname ?? firstname} ${
      formData.lastname ?? lastname
    }`;
    let updated = Object.assign({}, data, formData, { name: userName });

    UpdateMutation.mutate(updated);
  };
  //if (Object.keys(formData).length > 0) return <Success message="Data added" />;

  return (
    <form
      className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 py-4"
      onSubmit={handleSubmit}
    >
      <div className="input-type">
        <input
          onChange={setFormData}
          defaultValue={firstname}
          type="text"
          name="firstname"
          placeholder="FirstName"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div className="input-type">
        <input
          onChange={setFormData}
          defaultValue={lastname}
          type="text"
          name="lastname"
          placeholder="LastName"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div className="input-type">
        <input
          onChange={setFormData}
          defaultValue={email}
          type="text"
          name="email"
          placeholder="Email"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div className="input-type">
        <input
          onChange={setFormData}
          defaultValue={salary}
          type="text"
          name="salary"
          placeholder="Salary"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div className="input-type">
        <input
          onChange={setFormData}
          defaultValue={date}
          type="date"
          name="date"
          placeholder="Date"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            onChange={setFormData}
            defaultChecked={status == "Active"}
            type="radio"
            value="Active"
            id="radioDefault1"
            name="status"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-300 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault1" className="inline-block text-gray-200">
            Active
          </label>
        </div>
        <div className="form-check">
          <input
            onChange={setFormData}
            defaultChecked={status !== "Active"}
            type="radio"
            value="Inactive"
            id="radioDefault2"
            name="status"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-300 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault1" className="inline-block text-gray-200">
            Inactive
          </label>
        </div>
      </div>
      <button className="flex justify-center text-md w-2/6 bg-yellow-400 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
        Update{" "}
        <span className="px-1">
          <BiBrush size={24} />
        </span>
      </button>
    </form>
  );
};

export default UpdateUser;
