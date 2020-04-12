import React, { useContext } from 'react'
import User from '../User/User'
import './UserList.css'
import {UserContext} from '../UserContext'
const UserList = () => {
    const [users] = useContext(UserContext);
    return(
        <div>
        <h2>List of users:</h2>
            <div id="table">
                <div className="row main">
                    <div className="cell id" >ID</div>
                    <div className="cell name" >Name</div>
                    <div className="cell email">Email</div>
                    <div className="cell active">Activation</div>
                </div>
                {users.map(user => (
                    <User id={user.id} name={user.name} email={user.email} active={user.active}/>
                ))}
            </div>
        </div>
    )
}

export default UserList;