import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";

export default function User() {
    const [user, setUser] = useState([]); 
    const { id } = useParams();
    useEffect(() => {
        axios
            .get(`https://reqres.in/api/users/${id}`)
            .then(function (response) {
                console.log(response.data.data);
                setUser(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            })   
    },[]);

    return (
        <div className="user-container">
            <Helmet>
                <title>{`${user.first_name} ${user.last_name}`}</title>
            </Helmet>
            <img src={user.avatar} alt={user.first_name}/>
            <h1>
                {user.first_name} {user.last_name}
            </h1>
            <p>
                {user.email}
            </p>
        </div>
    )
}
