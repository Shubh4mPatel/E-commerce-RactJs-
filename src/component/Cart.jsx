import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import Navbar from './CustomNavbar';

const Cart = () => {
    const cart = useSelector(state => state.cart.cart); // Assuming 'cart' is the slice name
    console.log('cart data:', cart);

    return (
      <>
      <Navbar> </Navbar>
        <div>
            <h1>Cart</h1>
            {/* {cart.map(item => (
                <div key={item.productId}>
                    <p>Product Name: {item.productName}</p>
                    <p>Quantity: {item.qty}</p>
                    <p>Price: ${item.productPrice}</p>
                </div>
            ))} */}
            {cart.map(({ _id
        , productImage, productName, productDescription, productPrice }) => (
            <Product
              key={_id}
              id={_id}
              img={productImage}
              name={productName}
              description={productDescription}
              price={productPrice}
            />
          ))}
        </div>
        </>
    );
};

export default Cart;
