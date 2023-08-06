 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Keyboard } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero bg-slate-100 py-5">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className='lg:w-7/12 w-full lg:h-[400px] h-[200px]'>
                                <img src="https://i.ibb.co/Tq8S1zn/marie-michele-bouchard-SN6-HW62ub-LA-unsplash.jpg" className="rounded-lg shadow-2xl w-full" />
                            </div>
                            <div className='lg:w-5/12'>
                                <h2 className='text-primary text-md'>Welcome to</h2>
                                <h1 className="text-5xl font-semibold">Store Commerce</h1>
                                <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem rerum minima neque iure natus, odit corporis nisi modi, nostrum voluptas fugit totam voluptatum suscipit, praesentium quibusdam. Consectetur omnis dignissimos unde.</p>
                                <Link to='products' className="btn btn-primary">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero bg-slate-100 py-5">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className='lg:w-7/12 w-full lg:h-[400px] h-[200px]'>
                                <img src="https://i.ibb.co/NLyjr4w/surface-BPTk-OZuf-Leo-unsplash.jpg" className="rounded-lg shadow-2xl w-full h-full" />
                            </div>
                            <div className='lg:w-5/12'>
                                <h2 className='text-primary text-md'>Welcome to</h2>
                                <h1 className="text-5xl font-semibold">Store Commerce</h1>
                                <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem rerum minima neque iure natus, odit corporis nisi modi, nostrum voluptas fugit totam voluptatum suscipit, praesentium quibusdam. Consectetur omnis dignissimos unde.</p>
                                <Link to='products' className="btn btn-primary">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero bg-slate-100 py-5">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className='lg:w-7/12 w-full lg:h-[400px] h-[200px]'>
                                <img src="https://i.ibb.co/ts5ZQv4/clark-street-mercantile-P3p-I6xzovu0-unsplash.jpg" className=" rounded-lg shadow-2xl w-full h-full" />
                            </div>
                            <div className='lg:w-5/12'>
                                <h2 className='text-primary text-md'>Welcome to</h2>
                                <h1 className="text-5xl font-semibold">Store Commerce</h1>
                                <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem rerum minima neque iure natus, odit corporis nisi modi, nostrum voluptas fugit totam voluptatum suscipit, praesentium quibusdam. Consectetur omnis dignissimos unde.</p>
                                <Link to='products' className="btn btn-primary">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;