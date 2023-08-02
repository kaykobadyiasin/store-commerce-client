import React from 'react';
import GridView from './GridView/GridView';
import ListView from './ListView/ListView';
import { useState } from 'react';
import { FaMicrosoft, FaTableList } from "react-icons/fa6";

const About = () => {

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

    // const toggleList = () => {
    //     if (listView == 'list') {
    //         setDisplayType(displayType => displayType)
    //     }
    // }

    return (
        <div className='my-20'>
            <div className='container mx-auto'>
                {/* <button onClick={() => toggleGrid()} className='btn btn-primary mr-5'>Grid</button>
                <button onClick={() => toggleGrid()} className='btn btn-primary mr-5'>List</button> */}

                <label className="swap swap- text-9xl">

                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" />

                    <div onClick={() => toggleGrid()} className="swap-on text-[30px] bg-slate-200 rounded-md p-1"> <FaMicrosoft></FaMicrosoft> </div>
                    <div onClick={() => toggleGrid()} className="swap-off text-[30px] bg-slate-200 rounded-md p-1"><FaTableList></FaTableList></div>
                </label>


                <div className='w-6/12'>
                    {!displayType ? <GridView></GridView> : <ListView></ListView>}
                </div>




            </div>
        </div>
    );
};

export default About;