import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "./Actions/Actions";

const EditData = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(props.user.username);
  const [age, setAge] = useState(props.user.age);
  console.log(name);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      username: name,
      age,
      id: props.user.id,
    };
    console.log(newPerson);
    dispatch(editUser(newPerson));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          placeholder="Name"
          type={"text"}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <input
          value={age}
          placeholder="age"
          type={"number"}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EditData;
