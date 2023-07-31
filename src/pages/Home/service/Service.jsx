import React from 'react';
import { FaCartFlatbedSuitcase, FaHandHoldingDollar, FaShield, FaShieldHalved } from "react-icons/fa6";

const Service = () => {
    return (
        <div>
            <div className='hero-content container mx-auto'>
                <div className='grid lg:grid-cols-3 my-20 gap-10'>
                    <div className='bg-slate-100 rounded-lg py-10 px-20'>
                        <div className='flex justify-center'><FaCartFlatbedSuitcase className='text-3xl'></FaCartFlatbedSuitcase></div>
                        <h2 className='text-md mt-2'>Super Sucure Payment System</h2>
                    </div>
                    <div className='grid grid-rows-2 gap-5'>
                        <div className='bg-slate-100 rounded-lg py-5 px-10 gap-5 flex justify-center items-center'>
                            <div className=''><FaShield className='text-3xl'></FaShield></div>
                            <h2 className='text-md mt-2'>Non-contact Shipping</h2>
                        </div>
                        <div className='bg-slate-100 rounded-lg py-5 px-10 gap-5 flex justify-center items-center'>
                            <div className=''><FaHandHoldingDollar className='text-3xl'></FaHandHoldingDollar></div>
                            <h2 className='text-md mt-2'>Money-back Guaranteed</h2>
                        </div>
                    </div>
                    <div className='bg-slate-100 rounded-lg py-10 px-20'>
                        <div className='flex justify-center'><FaShieldHalved className='text-3xl'></FaShieldHalved></div>
                        <h2 className='text-md mt-2'>Super Sucure Payment System</h2>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service;