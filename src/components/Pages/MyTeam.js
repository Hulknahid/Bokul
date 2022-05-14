// import React from "react";
// import { Link } from "react-router-dom";

// const MyTeam = () => {

//   const getAppSettings = localStorage.getItem("app-settings");
//   const parsData = JSON.parse(getAppSettings);
//   const teams = parsData.locations[0].technicians;
//   // console.log("teams:", teams);
//   return (
//     <>
//       <div className="container my-5">
//         <div className="row">
//           <div className="col-md-6 col-10 mx-auto">
//             <h1 className="my-3 text-center">Our Team</h1>
//           </div>
//         </div>

//         <div className="row d-flex align-items-center justify-content-center">
//           {teams.map((e) => {;
//           // console.log("teams-new:", e);
//             return (
//                 <div className="col-md-3 col-6 text-center mb-4">
//                       <Link to={`/memberDeatails/${e.user.id}`}>
//                   <div  style={{minHeight: "400px"}}>
//                     <figure>
//                       <img
//                         // src="https://silverbird.s3.amazonaws.com/123456789/images/meta/team/Angela-072019.jpg"
//                         src={e.user.imageUrl}
//                         alt="myTeamImg"
//                         className="img-fluid"
//                       />
//                     </figure>
//                     <h3>{e.user.names.first}</h3>
//                     <h6>{e.specialties}</h6>
//                   </div>
//                   </Link>
//                 </div>
//             );
//         })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default MyTeam;

import React from "react";
import { Link } from "react-router-dom";

const MyTeam = () => {
  const getAppSettins = localStorage.getItem("app-settings");
  const jsonData = JSON.parse(getAppSettins);
  const teams = jsonData.locations[0].technicians;
  console.log(jsonData.locations);
  const [technicians, setTechnicians] = React.useState(teams);
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <h1 className="my-3 text-center">Our Team</h1>
          </div>
        </div>

        <div className="row d-flex align-items-center justify-content-center">
          {
            technicians.map((e)=> {
              console.log(e)
              return (
                <div className="col-md-3 col-6 text-center mb-4">
                <Link to={`/memberDeatails/${e.user.id}`}>
                  <div style={{ minHeight: "400px" }}>
                    <figure>
                      <img
                        // src="https://silverbird.s3.amazonaws.com/123456789/images/meta/team/Angela-072019.jpg"

                        src={e.user.imageUrl}
                        alt="Member Images"
                        className="img-fluid"
                      />
                    </figure>
                    <h3>{e.user.names.first}</h3>
                    <h6>{e.specialties[0]}</h6>
                  </div>
                </Link>
              </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
};

export default MyTeam;
