import { Container, Grid, Typography, Card, CardContent } from "@mui/material";
import "./Skill.css";
import React from "react";
import {ReactComponent as PhpIcon} from "../../assets/icons/php.svg";
import {ReactComponent as JsIcon}  from "../../assets/icons/javascript.svg";
import {ReactComponent as PythonIcon} from "../../assets/icons/python.svg";
import {ReactComponent as CPlusIcon} from "../../assets/icons/cplusplus.svg";
import {ReactComponent as LaravelIcon} from "../../assets/icons/laravel.svg";
import {ReactComponent as CodeIgniterIcon} from "../../assets/icons/codeigniter.svg";
import {ReactComponent as ReactIcon} from "../../assets/icons/react.svg";
import {ReactComponent as BootstrapIcon} from "../../assets/icons/bootstrap.svg";
import {ReactComponent as MaterialUiIcon} from "../../assets/icons/material-ui-seeklogocom.svg";
import {ReactComponent as TailwindIcon} from "../../assets/icons/tailwindcss.svg";
import {ReactComponent as VscodeIcon} from "../../assets/icons/visualstudiocode.svg";
import {ReactComponent as GithubLogo } from "../../assets/icons/github.svg";
import {ReactComponent as Gitlabicon} from "../../assets/icons/gitlab.svg";
import {ReactComponent as AdobeXDIcon} from "../../assets/icons/adobexd.svg";
import {ReactComponent as ComposerIcon} from "../../assets/icons/composer.svg";
import {ReactComponent as HtmlIcon} from "../../assets/icons/html5.svg";
import {ReactComponent as JavaIcon} from "../../assets/icons/java.svg";
import {ReactComponent as MySqlIcon} from "../../assets/icons/mysql.svg";
import {ReactComponent as GitIcon} from "../../assets/icons/git.svg";

export default function Skill() {
  const skills = {
    "Programming Languages": [
      {
        name: "PHP",
        icon: (
          <PhpIcon className="icon" />
        ),
      },
      {
        name: "Java",
        icon: (
          <JavaIcon className="icon" />
        ),
      },
      {
        name: "JavaScript",
        icon: (
          <JsIcon className="icon" />
        ),
      },
      {
        name: "Python",
        icon: (
          <PythonIcon className="icon" />
        ),
      },
      {
        name: "C++",
        icon: (
          <CPlusIcon className="icon" />
        ),
      },
    ],
    "Back End": [
      {
        name: "Laravel",
        icon: (
          <LaravelIcon className="icon" />  
        ),
      },
      {
        name: "Code Igniter",
        icon: (
          <CodeIgniterIcon className="icon" />  
        ),
      },
    ],
    "Front End": [
      {
        name: "React JS",
        icon: (
          <ReactIcon className="icon" />
        ),
      },
      {
        name: "Bootstrap",
        icon: (
          <BootstrapIcon className="icon" />
        ),
      },
      {
        name: "Material UI",
        icon: (
          <MaterialUiIcon className="icon" />
        ),
      },
      {
        name: "Tailwinds",
        icon: (
          <TailwindIcon className="icon" />
        ),
      },
    ],
    Tools: [
      {
        name: "Git",
        icon: (
          <GitIcon className="icon" />
        ),
      },
      {
        name: "Visual Studio Code",
        icon: (
          <VscodeIcon className="icon" />
        ),
      },
      {
        name: "Github",
        icon: (
          <GithubLogo className="icon" />
        ),
      },
      {
        name: "GitLab",
        icon: (
          <Gitlabicon className="icon" />
        ),
      },
      {
        name: "MySQL",
        icon: (
          <MySqlIcon className="icon" />
        ),
      },
      {
        name: "Adobe XD",
        icon: (
          <AdobeXDIcon className="icon" />
        ),
      },
      {
        name: "Composer",
        icon: (
          <ComposerIcon className="icon" />
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
