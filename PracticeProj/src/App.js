import React, {useState} from 'react';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';

const DUMMY_USERS = [
  {
    id:'e1',
    username: 'Mohit Sankhla',
    age: '20'
  },
  {
    id:'e2',
    username: 'Mohit Lahoti',
    age: '21'
  },
  {
    id:'e3',
    username: 'Nisha Kumari',
    age: '22'
  },
];



function App() {
  const [users, setUsers] = useState(DUMMY_USERS);
  const createUserHandler = (userDetails) => {
    setUsers((prevUsers) => {
      return [
        userDetails,
        ...prevUsers
      ];
    })
  }
  return (
    <>
      <UserForm onCreateUser={createUserHandler}/>
      <Users users={users}/>
    </>
  );
}

export default App;
