import connectMongo from "../../../database/conn";
import {
  deleteUser,
  getUsers,
  postUser,
  putUser,
} from "../../../database/controller";

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error in the connection" })
  );

  //type of request (get post put delete)
  const { method } = req;

  switch (method) {
    case "GET":
      return getUsers(req, res);

      break;
    case "POST":
      return postUser(req, res);
      break;
    case "PUT":
      return putUser(req, res);
      break;
    case "DELETE":
      return deleteUser(req, res);
      break;
    default:
      // res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      return res.status(405).end(`Method ${method} not allowed `);
      break;
  }
}
