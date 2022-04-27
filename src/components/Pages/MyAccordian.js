import React, { useState } from "react";

const MyAccordian = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="container-influid">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-md-6 col-12">
                <div className="main-heading">
                  <h6 className="plush" onClick={() => setShow(!show)}>
                    {question}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
            {show && <p className="myAccordian_p">{answer}</p>}
      </div>
    </>
  );
};

export default MyAccordian;
