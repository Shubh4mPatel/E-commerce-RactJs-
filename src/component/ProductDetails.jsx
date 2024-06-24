import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, updateProduct, removeProduct } from '../Redux/CartSlice';

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
    const [qty, setqty] = useState(1);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart);

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
    };

    const IncreaseQty = () => {
        setqty(prevqty => prevqty + 1);
    }

    const decreaseQty = () => {
        setqty(prevqty => prevqty - 1)
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <>
            <Card shadow={false} className="border border-gray-300">
                <CardBody className="pb-0 bg-grey flex">
                    <div className="rounded-xl min-w-[280px] w-full p-2">
                        <img src={productDetails.productImage} alt={productDetails.productImage} className="min-w-[280px] w-full object-cover h-[200px] rounded-tl-lg rounded-tr-lg" />
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
                        <div className='flex mt-6 justify-between mb-2 '>
                            <div>
                                <Typography className="mb-2 mt-4 ml-2" color="blue-gray" variant="h6">
                                    {`Price : $${productDetails.productPrice}`}
                                </Typography>
                                <Button onClick={IncreaseQty()}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                </Button>
                                <p>{qty}</p>
                                <Button onClick={decreaseQty()}></Button>
                            </div >
                            <Link to="/Login">
                                <Button
                                    variant="filled"
                                    color='black'
                                    onClick={handleAddProduct}
                                    className="rounded-xl mt-2 mb-2 mr-4 py-2 h-10 text-sm"
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
