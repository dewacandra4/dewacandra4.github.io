import * as React from "react";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project2b.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";
export default function Project() {
    const projects = [
        {
            name: "BaliStuti",
            description: "BaliStuti is a web application that helps you to find the best handcraft products in Bali. Build with Laravel, RajaOngkirAPI and Bootstrap",
            image: project1,
            link: "https://balistutisample.cardya.my.id",
        },
        {
            name: "PetFriend",
            description: "PetFriend is pet shop online, built with CodeIgniter, Bootstrap, and JQuery",
            image: project2,
            link: ""
        },
        {
            name: "GeoTour",
            description: "Geo Tour is a company profile website Built with HTML, CSS, and JavaScript",
            image: project3,
            link: ""
        },
        {
            name: "PCVS",
            description: "PCVS (Private Covid-19 Vaccine System)is a web application to manage the vaccine stock and appointment in the hospital. Built with Laravel, Bootstrap, and JQuery",
            image: project4,
            link: ""
        },
        {
            name: "KMSM ",
            description: "KMSM (Karya Mandiri Sukses Makmur) is a company profile website for a distributor logistic company KMSM . Built with HTML, CSS, and JavaScript",
            image: project5,
            link: ""
        },
        {
            name: "My Portfolio",
            description: "My Portfolio built with React.js and Material UI.",
            image: project6,
            link: ""
        }
    ];
  return (
    <div style={{
        marginTop: "",  }}>
        <Container
        id={'project'}
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
            Projects
        </Typography>
        <Grid justify=" center " container spacing={6} alignItems="center" >
            {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={4}>
            <Card
                sx={{
                width: 350,
                height: 620,
                marginTop: "1rem",
                paddingBottom: "1rem",
                marginBottom: "1rem",
                marginLeft: "auto",
                marginRight: "auto",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                }}
            >
                <CardMedia
                component="img"
                height="450"
                image={project.image}
                alt="BaliStuti"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" >
                    {project.name}
                </Typography>
                <Typography variant="caption" color="text.secondary" >
                    {project.description}
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small" href={project.link}>
                    Visit
                </Button>
                </CardActions>
            </Card>
            </Grid>
            ))}
        </Grid>
        </Container>
    </div>
  );
}
