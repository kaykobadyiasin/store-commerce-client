 
import { Fade } from 'react-awesome-reveal';

const GridView = () => {
    return (
        <Fade>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/bsMVr52/Apple-i-Phone-14-Pro-Max.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default GridView;