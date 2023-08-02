import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { FaMicrosoft, FaTableList } from "react-icons/fa6";
import Select from 'react-select'


const Products = () => {

    const gridView = 'grid';
    const listView = 'list';

    const [displayType, setDisplayType] = useState(false);

    const toggleGrid = () => {
        if (gridView == 'grid') {
            // setDisplayType(true)
            setDisplayType(displayType => !displayType)
        }
        console.log(displayType)

    }


    // select 
    const options = [
        { value: '0-100', label: '100-500' },
        { value: '500-1000', label: '500-1000' },
        { value: 'a2z', label: 'A to Z' }
    ]
    const options2 = [
        { value: 'apple', label: 'Apple' },
        { value: 'samsung', label: 'Samsung' },
        { value: 'dell', label: 'Dell' }
    ]


    return (
        <div className='min-h-screen my-5 mx-5'>
            <div className="lg:w-7/12 md:w-11/12 mx-auto">
                <div className='lg:hero-content lg:gap-40 justify-between'>
                    <div className='hero-content gap-20 justify-between'>
                        <div className="join">
                            <input className="input input-bordered join-item" placeholder="Search" />
                            <button className="btn join-item rounded-r-full"><FaSearch></FaSearch></button>
                        </div>
                        <div className=''>
                            <label className="swap swap- text-9xl">
                                <input type="checkbox" />
                                <div onClick={() => toggleGrid()} className="swap-on text-[30px] bg-slate-200 rounded-md p-1"> <FaMicrosoft></FaMicrosoft> </div>
                                <div onClick={() => toggleGrid()} className="swap-off text-[30px] bg-slate-200 rounded-md p-1"><FaTableList></FaTableList></div>
                            </label>
                        </div>
                    </div>
                    <div className='hero-content lg:gap-40 justify-between'>
                        <div className='shrink-0 w-32'>
                            <h3>Total Product 0</h3>
                        </div>
                        <div className='lg:flex-none w-48 lg:z-50'>
                            <Select className="w-full" options={options} />
                            {/* <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Who shot first?</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select> */}
                        </div>
                    </div>
                </div>
                <div className={displayType ? 'lg:gap-16 justify-between items-start hero-content' : ' lg:gap-10 justify-start items-start hero-content'}>
                    <div className='lg:block hidden leading-9'>
                        <div className='mb-8 w-44'>
                            <h2 className='text-xl font-semibold mb-4'>Category</h2>
                            <ul>
                                <li>All</li>
                                <li>Mobile</li>
                                <li>Laptop</li>
                                <li>Computer</li>
                                <li>Accessories</li>
                                <li>Watch</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='text-xl font-semibold mb-4'>Company</h2>
                            <Select className="w-full" options={options2} />
                        </div>

                    </div>
                    <div className='flex-none w-full'>
                        {displayType ? <>
                            <div className='justify-center grid lg:grid-cols-3 md:grid-cols-2 lg:gap-32 md:gap-6'>
                                <div className="card lg:w-72 md:w-full min-h-full card-compact bg-base-100 shadow-xl">
                                    <figure className='w-full h-[250px] mx-auto'><img className='w-full' src='https://i.ibb.co/bsMVr52/Apple-i-Phone-14-Pro-Max.jpg' alt="" /></figure>
                                    <div className="card-body bg-slate-100 leading-tight">
                                        <h2 className="card-title text-2xl">Titles</h2>
                                        <h2 className='text-md font-bold text-md'>Price: $24</h2>
                                        <p className='font-semibold'>Brand Name: </p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Add Cart</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card lg:w-72 md:w-full min-h-full card-compact bg-base-100 shadow-xl">
                                    <figure className='w-full h-[250px] mx-auto'><img className='w-full' src='https://i.ibb.co/0jfhH17/sel-43s22kks-01-228x228.webp' alt="Shoes" /></figure>
                                    <div className="card-body bg-slate-100 leading-tight">
                                        <h2 className="card-title text-2xl">'Title'</h2>
                                        <h2 className='text-md font-bold text-md'>Price: $</h2>
                                        <p className='font-semibold'>Brand Name: </p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Add Cart</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card lg:w-72 md:w-full min-h-full card-compact bg-base-100 shadow-xl">
                                    <figure className='w-full h-[250px] mx-auto'><img className='w-full' src='https://i.ibb.co/6Dfw7wQ/envy-15-ep1890tx-01-228x228.jpg' alt="Shoes" /></figure>
                                    <div className="card-body bg-slate-100 leading-tight">
                                        <h2 className="card-title text-2xl">'Title'</h2>
                                        <h2 className='text-md font-bold text-md'>Price: $</h2>
                                        <p className='font-semibold'>Brand Name: </p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Add Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </>
                            :
                            <>
                                <div className="mb-5 card w-full card-side bg-base-100 shadow-xl">
                                    <figure className='w-72 h-[250px] mx-auto'><img src="https://i.ibb.co/bsMVr52/Apple-i-Phone-14-Pro-Max.jpg" alt="Movie" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-2xl">'Title'</h2>
                                        <h2 className='text-md font-bold text-md'>Price: $</h2>
                                        <p className='font-semibold'>Brand Name: </p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Add Cart</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card w-full card-side bg-base-100 shadow-xl">
                                    <figure className='w-72 h-[250px] mx-auto'><img src="https://i.ibb.co/bsMVr52/Apple-i-Phone-14-Pro-Max.jpg" alt="Movie" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-2xl">'Title'</h2>
                                        <h2 className='text-md font-bold text-md'>Price: $</h2>
                                        <p className='font-semibold'>Brand Name: </p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Add Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;