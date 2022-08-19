import AddUser from "./AddUser";
import UpdateUser from "./UpdateUser";
import { useSelector } from "react-redux";
import { useReducer } from "react";

const formReducer = (state, event) => {
  return {
    ...state, //override previous value
    [event.target.name]: event.target.value,
  };
};

const Form = () => {
  const [formData, setFormData] = useReducer(formReducer, {});

  const formId = useSelector((state) => state.app.client.formId);
  console.log("formId", formId);
  return (
    <div className="container mx-auto py-5">
      {formId
        ? UpdateUser({ formId, formData, setFormData })
        : AddUser({ formData, setFormData })}
    </div>
  );
};

export default Form;
