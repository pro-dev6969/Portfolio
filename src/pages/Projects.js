import React from 'react'
import ProjectItem from '../components/ProjectItem';
import Proj2 from '../assets/proj2.jpg';
import Mov from '../assets/mov.webp';
import '../styles/Projects.css';
import {Projectlists} from '../helpers/Projectlists';
function Projects() {
  return (
    <div className='projects'>
        <h1> My Personel Projects </h1>
        <div className='projectList'>
            {Projectlists.map((project , idx) => {
              return <ProjectItem id={idx} name={project.name} image={project.image} />
            })}

        </div>
    </div>
  )
}

export default Projects;