import React, { useEffect, useState } from 'react';
import Feature from '../Feature/Feature';

const Features = () => {

    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('electronicProducts.json')
        .then(res => res.json())
        .then(data => setFeatures(data))
    }, [])

    return (
        <div className='container mx-auto my-20'>
            <div className='mx-10'>
                <h2 className='text-primary'>Check Now</h2>
                <h2 className='text-3xl font-semibold'>Our Products</h2>
            </div>
            <div className='justify-center grid lg:grid-cols-3 md:grid-cols-2 gap-8 mx-10'>
                {
                    features.map(feature => <Feature
                    key={feature._id}
                    feature={feature}
                    ></Feature>)
                }
            </div>
        </div>
    );
};

export default Features;