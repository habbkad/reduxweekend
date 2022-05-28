export const addUser = (user) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};

export const editUser = (edit) => {
  return {
    type: "EDIT_USER",
    payload: edit,
  };
};
