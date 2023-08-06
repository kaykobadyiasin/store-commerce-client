import { useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { FaMicrosoft, FaTableList } from "react-icons/fa6";
import Select from 'react-select'


const Products = () => {

    const gridView = 'grid';
    // const listView = 'list';

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

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('electronicProducts.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div className='min-h-screen my-5 mx-5'>
            <div className="lg:w-7/12 w-full md:w-11/12 mx-auto">
                <div className='xl:hero-content lg:flex-wrap md:hero-content lg:gap-0 md:gap-40 justify-between'>
                    <div className='hero-content lg:gap-20 justify-between'>
                        <div className="join w-full lg:w-60 md:w-60">
                            <input className="input input-bordered join-item lg:w-full w-8/12 " placeholder="Search" />
                            <button className="btn join-item rounded-r-full"><FaSearch></FaSearch></button>
                        </div>
                        <div className=''>
                            <label className="swap text-9xl w-full">
                                <input type="checkbox" />
                                <div onClick={() => toggleGrid()} className="swap-on text-[30px] bg-slate-200 rounded-md p-1"> <FaMicrosoft></FaMicrosoft> </div>
                                <div onClick={() => toggleGrid()} className="swap-off text-[30px] bg-slate-200 rounded-md p-1"><FaTableList></FaTableList></div>
                            </label>
                        </div>
                    </div>
                    <div className='hero-content lg:gap-40 justify-between'>
                        <div className='shrink-0 lg:w-44'>
                            <h3 className='text-xl'>Total Product {products.length}</h3>
                        </div>
                        <div className='lg:flex-none lg:w-48 md:w-40 lg:z-50'>
                            <Select className="w-full" options={options}/>
                        </div>
                    </div>
                </div>

            </div>
            <div className=' xl:w-8/12 lg:w-full md:w-full w-full mx-auto'>
                <div className={displayType ? 'lg:gap-10 justify-between items-start hero-content' : 'lg:gap-10 justify-items-stretch items-start hero-content'}>
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
                        <div className='mt-8'>
                            <h2 className='text-xl font-semibold mb-4'>Colors</h2>
                            <div className='flex items-center gap-4'>
                                <span>All</span>
                                <div className='w-6 h-6 border-2 p-1 bg-warning rounded-full'></div>
                                <div className='w-6 h-6 border-2 p-1 bg-red-400 rounded-full'></div>
                                <div className='w-6 h-6 border-2 p-1 bg-secondary rounded-full'></div>
                                <div className='w-6 h-6 border-2 p-1 bg-secondary-content rounded-full'></div>
                                <div className='w-6 h-6 border-2 p-1 bg-base-100 rounded-full'></div>
                            </div>
                        </div>
                        <div className='mt-8'>
                            <h2 className='text-xl font-semibold mb-4'>Price</h2>
                            <span className='text-lg'>$50,000,00</span>
                            <input type="range" min={0} max="100" value="40" className="range range-primary" />
                        </div>
                        <div className='mt-8'>
                            <button className='btn btn-primary text-white'>Clear Filters</button>
                        </div>

                    </div>
                    <div className=''>

                        {displayType ? <>
                            <div className='justify-center grid lg:grid-cols-3 md:grid-cols-2 xl:gap-10 lg:gap-5 md:gap-6 gap-6'>
                                {
                                    products.map(product => <>
                                        <div className="card lg:w-full w-full md:w-full min-h-full card-compact bg-base-100 shadow-xl">
                                            <figure className='lg:w-52 w-72 h-[250px] mx-auto p-2'><img className='w-full' src={product.productImage} alt="Shoes" /></figure>
                                            <div className="card-body bg-slate-100 leading-tight">
                                                <h2 className="card-title text-2xl">{product.productName}</h2>
                                                <h2 className='text-md font-bold text-md'>Price: ${product.productPrice}</h2>
                                                <p className='font-semibold'>Brand Name: {product.brandName}</p>
                                                <div className="card-actions justify-end">
                                                    <button className="btn btn-primary">Add Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </>)
                                }
                            </div>

                        </>
                            :
                            <>

                                {
                                    products.map(product => <>
                                        <div className="mb-5 card w-full card-side bg-base-100 shadow-xl">
                                            <figure className='lg:w-72 w-52 h-[250px] mx-auto p-2'><img src={product.productImage} alt="Movie" /></figure>
                                            <div className="card-body">
                                                <h2 className="card-title lg:text-2xl">{product.productName}</h2>
                                                <h2 className='text-md font-bold text-md'>Price: ${product.productPrice}</h2>
                                                <p className='font-semibold'>Brand Name: {product.brandName}</p>
                                                <div className="card-actions justify-end items-center">
                                                    <button className="btn btn-primary">Add Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </>)
                                }
                            </>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;