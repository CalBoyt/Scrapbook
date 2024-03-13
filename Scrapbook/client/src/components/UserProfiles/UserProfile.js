import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUserProfileById } from "../../Managers/UserProfileManager";
import { Card, CardBody, CardImg } from "reactstrap";


const UserProfile = ({userProfile}) => {
  return (
  <>
    <div className="container w-100 rounded border bg-success bg-opacity-25 border-black m-3 p-3">
      <div className="">
        <div className="row">
          <div className="col-md-4 ">
            <img className="rounded-circle justify-content-center  m-1  border-success" width={'250px'} src={userProfile.imageLocation} alt={userProfile.name}></img>
          </div>
          <div className="col-md-7 bg-dark bg-opacity-75 rounded border border-black text-white r p-1">
            <div className="p-3 py-5">
              <div className="row d-flex justify-content-center p-1 mb-3">
                <h1 className="text-right ">{userProfile.name}</h1>
                <p className="text-left px-2 text-white"> 
                  <h2>
                    {userProfile.email}
                  </h2>
                </p>
              </div>
            </div>
          </div>          
        </div>
      </div>
    </div>
  </>

);
};

{/* <div className="card text-bg-success mb-3" style={{maxWidth: '1500px'}} >
<div className="card-header bg-danger">Header</div>
<div className="card-body">
<h5 className="card-title">Success card title</h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
<p className="text-left px-2 text-success"> 
<h3>
{userProfile.name}
</h3>
</p>
<p className="text-left px-2 text-success"> 
<h3>
{userProfile.email}
</h3>
</p> */}
{/* </div> */}


export default UserProfile;



