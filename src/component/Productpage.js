import React, { useState, useEffect } from 'react';
import Header from './header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './footer';

const Productpage = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            const updatedCart = cart.map(item => {
                if (item.id === product.id) {
                    return {...item, quantity: item.quantity + 1};
                }
                return item;
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, {...product, quantity: 1}]);
        }
    };

    const removeFromCart = (productId) => {
        const updatedCart = [...cart];
        const existingItemIndex = updatedCart.findIndex(item => item.id === productId);
    
        if (existingItemIndex !== -1) {
          if (updatedCart[existingItemIndex].quantity > 1) {
            updatedCart[existingItemIndex].quantity -= 1;
          } else {
            updatedCart.splice(existingItemIndex, 1);
          }
          setCart(updatedCart);
        }
      };


    return (
        <div className="content">
            <Header />
            <table style={{width:'100%'}}>
                <tr>
                    <td style={{width: '70%'}}><ProductList addToCart={addToCart} /></td>
                    <td style={{width: '30%', verticalAlign:'top'}}><Cart cart={cart} removeFromCart={removeFromCart}/></td>
                </tr>
            </table>
            <Footer />
        </div>
    );
};

export default Productpage;
