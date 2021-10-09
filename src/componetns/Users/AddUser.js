import React, {useState} from "react";
import Card from "../UI/Card";

function AddUser(props) {
    const [enteredUsername,setEnteredUsername] = useState('');
    const [enteredAge,setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length == 0 || enteredAge.trim().length == 0)
    return;
    if(+enteredAge < 1)
    return;

    props.onAddUser(enteredUsername,enteredAge);

    setEnteredAge("");
    setEnteredUsername("");
  };

  const usernameChangeHandler = (event) => {
      setEnteredUsername(event.target.value);
  }
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
}
  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label>UserName</label>
        <input type="text" onChange={usernameChangeHandler} value={enteredUsername}></input>
        <label>Age (years)</label>
        <input type="text" onChange={ageChangeHandler} value={enteredAge}></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
}

export default AddUser;
