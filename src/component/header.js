import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navigation">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/login">Login</Link>
        </nav>
    );
};

const Header = () => {
    return (
        <div>
            <div><img src="/images/logo.png" alt="logo" width="5%"/></div>
            <Navigation />
        </div>
    );
};


export default Header;
