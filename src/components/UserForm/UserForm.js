import React, { useState, useContext} from 'react';
import './UserForm.css'
import {UserContext} from '../UserContext'
const UserForm = () => {
    const [users, setUsers] = useContext(UserContext);

    const [id, setID] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [active, setActive] = useState(false);
    const [removeID, setRemoveID] = useState('');

    const idChangedHandler = (event) => {
        setID(event.target.value);
    }

    const nameChangedHandler = (event) => {
        setName(event.target.value);
    }

    const emailChangedHandler = (event) => {
        setEmail(event.target.value);
    }

    const activeChangedHandler = (event) => {
        setActive(event.target.checked);
    }

    const removeIDChangedHandler = (event) => {
        setRemoveID(event.target.value);
    }

    const onCreateUser = () => {
        const user = [...users,{id: id, name: name, email: email, active: active}];
        setUsers(user);
    }
    
    const onRemoveUser = () => {
        const user = [...users];
        setUsers(user.filter(item => item.id !== removeID));
    }

    const onFilterActiveUser = () => {
        const user = [...users];
        setUsers(user.filter(item => item.active === true));
    }


    return (
        <div>
            <form className="input-form">
                <h2>New user information</h2>
                <label>ID:</label>
                <input type="text" name="id" placeholder="ID" value={id} onChange={idChangedHandler}/>

                <label>Name:</label>
                <input type="text" name="name" placeholder="Name" value={name} onChange={nameChangedHandler}/>

                <label>Email:</label>
                <input type="text" name="email" placeholder="Email" value={email} onChange={emailChangedHandler}/>

                <div className="form-inline">
                <label>Active:</label>
                <input type="checkbox" name="active" checked={active} onChange={activeChangedHandler}/>
                </div>

                <div className="form-inline">
                <label style={{color:'red'}}>Remove ID (optional):</label>
                <input type="text" name="removeID" value={removeID} onChange={removeIDChangedHandler}/>
                </div>

            </form>
            <div className="button">
                <button onClick={onCreateUser}>Add a new user</button>
                <button onClick={onRemoveUser}>Remove user</button>
                <button onClick={onFilterActiveUser}>Filter active users</button>
            </div>
        </div>
    );
}


export default UserForm;
