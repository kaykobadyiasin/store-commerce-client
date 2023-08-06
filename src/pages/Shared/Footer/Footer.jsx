 
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-20'>

            <footer className="footer relative lg:justify-around py-20 px-10 bg-black text-white">
                <div className='lg:w-[60%] w-[80%] mx-auto flex justify-around items-center -top-10 md:left-24 lg:left-96 left-12 rounded-md absolute bg-slate-100 h-20 z-30'>
                    <div className='text-black font-semibold'>
                        <p>Ready to get Started?<br />Talk to use today</p>
                    </div>
                    <div className=''>
                        <Link className='btn btn-primary'>Get Started</Link>
                    </div>
                </div>
                <div className=''>
                    <div className='w-20'>
                        <img src="/fav.png" alt="" />
                    </div>
                    <p>Store Commerce<br />Copyright © 2023 - All right reserved</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;