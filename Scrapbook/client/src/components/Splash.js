import React from "react";
import { Container } from "reactstrap";

export default function Splash() {
  return (
    <>
    <div class="bg-success text-dark bg-opacity-25">
    <Container>
        
        <img src="../../Images/Splash.png" class="img-fluid" alt="..."></img>
    <span style={{
      position: "fixed",
      left: 0,
      right: 0,
      top: "50%",
      marginTop: "-0.5rem",
      textAlign: "center",

    }}></span>
    </Container>
    </div>

    </>

  );
}