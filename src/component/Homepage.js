import React from 'react';
import { Link } from 'react-router-dom';
import reviews from "../data/reviews";

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

function CustomerReviews() {
    return (
        <div>
            {reviews.map((review, index) => (
                <div>
                    <p>{review.customerName}</p>
                    <p>{review.reviewContent}</p>
                    <p>Rating: {'★'.repeat(review.stars)}</p>
                    {index < reviews.length - 1}
                </div>
            ))}
        </div>
    );
}

const HomeMainSection = () => {
    return (
        <div>
            <h1>About us</h1>
            <p>Welcome to our online store! We are passionate about providing high-quality products and exceptional customer service. Learn more about our story and commitment to your satisfaction.</p><br/>
            <button><Link to="/products" style={{textDecoration: 'none'}}>Shop Now</Link></button>
            <h1>Customer Reviews</h1>
            <CustomerReviews/>
        </div>
    );
};

const Footer = () => {
    return <span>© 2024 E-commerce. All rights reserved.</span>;
};

const Homepage = () => {
    return (
        <div>
            <Header />
            <HomeMainSection />
            <Footer />
        </div>
    );
};

export default Homepage;
