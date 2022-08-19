//HELPER FUNCTIONS TO INTERACT AND CONSUME THE API DATA FROM THE FRONTEND

//return all users from api
export const getUsers = async () => {
  const response = await fetch("/api/users");
  const json = await response.json();
  return json;
};

//return single user from api
export const getUser = async (userId) => {
  const response = await fetch(`/api/users/${userId}`);
  const json = await response.json();
  return json;
};

//posting new user
export const addUser = async (formData) => {
  try {
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    const response = await fetch("/api/users", Options);
    const json = await response.json();
    return json;
  } catch (err) {
    return err;
  }
};

//return single user from api
export const updateUser = async (userId, formData) => {
  const Options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };
  const response = await fetch(`/api/users/${userId} `, Options);
  const json = await response.json();
  return json;
};

//delete single user from api
export const deleteUser = async (userId) => {
  const Options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(`/api/users/${userId} `, Options);
  const json = await response.json();
  return json;
};
