import React from 'react';
import './Product.css';

export const Products = ({ product, cart, setCart }) => {

    const addCart = () => {
        setCart([...cart, product]);
    };
    const removeCart = () => {
        setCart(cart.filter((c) => c.id !== product.id));
    };

    return (
        <div className="product">
            <div className="img">
                <img src={product.pic} alt={product.name} />
            </div>
            <div className="details">
                <h3>{product.name}</h3>
                <p>Price Rs: {product.amt}</p>
                {cart.includes(product) ? (
                    <button className='btnremove' onClick={removeCart}>Remove from Cart</button>
                ) : (
                    <button onClick={addCart}>Add to Cart</button>
                )
                }
            </div>
        </div>
    );
};
