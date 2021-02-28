import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'


const User = (props) => {
    const { name, salary, email, photo} = props.user
    // console.log(props.user)

    const btnStyle = {
        height: '26px',
        width: '150px',
        backgroundColor: 'goldenrod'
    }
    const userStyle = {
        border: "1px solid tomato",
        margin: "10px",
        padding: '10px'
    }
    return (
        <div style={userStyle}>
            <h2>Name: {name}</h2>
            <img style={{width: '300px'}} src={photo} />
            <h4>Yearly Salary: ${salary}</h4>
            <p>Email: {email}</p>
            <button style={btnStyle} onClick={() => props.handlerEvent(props.user)}><FontAwesomeIcon icon={faPlusSquare} />     Add to Cart</button>
        </div>
    );
};

export default User;