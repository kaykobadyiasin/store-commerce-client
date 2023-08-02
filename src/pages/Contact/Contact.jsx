import React from 'react';

const Contact = () => {
    return (
        <div className='mt-10'>
            <h2 className='text-center text-3xl font-semibold'>Feel Free to Contact Us</h2>
            <div className='w-full my-10'>
                <iframe className='w-full h-[500px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.01522838238!2d90.33688079342652!3d23.780771678626788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1690821453377!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div>
                <div className="hero-content mx-auto my-20">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form action='https://formspree.io/f/moqojddw' method='POST' className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" placeholder="User Name" required name='User Name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Email" required name='Email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea className="textarea textarea-bordered" required name='Message' placeholder="Message"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className='btn btn-primary' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;