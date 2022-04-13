import React, { useState } from "react";
import Typical from "react-typical";
import "./Hero.css";
import Button from "@mui/material/Button";
import profile1 from "../../assets/profile.jpg";
import bg1 from "../../assets/bg1.svg";
import bg2 from "../../assets/bg2.svg";
import Grid from "@mui/material/Grid";

export default function Hero({ changeBG }) {
  return (
    <div
      className="hero-image "
      style={{ 
        backgroundImage: `url( ${changeBG ? bg1 : bg2} )` ,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundColor: "transparent",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "0",
        marginTop: "-80px",
      }}
      id={'about'}
    >
      <div className="" style={{ transition: 'all 0.3s linear' }}>
        {""}
        <h2>
          Hi, I'm <b>Candra Brata</b> 👏
        </h2>
        <br />
        <img
          src={profile1}
          alt="profile"
          className="profile-img"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            margin: "auto",
            display: "block",
            marginTop: "20px",
            marginBottom: "20px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />{" "}
        <h1>
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "Web Developer",
              1000,
              "Laravel Dev",
              1000,
              "Code Igniter Dev",
              1000,
            ]}
          />
        </h1>
        <span className="profile-role-tagline">
          Building things that matter. And making them better.
        </span>
        <div>
          <a href="#" className="fab fa-linkedin"></a>
          <a href="#" className="fab fa-github"></a>
          <a href="#" className="fab fa-instagram"></a>
          <a href="#" className="fab fa-facebook"></a>
        </div>
        <Grid style={{ paddingBottom: "120px" }}>

          <Button
            variant="contained"
            color="success"
            style={{ margin: "20px" }}
          >
            <a
              href="cv2022_candrabrata.pdf"
              download="CV 2022_Candraditya Brata.pdf"
              style={{ textDecoration: "none", color: "white" }}
            >
              Get my resume
            </a>
          </Button>
        </Grid>
      </div>

      {/* Arrow */} 
      <div className="custom-shape-divider-bottom-1649729980" style={{ fill: changeBG ? "#121212" : "#ffff",
      transition: 'all 0.5s ease',
      }}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}
