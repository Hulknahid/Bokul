import React from 'react';
import Image from '../../../public/assets/images/banner-01.jpg'

const Products = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center">
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-md-6 col-10">
                                <figure>
                                    <img src={Image} alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;