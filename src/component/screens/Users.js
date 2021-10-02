import React, { useEffect,useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

export default function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios
            .get('https://reqres.in/api/users')
            .then(function (response) {
                console.log(response.data.data);
                setUsers(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            
    },[]);

    let renderItems = () => (
         users.map((user) => (
             <div key={user.id} className="users-container">
                 <Link to={`/user/${user.id}`}>
                    <img 
                        src={user.avatar}
                        alt={`${user.first_name} ${user.last_name}`} />
                    <h1>{user.first_name} {user.last_name}</h1>
                    <p>{user.email}</p>
                </Link>
            </div>
        ))
    )
    return (         
        <>
            <Helmet>
                <title>Users List</title>
            </Helmet>
           {renderItems()}
        </>
    )
}
