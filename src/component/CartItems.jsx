import React from 'react'

const CartItems = 

({ id ,img, name, price }) => {
    return (
        <Card shadow={true} className="border border-gray-300">
            <CardBody className="pb-0 bg-grey ">
                <div className="rounded-xl min-w-[280px] w-full p-2 ">
                    <img src={img} alt={img} className="min-w-[280px] w-full object-cover h-[200px] rounded-tl-lg rounded-tr-lg" />
                </div>
                <div className="flex justify-between h24 flex-col">
                    <div>
                        <Typography className="mb-2 mt-2" color="blue-gray" variant="h6">
                            {name}
                        </Typography>
                    </div>
                    <div className='flex mt-6 justify-between mb-2 '>
                        <Typography className="mb-2 mt-4 ml-2" color="blue-gray" variant="h6">
                            {`Price : $${price}`}
                        </Typography>
                        <Link to={`/ProductDetails/${id}`}> <Button ariant="filled" color='black' className="rounded-xl  mt-2 mb-2 mr-4 py-2 h-10 text-sm" >Add to Cart</Button></Link>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default CartItems