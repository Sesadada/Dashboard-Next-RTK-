import Head from "next/head";
import { useState } from "react";
import Form from "../components/Form";
import Table from "../components/table";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleChangeAction,
  updateAction,
  deleteAction,
} from "../redux/reducer";
import { deleteUser, getUsers } from "../lib/helper";
import { useQueryClient } from "react-query";

export default function Home() {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const deleteId = useSelector((state) => state.app.client.deleteId);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const handler = () => {
    dispatch(toggleChangeAction());
    dispatch(updateAction(undefined));
  };

  const cancelHandler = async () => {
    console.log("cancel");
    await dispatch(deleteAction(null));
  };

  const deleteHandler = async () => {
    if (deleteId) {
      await deleteUser(deleteId);
      await queryClient.prefetchQuery("users", getUsers);
      await dispatch(deleteAction(null));
    }
  };

  return (
    <section>
      <Head>
        <title>Employees Dashboard</title>
      </Head>
      <main className="p-5">
        <div>
          <h1 className="text-center uppercase py-5 font-bold text-pink-500 text-5xl">
            Employers
          </h1>
          <div className="container mx-auto flex justify-between py-8 border-b">
            <div className="left flex gap-3">
              <button
                onClick={handler}
                className="flex bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 shadow-xl hover:shadow-sm"
              >
                Add Employee
              </button>
            </div>
            {deleteId ? (
              DeleteComponent({ deleteHandler, cancelHandler })
            ) : (
              <></>
            )}
          </div>
          <div className="container mx-auto">{visible ? <Form /> : <></>}</div>

          <div className="container mx-auto">
            <Table />
          </div>
        </div>
      </main>
    </section>
  );
}

function DeleteComponent({ deleteHandler, cancelHandler }) {
  return (
    <div className="flex gap-5 items-center">
      <p>Are you Sure?</p>
      <button
        onClick={deleteHandler}
        className="flex bg-red-500 text-white rounded-md px-4 py-2 hover:bg-rose-500"
      >
        yes
      </button>
      <button
        onClick={cancelHandler}
        className="flex bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-500"
      >
        no
      </button>
    </div>
  );
}
