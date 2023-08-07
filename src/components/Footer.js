import React from 'react';
import  InstagramIcon  from '@material-ui/icons/Instagram';
import  LinkedInIcon  from '@material-ui/icons/LinkedIn';
import  GitHubIcon  from '@material-ui/icons/GitHub';
import '../styles/Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'> 
            <InstagramIcon />
            <LinkedInIcon />
            <GitHubIcon />
        </div>
        <p> &copy; 2023 VedantPortfolio </p>
    </div>
  )
}

export default Footer