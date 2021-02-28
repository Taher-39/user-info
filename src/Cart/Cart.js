import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalAmount = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        totalAmount = totalAmount + parseInt(element.salary);
    }
    const cartStyle = {
        border: "1px solid tomato",
        margin: "10px",
        padding: '10px',
        width: '400px',
        marginLeft: '35%'
    }
    return (
        <div style={cartStyle}>
            <h4>Total User Added: {cart.length}</h4>
            <h5>Total Added Yearly Salary: {totalAmount}</h5>
        </div>
    );
};

export default Cart;