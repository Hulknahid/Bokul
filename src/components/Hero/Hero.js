import React from "react";
import '../Hero/Hero.css'
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className="container my-4 hero_section">
      <div className="row mx-auto">
        <div className="col-11 mx-auto">
          <div className="row d-flex align-items-center  justify-content- space-between">
            <div className="col-md-6 col-12">
             <div className="hero_info">
             <h1>Welcome to <br /> Cloud 9 Salon</h1>
              <h6>HOWARD COUNTY'S FAVORITE SALON</h6>
              <p>
                At Cloud 9 it’s all about hair… healthy, fabulous, drop-dead
                gorgeous hair. This is our focus, our passion, our one and only
                specialty. We believe in doing one thing, and doing it superbly
                well. Our hair stylists and technicians are highly trained. Our
                hair products are the finest available on the market. We
                guarantee it.
              </p>
              <div className="mt-2">
              <Button buttonStyle='btn--outline' buttonSize='btn--medium' >SEE OUR SERVICES</Button>
              </div>
             </div>
            </div>
            <div className="col-12 col-md-6">
          {/* <figure className="mt-2 mt-lg-0">
          <img src="assets/images/banner-01.jpg" alt="" className="imgfluid hero_img"/>
          </figure> */}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/wD7Pzg3yttY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="hero_img"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
