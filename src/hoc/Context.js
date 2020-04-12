import React, {useState} from 'react'
import {UserContext} from '../components/UserContext'
export const Context =  (props) => {
    const [users, setUsers] = useState([
        {id: '1', name: 'Binh', email: 'binh.buithe@pycogroup.com', active: false}
    ]); 
    
    return(
        <UserContext.Provider value={[users, setUsers]}>
            {props.children}
        </UserContext.Provider>
    );
}