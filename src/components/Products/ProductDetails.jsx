import React from 'react';

const selectedProduct = {
    name:"Stylish Jacket",
    price:120,
    originalPrice:150,
    description: "this is stylish Jacket perfect for any occasion",
    brand:"FashionBrand",
    material:"Leaher",
    sizes:["S","M", "L", "XL"],
    colors:["Red", "Black"],
    images:[
        {
            url:'https://picsum.photos/500/500?random=1',
            altText:"Stylish Jacket 1",
        },
        {
            url:'https://picsum.photos/500/500?random=2',
            altText:"Stylish Jacket 1",
        },
        {
            url:'https://picsum.photos/500/500?random=3',
            altText:"Stylish Jacket 1",
        },
        {
            url:'https://picsum.photos/500/500?random=4',
            altText:"Stylish Jacket 1",
        }, 
    ]
}

const ProductDetails = () => {
    return (
        <div className='p-6'>
            <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg'>
                <div className='flex flex-col md:flex-row'>
                    {/*** Left Thumbnails */}
                    <div className='hidden md:flex flex-col space-y-4 mr-6'>
                        {selectedProduct.images.map((image, index)=>{
                            return <img 
                                key={index}
                                src={image.url} 
                                alt={image.altText || `Thumbnail ${index}`}
                                className='w-20 h-20 object-cover rounded-lg cursor-pointer border'
                            />
                        })}

                        {/***Main Image */}
                        <div className='md:w-1/2'>
                            <div className='mb-4'>
                                <img 
                                    src={selectedProduct.images[0]?.url} 
                                    alt='Main Product'
                                    className='w-full h-auto object-cover rounded-lg' 
                                />

                                {/***Mobile Thumbnail */}
                                <div className='md:hidden flex overflow-x-scroll space-x-4 mb-4'>
                                    {selectedProduct.images.map((image, index)=>{
                                        return <img 
                                            key={index}
                                            src={image.url} 
                                            alt={image.altText || `Thumbnail ${index}`}
                                            className='w-20 h-20 object-cover rounded-lg cursor-pointer border'
                                        />
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
