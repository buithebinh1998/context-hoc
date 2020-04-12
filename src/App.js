import React from 'react';
import './App.css';
import UserForm from './components/UserForm/UserForm'
import UserList from './components/UserList/UserList'
import {UserProvider} from './components/UserContext'
function App() {
  return (
    <UserProvider>
      <div className="App">
        <UserForm/>
        <UserList/>
      </div>
    </UserProvider>
  );
}

export default App;
