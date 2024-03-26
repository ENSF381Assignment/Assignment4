import React from 'react';
import { Link } from 'react-router-dom';
import products from "../data/products";

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

function ProductItem({product}) {
    const [showDescription, setShowDescription] = useState(false);

    const handleOnMouseEnter = () => {
        setShowDescription(true);
    };

    const handleOnMouseLeave = () => {
        setShowDescription(false);
    };

    const handleAddToCart = () => {

    }

    return(
        <div onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
            <img> src={product.image}</img>
            <h3>{product.name}</h3>
            {showDescription && <p>{product.description}</p>}
            <p>{product.price}</p>
            <button onClick={handleAddToCart}>Add to cart</button>
        </div>
    );
};

function ProductList() {
    return(
        <div>
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};

function CartItem() {
    return(
        <div>
            
        </div>
    );
};

function Cart() {
    return(
        <div>

        </div>
    );
};

const Footer = () => {
    return <span>© 2024 E-commerce. All rights reserved.</span>;
};

const Productpage = () => {
    return(
        <div className="product-page">
            <Header />
            <table>
                <tr>
                    <td><ProductList /></td>
                    <td style={{verticalAlgin:'top'}}><Cart /></td>
                </tr>
            </table>
            <Footer />
        </div>
    );
};

export default Productpage;