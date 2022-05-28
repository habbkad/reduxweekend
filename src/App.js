import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { addUser } from "./Actions/Actions";
import { connect, useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import EditData from "./EditData";
import MapComponent from "./MapComponent";

function App(props) {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  console.log(name);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //const state = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      username: name,
      age,
    };

    props.addUser(newPerson);
  };

  console.log(props);
  return (
    <div className="App">
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

      {props.state.map((item, index) => {
        return (
          <div key={index}>
            <MapComponent user={item} />
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state.users,
  };
};

const mapDispatchToProps = {
  addUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;
