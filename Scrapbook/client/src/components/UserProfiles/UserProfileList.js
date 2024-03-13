import React, { useEffect, useState } from "react"
import { getAllUserProfiles } from "../../Managers/UserProfileManager";
import { Button, Container } from "reactstrap";
import UserProfile from "./UserProfile";
import { useNavigate } from "react-router-dom";

const UserProfileList = () => {
    const [userProfiles, setUserProfiles] = useState([]);
    const user = JSON.parse(localStorage.getItem("userProfile"));
    const navigate = useNavigate();


    const getUserProfiles = () => {
        getAllUserProfiles().then(allUserProfiles => setUserProfiles(allUserProfiles));
    };

    useEffect(() => {
        getUserProfiles();
    }, []);

    return (
    <>
      <div className=" bg-success bg-opacity-10 ">
      <div className="container justify-content-center">
      <h1 className='pt-5 text-danger'>Scrapbook Users</h1>
          <div className="row justify-content-center">
            <div className="cards-column">
              {userProfiles.map((userProfile) => (
                <UserProfile key={userProfile.id} userProfile={userProfile} />
              ))}
            </div>
            {/* <div>
              <Button
                outline
                className="me-2"
                onClick={(e) => {
                  e.preventDefault();
                  navigate()
                }}
            </div> */}
          </div>
        </div>

      </div>

    </>
    );
    };

    // return (
    //     <div>
    //         <h2>User Profile List</h2>
    //         <div>
    //             {userProfiles.map((userProfile) => (
    //               <div key={userProfile.id}>
    //               <img src={userProfile.imageLocation} alt={userProfile.name} />
    //               <p>
    //                 <strong>{userProfile.name}</strong>
    //               </p>
    //             </div>

    //               ))}
    //         </div>

            
    //     </div>
    // );
    

export default UserProfileList