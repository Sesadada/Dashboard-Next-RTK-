import connectMongo from "../../../database/conn";
import { deleteUser, getUser, putUser } from "../../../database/controller";

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error in the connection" })
  );
  const { method } = req;

  switch (method) {
    case "GET":
      return getUser(req, res);
      break;
    case "PUT":
      return putUser(req, res);
      break;
    case "DELETE":
      return deleteUser(req, res);
      break;
    default:
      //res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      //return res.status(405).end(`Method ${method} not allowed `);
      break;
  }
}
