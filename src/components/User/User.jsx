import React from 'react';

const User = (props) => {
    const {name, email, phone, company}= props.user;
    console.log(props.user)
    return (
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{company.name}</p>
        </div>
    );

};


export default User;