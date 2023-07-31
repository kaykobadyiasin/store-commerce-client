import React from 'react';

const Feature = ({feature}) => {

    const {productName, productPrice, brandName, productImage} = feature;

    return (
        <div>
            <div className="card w-full min-h-full card-compact bg-base-100 shadow-xl p-3">
                <figure className='w-72 h-[300px] mx-auto'><img className='w-full' src={productImage} alt="Shoes" /></figure>
                <div className="card-body leading-tight">
                    <h2 className="card-title text-2xl">{productName}</h2>
                    <h2 className='text-md font-bold text-md'>Price: ${productPrice}</h2>
                    <p className='font-semibold'>Brand Name: {brandName}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;