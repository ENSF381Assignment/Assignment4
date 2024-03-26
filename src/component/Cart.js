import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, removeFromCart}) => {
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div className="cart">
            <h2>Cart</h2>
            {cart.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    removeFromCart={removeFromCart}
                />
            ))}
            <div className="total">
                <h3>Total Price: ${totalPrice}</h3>
            </div>
        </div>
    );
};

export default Cart;