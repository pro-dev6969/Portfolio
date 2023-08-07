import React from 'react'
import {useParams} from 'react-router-dom';
import { Projectlists } from '../helpers/Projectlists';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../styles/ProjectDisplay.css';
function ProjectDisplay() {
    const { id } = useParams();
    const project = Projectlists[id];
  return (
    <div className='project'>
        <h1> {project.name} </h1>
        <img src={project.image}/>
        <p>
            <b>Skills: {project.skills}</b>
        </p>
        <GitHubIcon />
    </div>
  )
}

export default ProjectDisplay