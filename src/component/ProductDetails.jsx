import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../Redux/CartSlice';

const ProductDetails = () => {
    const { productId } = useParams();
    const [productDetails, setProductDetails] = useState({
        productImage: '',
        productName: '',
        productDescription: '',
        productPrice: 0
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [qty, setQty] = useState(1); // Initialize qty state with 1
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/products/${productId}`);
                setProductDetails(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    const handleAddProduct = () => {
        dispatch(addProduct({
            productId: productId,
            productImage: productDetails.productImage,
            productName: productDetails.productName,
            productPrice: productDetails.productPrice,
            qty: qty
        }));
        // const cart = useSelector(state => state.cart.cart); 
        // console.log('cartdata',cart);
    };

    const IncreaseQty = () => {
        setQty(prevQty => prevQty + 1);
    };

    const decreaseQty = () => {
        if (qty > 1) { // Ensure qty does not go below 1
            setQty(prevQty => prevQty - 1);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <>
            <Card shadow={false} className="border border-b-gray-300 rounded-none flex justify-center w items-center">
                <CardBody className="pb-0 bg-grey flex w-2/3 gap-12 mb-2">
                    <div className="rounded-xl min-w-[280px] w-full p-2 h-28">
                        <img src={productDetails.productImage} alt={productDetails.productName} className="min-w-[280px] w-full object-cover h-[200px] rounded-lg " />
                    </div>
                    <div className="flex justify-between h24 flex-col">
                        <div>
                            <Typography className="mb-2 mt-2" color="blue-gray" variant="h6">
                                {productDetails.productName}
                            </Typography>
                            <Typography className="mb-2 mt-2" color="blue-gray" variant="h6">
                                {productDetails.productDescription}
                            </Typography>
                        </div>
                        <div className='flex mt-6 justify-between mb-2'>
                            <div>
                                <Typography className="mb-2 mt-4 ml-2" color="blue-gray" variant="h6">
                                    {`Price : $${productDetails.productPrice}`}
                                </Typography>
                                <div className='flex flex-row gap-2 ml-2 mt-3'>
                                    <button onClick={IncreaseQty}  >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6 bg-gray-900 rounded-full p-1">
                                            <path strokeLinecap="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                    </button>
                                    <p className='text-lg'>{qty}</p>
                                    <button onClick={decreaseQty}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6 bg-gray-900 rounded-full p-1">
                                        <path strokeLinecap="round"  d="M5 12h14" />
                                    </svg>
                                    </button> {/* Button content for decrement */}
                                </div>
                            </div>
                            <Link to="/Cart">
                                <Button
                                    variant="filled"
                                    color='black'
                                    onClick={handleAddProduct}
                                    className="rounded-xl mt-2 mb-0 mr-4 py-2 h-10 text-sm"
                                >
                                    Add to Cart
                                </Button>
                            </Link>
                            
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>
    );
};

export default ProductDetails;
