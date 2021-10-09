import { useState } from 'react';
import AddUser from './componetns/Users/AddUser';
import UsersList from './componetns/Users/UsersList';

function App() {
  const [userList , setUserList] = useState([]);

  const handleAddUser = (passedName , passedAge) => {
    setUserList((prev) => {
      return [...prev , {name:passedName , age:passedAge}]
    })
  }
  return (
    <div >
     <AddUser onAddUser={handleAddUser}/>
     <UsersList data={userList}/>
    </div>
  );
}

export default App;
