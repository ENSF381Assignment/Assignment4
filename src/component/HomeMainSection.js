import reviews from "../data/reviews";
import {Link} from "react-router-dom";
import React from "react";


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
            <button><Link to="/Productpage" style={{textDecoration: 'none'}}>Shop Now</Link></button>
            <h1>Customer Reviews</h1>
            <CustomerReviews/>
        </div>
    );
};

export default HomeMainSection;