import React, {useState, createContext} from 'react'

export const UserContext = createContext();

export const UserProvider =  (props) => {
    const [users, setUsers] = useState([
        {id: '1', name: 'Binh', email: 'binh.buithe@pycogroup.com', active: false}
    ]); 
    
    return(
        <UserContext.Provider value={[users, setUsers]}>{props.children}</UserContext.Provider>
    );
}