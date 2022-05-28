const initialState = {
  users: [
    { username: "Kwaku", age: 25, id: 41542537 },
    { username: "Kofi", age: 21, id: 54124623 },
    { username: "Abena", age: 22, id: 6326482 },
    { username: "Memuna", age: 45, id: 52153427 },
  ],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return (state = { ...state, users: [...state.users, action.payload] });
    case "EDIT_USER":
      const newData = state.users.filter(
        (user) => user.id !== action.payload.id
      );
      return { users: [...newData, action.payload] };
    default:
      return state;
  }
};

export default Reducer;
