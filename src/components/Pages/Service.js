import React from "react";
import Button from "../Button/Button";
const Service = () => {
  const getAppSettings = localStorage.getItem("app-settings");
  const parseData = JSON.parse(getAppSettings);
  // console.log("parseData:", parseData);
  const service = parseData.offeredServiceCategories;
  console.log("service", service);

  return (
    <>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-12">
            <div className="img_div"></div>
            <hr />
            <h1 className="text-center">SERVICES</h1>
            <hr />
            {service.map((e, key) => {
              // console.log("map", e);
              return key % 2 == 0 ? (
                <div
                  className="row d-flex align-items-center justify-content-center"
                  key={key}
                >
                  <div className="col-md-6 col-11 mx-auto offset-1 mt-3">
                    <div className="items text-center">
                      <h1 className="mt-5">{e.name}</h1>
                      {e.services.map((e, key) => {
                        return (
                          <>
                            <div key={key}>
                              <h3>{e.name}</h3>
                              <p>{e.displayedPrice}</p>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6 col-11 mx-auto offset-2 mt-3">
                    <figure>
                      <img src={e.imageUrl} alt="" className="img-fluid" />
                    </figure>
                  </div>
                </div>
              ) : (
                <div className="row d-flex align-items-center justify-content-center">
                  <div className="col-md-6 col-11 mx-auto offset-2 mt-3">
                    <figure>
                      <img src={e.imageUrl} alt="" className="img-fluid" />
                    </figure>
                  </div>
                  <div className="col-md-6 col-11 mx-auto offset-1 mt-3">
                    <div className="items text-center">
                      <h1 className="mt-5">{e.name}</h1>
                      {e.services.map((e, key) => {
                        return (
                          <>
                            <div key={key}>
                              <h3>{e.name}</h3>
                              <p>{e.displayedPrice}</p>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <iframe
          className="my-2"
          width="100%"
          height="556"
          src="https://www.youtube.com/embed/sPqMeutqrYA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="btn_services text-center mb-3">
        <Button buttonStyle="btn--primary" buttonSize="btn--medium">
          BOOK NOW
        </Button>
      </div>
      <p className="text-center fs-6 m-0">
        There is a 24hr cancellation policy for all appointments. 
      </p>
      <p className="text-center fs-6">Appointments
        not cancelled with at least 24hrs notice are subject to a charge equal
        to 50% of the service appointment.</p>
    </>
  );
};

export default Service;
