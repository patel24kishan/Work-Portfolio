import React, { useState } from "react";
import {
  ProjectContainer,
  Wrapper,
  Title,
  ProjectToggleButtonGroup,
  ProjectToggleButton,
  ProjectDivider,
  ProjectCardContainer,
} from "./ProjectStyle";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/constants";

const Projects = () => {
  const [projectToggle, setProjectToggle] = useState("webapp");
  return (
    <ProjectContainer id="projects">
      <Wrapper>
        <Title>Projects</Title>
      
        <ProjectToggleButtonGroup>
        {projectToggle === "softdev" ? (
            <ProjectToggleButton
              active
              onClick={() => setProjectToggle("webapp")}
            >
              Software Apps
            </ProjectToggleButton>
          ) : (
            <ProjectToggleButton onClick={() => setProjectToggle("webapp")}>
              Software Apps
            </ProjectToggleButton>
          )}
         

          <ProjectDivider />

          {projectToggle === "webapp" ? (
            <ProjectToggleButton
              active
              onClick={() => setProjectToggle("webapp")}
            >
              Web Apps
            </ProjectToggleButton>
          ) : (
            <ProjectToggleButton onClick={() => setProjectToggle("webapp")}>
              Web Apps
            </ProjectToggleButton>
          )}
          <ProjectDivider />

          {projectToggle === "game" ? (
            <ProjectToggleButton
              active
              value="unity"
              onClick={() => setProjectToggle("unity")}
            >
              Games
            </ProjectToggleButton>
          ) : (
            <ProjectToggleButton
              value="unity"
              onClick={() => setProjectToggle("unity")}
            >
              Games
            </ProjectToggleButton>
          )}

          <ProjectDivider />
          
          {projectToggle === "all" ? (
            <ProjectToggleButton active onClick={() => setProjectToggle("all")}>
              All
            </ProjectToggleButton>
          ) : (
            <ProjectToggleButton onClick={() => setProjectToggle("all")}>
              All
            </ProjectToggleButton>
          )}
        </ProjectToggleButtonGroup>

        <ProjectCardContainer>
          {projectToggle === "all" &&
            projects.map((project) => <ProjectCard project={project} />)}

          {projects
            .filter((item) => item.category === projectToggle)
            .map((project) => (
              <ProjectCard project={project} />
            ))}
        </ProjectCardContainer>
      </Wrapper>
    </ProjectContainer>
  );
};

export default Projects;
