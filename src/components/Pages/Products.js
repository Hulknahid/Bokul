// import React,  { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import ProductsD2 from "./ProductsD2";

// const Products = () => {
//   let params =  useParams();
//   // console.log("params:", params.productId);

//   const [details, setDetails] = useState({})

//   useEffect(()=>{
//     axios.get(`inventory/variant/${params.productId}`).then(res =>{
//       // console.log("products-details:", res.data);
//       setDetails(res.data)
//     }).catch(err=>{
//       console.log(err.response);
//     })
//   },[])
//   // console.log("details :",  details);
//   // console.log("nahid :",  details.variant);
//   return (
//     <>
//       <div className="container-fluid mt-3 details">
//         <div className="row">
//           <div className="col-11 mx-auto">
//             <div className="row d-flex align-items-center justify-content-center">
//               <div className="col-md-6 col-12">
//                 <figure>
//                   <img
//                     src={details && details.variant && details.variant.imageUrls[0]}
//                     alt="Product_image"
//                     className="img-fluid"
//                   />
//                 </figure>
//               </div>
//               <div className="col-md-6 col-12 text-right">
//                 <div>
//                   <h5 className="products_h5">
//                     {/* a gift of renewal for your journey hand relief tri */}
//                     {details.variant && details.variant.product.name}
//                   </h5>
//                   <h6>$ {details.salePrice}</h6>
//                   <p className="text-muted">{details.variant && details.variant.product.name}</p>
//                 </div>

//                 <ProductsD2 />

//                 <div className="row">
//                   <h6 className="my-3">QUANTITY</h6>
//                   <div className="col-6">
//                     <div className="pasignation">
//                       <button className="pasignation_left">-</button>
//                       <div className="pasignation_input">
//                         <input
//                           type="text"
//                           placeholder="1"
//                           className="pasignation_input"
//                         />
//                       </div>
//                       <button className="pasignation_right">+</button>
//                     </div>
//                   </div>
//                   <div className="col-6">
//                     <button className="pasignation_btn">add to cart</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Products;


import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductsD2 from "./ProductsD2";

const Products = () => {
  let params = useParams();
  // console.log("params:", params)

  const [details, setDetails] = useState({})
  
  useEffect(()=>{
  axios.get(`/inventory/variant/${params.productId}`).then(res =>{
    setDetails(res.data);
    // console.log(res.data);
  }).catch(err =>{
    console.log(err.response);
  })
  }, []);
console.log(details)
  return (
    <>
      <div className="container-fluid mt-3 details">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-md-6 col-12">
                <figure>
                  <img
                    src={details && details.variant && details.variant.imageUrls[0]}
                    alt="Product_image"
                    className="img-fluid"
                  />
                </figure>
              </div>
              <div className="col-md-6 col-12 text-right">
                <div>
                  <h5 className="products_h5">
                    {/* a gift of renewal for your journey hand relief tri */}
                    {details.variant && details.variant.product.name}
                  </h5>
                  <h6>$ {details.salePrice}</h6>
                  <p className="text-muted">{details.variant && details.variant.product.name}</p>
                </div>

                <ProductsD2 />

                <div className="row">
                  <h6 className="my-3">QUANTITY</h6>
                  <div className="col-6">
                    <div className="pasignation">
                      <button className="pasignation_left">-</button>
                      <div className="pasignation_input">
                        <input
                          type="text"
                          placeholder="1"
                          className="pasignation_input"
                        />
                      </div>
                      <button className="pasignation_right">+</button>
                    </div>
                  </div>
                  <div className="col-6">
                    <button className="pasignation_btn">add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
