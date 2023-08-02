import React from 'react';
import { Fade } from 'react-awesome-reveal';

const ListView = () => {
    return (
        <Fade>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/bsMVr52/Apple-i-Phone-14-Pro-Max.jpg" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default ListView;