import { Container, Grid, Typography, Card, CardContent } from "@mui/material";
import "./Skill.css";
import React from "react";

export default function Skill() {
  const skills = {
    "Programming Languages": [
      {
        name: "PHP",
        icon: (
          <svg className="icon icon-php">
            <use xlinkHref="#icon-php"></use>
          </svg>
        ),
      },
      {
        name: "Java",
        icon: (
          <svg className="icon icon-java">
            <use xlinkHref="#icon-java"></use>
          </svg>
        ),
      },
      {
        name: "JavaScript",
        icon: (
          <svg className="icon icon-javascript">
            <use xlinkHref="#icon-javascript"></use>
          </svg>
        ),
      },
      {
        name: "Python",
        icon: (
          <svg className="icon icon-php">
            <use xlinkHref="#icon-python"></use>
          </svg>
        ),
      },
      {
        name: "C++",
        icon: (
          <svg className="icon icon-cplusplus">
            <use xlinkHref="#icon-cplusplus"></use>
          </svg>
        ),
      },
    ],
    "Back End": [
      {
        name: "Laravel",
        icon: (
          <svg className="icon icon-laravel">
            <use xlinkHref="#icon-laravel"></use>
          </svg>
        ),
      },
      {
        name: "Code Igniter",
        icon: (
          <svg className="icon icon-codeigniter">
            <use xlinkHref="#icon-codeigniter"></use>
          </svg>
        ),
      },
    ],
    "Front End": [
      {
        name: "React JS",
        icon: (
          <svg className="icon icon-react">
            <use xlinkHref="#icon-react"></use>
          </svg>
        ),
      },
      {
        name: "Bootstrap",
        icon: (
          <svg className="icon icon-bootstrap">
            <use xlinkHref="#icon-bootstrap"></use>
          </svg>
        ),
      },
      {
        name: "Material UI",
        icon: (
          <svg className="icon icon-material-ui-seeklogocom">
            <use xlinkHref="#icon-material-ui-seeklogocom"></use>
          </svg>
        ),
      },
      {
        name: "Tailwinds",
        icon: (
          <svg className="icon icon-tailwindcss">
            <use xlinkHref="#icon-tailwindcss"></use>
          </svg>
        ),
      },
    ],
    Tools: [
      {
        name: "Git",
        icon: (
          <svg className="icon icon-git">
            <use xlinkHref="#icon-git"></use>
          </svg>
        ),
      },
      {
        name: "Visual Studio Code",
        icon: (
          <svg className="icon icon-visualstudiocode">
            <use xlinkHref="#icon-visualstudiocode"></use>
          </svg>
        ),
      },
      {
        name: "Github",
        icon: (
          <svg className="icon icon-github">
            <use xlinkHref="#icon-github"></use>
          </svg>
        ),
      },
      {
        name: "GitLab",
        icon: (
          <svg className="icon icon-gitlab">
            <use xlinkHref="#icon-gitlab"></use>
          </svg>
        ),
      },
      {
        name: "MySQL",
        icon: (
          <svg className="icon icon-mysql">
            <use xlinkHref="#icon-mysql"></use>
          </svg>
        ),
      },
      {
        name: "Adobe XD",
        icon: (
          <svg className="icon icon-adobexd">
            <use xlinkHref="#icon-adobexd"></use>
          </svg>
        ),
      },
      {
        name: "Composer",
        icon: (
          <svg className="icon icon-composer">
            <use xlinkHref="#icon-composer"></use>
          </svg>
        ),
      },
    ],
  };
  const nameArray = ["Programming Languages", "Back End", "Front End", "Tools"];

  return (
      <Container
        id={"skills"}
        style={{
          paddingTop: "9rem",
          paddingBottom: "2rem",
          marginBottom: "2rem",
          borderRadius: "10px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: "3rem",
            color: "text",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          Skills
        </Typography>
        <Grid justify="center" container spacing={1} alignItems="center">
          {nameArray.map((name, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
              <Card
                sx={{
                  width: 280,
                  height: 350,
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "",
                  alignItems: "left",
                  padding: "0.5rem",
                  position: "relative",
                }}
              >
                <CardContent>
                  <Typography
                    value={name}
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                      color: "text",
                      marginBottom: "1.5rem",
                      textAlign: "left",
                    }}
                  >
                    {name}
                  </Typography>
                    {skills[nameArray[index]].map((skill) => (
                      <Grid container spacing={3} key={skill.name}>
                        <Grid item>
                          <Typography align="left">
                            {skill.icon}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography align="left">
                            {skill.name}
                          </Typography>
                        </Grid>
                      </Grid>
                    ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
  );
}
