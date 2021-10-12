import React, { useState } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
    const [error , setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length == 0 || enteredAge.trim().length == 0)
    {
        setError({title: "invalid title" ,message: "Please Enter a valid usename !"})
        return;
    }
      
    if (+enteredAge < 1) 
    {
        
        setError({title: "invalid age" ,message: "Please Enter a valid age !"})
        return;
    }
    props.onAddUser(enteredUsername, enteredAge);

    setEnteredAge("");
    setEnteredUsername("");
  };

  const removeModal = () => {
      setError(null);
      console.log("btn")
  }
  
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  return (
    <>
      <div >
        {error && 
        <ErrorModal title={error.title}
         message={error.message} 
         onRemoval={removeModal}
         />}
        <Card>
          <form onSubmit={addUserHandler}>
            <label>UserName</label>
            <input
              type="text"
              onChange={usernameChangeHandler}
              value={enteredUsername}
            ></input>
            <label>Age (years)</label>
            <input
              type="text"
              onChange={ageChangeHandler}
              value={enteredAge}
            ></input>
            <button type="submit">Add User</button>
          </form>
        </Card>
      </div>
    </>
  );
}

export default AddUser;
