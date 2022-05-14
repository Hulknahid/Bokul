// import React from "react";
// import "./MemberDetails.css";
// import Button from "../Button/Button";
// import { useParams } from "react-router-dom";

// const MemberDetails = () => {
//   const param = useParams();
//   // console.log(param)

//   const getAppSettings = localStorage.getItem("app-settings");
//   const parsData = JSON.parse(getAppSettings);
//   const teams = parsData.locations[0].technicians;
//   // console.log("memberId:", teams)

//   const [technicians, setTechnicians] = React.useState(
//     teams.find((e) => e.user.id == param.memberId)
//     );
//     console.log("item:", param.memberId);
//   // console.log("technicians:", technicians);
//   return (
//     <>
//       <div className="container my-5">
//         <div className="row d-flex align-items-center justify-content-space-around">
//           <div className="col-md-6 col-11 mx-auto">
//             <figure>
//               <img
//                 // src="	https://silverbird.s3.amazonaws.com/123456789/images/meta/team/Lily-111820.jpg"
//                 src={technicians.user.imageUrl}
//                 alt=""
//                 className="img-fluid"
//               />
//             </figure>
//           </div>
//           <div className="col-md-6 col-10 mx-auto mt-3">
//             <h3 className="fw-normal">
//               {technicians.user.fullName} ({technicians.expertise})
//             </h3>
//             <p className="fw-bold">MY HOURS</p>
//             <div className="row">
//               {technicians.hours.map((e, key) => {
//                 return (
//                   <div className="col-md-12 col-6" key={key}>
//                     <p className="fw-border">{e.dayOfWeek} {e.createdTime}</p>
//                   </div>
//                 );
//               })}
//             </div>
//             <p className="fw-bold">BIO</p>
//             <p className="fw-normal">{technicians.biography}</p>
//             <p className="fw-bold">SPECIALITIES</p>
//             <p className="fw-normal">
//               {technicians.specialties}
//               <br />
//             </p>
//             <Button buttonStyle="btn--primary" buttonSize="btn--medium">
//               BOOK ME
//             </Button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default MemberDetails;



import React from "react";
import "./MemberDetails.css";
import { useParams } from "react-router-dom";

const MemberDetails = () => {
  const param = useParams();
  console.log(param);

  const getAppSettins = localStorage.getItem("app-settings");
  const jsonData = JSON.parse(getAppSettins);
  const teams = jsonData.locations[0].technicians;
  // console.log(jsonData.locations[0].technicians);

  const [technicians, setTechnicians] = React.useState(
    teams.find((e) => e.user.id == param.memberId)
  );
  console.log("technicians", technicians);

  return (
    <>
      <div className="container my-5">
        <div className="row d-flex align-items-center justify-content-space-around">
          <div className="col-md-6 col-11 mx-auto">
            <figure>
              <img
                // src="	https://silverbird.s3.amazonaws.com/123456789/images/meta/team/Lily-111820.jpg"
                src={technicians.user.imageUrl}
                alt=""
                className="img-fluid"
              />
            </figure>
          </div>

          <div className="col-md-6 col-11 mx-auto mt-3">
            <h3 className="fw-normal">{technicians.user.fullName}</h3>
            <p className="fw-bold">MY HOURS</p>
            <div className="row">
              {technicians.hours.map((e) => {
                return (
                  <div className="col-md-12 col-6">
                    <p className="fw-border">{e.dayOfWeek} {e.createdTime}</p>
                  </div>
                );
              })}
            </div>
            <p className="fw-bold">BIO</p>
            <p className="fw-normal">
              {technicians.biography}
            </p>
            <p className="fw-bold">SPECIALITIES</p>
            <p className="fw-normal">
              {technicians.expertise}
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default MemberDetails;
