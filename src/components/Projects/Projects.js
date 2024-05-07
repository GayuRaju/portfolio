import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import PrivateChat from "../../Assets/Projects/PrivateChat.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Ecart from "../../Assets/Projects/dluxInterface.png";
import ExpenseTracker from "../../Assets/Projects/ExpenseTracker.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Ecart}
              title="Website for Digital Marketing"
              description="This is a fully functional Marketing  website that uses React.js + Contentful  and CSS in the front end and cpanel in backend and MongoDb as Database.Implemented a robust Content Management System to allow for easy content updates and management."
              ghLink="https://github.com/inithishrl/DLUX-Web-Dev"
            
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website which supports both dark and light mode."
              ghLink="https://github.com/GayuRaju/portfolio"
        
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={PrivateChat}
              title="Skills/Jobs Recommended Application"
              description="Designed and developed an end-to-end web application for IBM that displays current job openings based on users' skill sets. Implemented functionalities for user profiles, job recommendations, and data analytics."
              ghLink="https://github.com/GayuRaju/IBM-Project-52389-1661000466"
            
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={ExpenseTracker}
              title="E-Learning Platform on AWS"
              description="Developed an e-learning platform using Amazon Web Services (AWS), leveraging cloud computing to provide a scalable and cost-effective alternative to traditional educational systems. "
             
             
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
