import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';
import { Typography } from '@material-tailwind/react';
import CustomNavbar from './CustomNavbar';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/products/allProducts"); // Adjust the URL to your API endpoint
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        console.log(err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <Typography className="text-center">Loading...</Typography>;
  }

  if (error) {
    return <Typography className="text-center text-red-500">Error fetching products: {error.message}</Typography>;
  }

  return (
    <>
    <div className='colo'>
    <CustomNavbar />
    </div>
    <section className="py-10   ">
      <div className="mx-auto text-center mb-16 ">
        <Typography className="font-medium text-lg">Tailored Product Search</Typography>
        <Typography variant="h1" className="my-4 text-4xl">Find What You Need</Typography>
        <Typography className="!font-normal text-gray-500 mx-auto max-w-2xl">
          Simplify your shopping experience with our intuitive filter system.
          Whether you're looking for specific features, price ranges, or brands.
        </Typography>
      </div>
      <div className="mx-auto container ">
        <div className="grid grid-cols-1 gap-28 lg:grid-cols-3 md:grid-cols-2 mx-24">
        {products.map(({ _id
        
        
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
      </div>
    </section>
    </>
  );
};

export default Products;
