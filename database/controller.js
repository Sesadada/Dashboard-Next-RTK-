import Users from "../model/user";
//HELPER FUNCTIONS TO GET USERS FROM THE DB TO THE API AND MAKE ACTIONS BASED ON CRUD

//controller to GET the users from db to th api http://localhost:3000/api/users
export async function getUsers(req, res) {
  try {
    const users = await Users.find({});

    if (!users) return res.status(404).json({ error: "Data not found" });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: "error while fetching Data" });
  }
}

//controller to GET a user from db to th api http://localhost:3000/api/users

export async function getUser(req, res) {
  try {
    const { userId } = req.query;
    if (userId) {
      const user = await Users.findById(userId);
      res.status(200).json(user);
    }

    // res.status(404).json({ error: "User not selected" });
  } catch (error) {
    res.status(404).json({ error: "cannot get" });
  }
}

//controller to POST a user to db through api http://localhost:3000/api/users
export async function postUser(req, res) {
  try {
    const formData = req.body;
    if (!formData) {
      return res.status(404).json({ error: "data not provided" });
    } else {
      Users.create(formData, function (err, data) {
        return res.status(200).json(data);
      });
    }
  } catch (error) {
    res.status(404).json({ error });
  }
}

//controller to PUT a user in db through api http://localhost:3000/api/users/1
export async function putUser(req, res) {
  try {
    const { userId } = req.query;
    const formData = req.body;
    if (formData && userId) {
      const user = await Users.findByIdAndUpdate(userId, formData);
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "not found" });
    }
  } catch (error) {
    res.status(404).json({ error: "error while updating the data" });
  }
}

//controller to DELETE a user in db through api http://localhost:3000/api/users/1
export async function deleteUser(req, res) {
  try {
    const { userId } = req.query;

    if (userId) {
      const user = await Users.findByIdAndDelete(userId);
      return res.status(200).json(user);
    }
    res.status(404).json({ error: "user not selected" });
  } catch (error) {
    res.status(404).json({ error: "error while deleting the data" });
  }
}
