import React, { useState } from 'react';

const ProductItem = ({ product, addToCart }) => {
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="product-item">
            <img src={product.image} alt={product.name} style={{width: '100px', height: 'auto'}} />
            <h3 onMouseEnter={toggleDescription} onMouseLeave={toggleDescription}>{product.name}</h3>
            {showDescription && <p>{product.description}</p>}
            <p>Price: ${product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductItem;
