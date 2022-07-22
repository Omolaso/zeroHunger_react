import React from 'react';
import '../styles/About.css';
import me from '../images/me.jpg';
import usen from '../images/usen.jpg';
import github from '../images/github.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const About = () => {
  return (
    <section>
      <div className="container">
        <div className="text">
          <div className='about'>
              <h1>ABOUT ZEROHUNGER</h1>
              <p>A webapp that seeks to end hunger, achieve food security and 
                improved nutrition and promote sustainable agriculture</p>
          </div>
          <div className="mission">
            <h2>OUR MISSION</h2>
            <p>Our mission is making sure all people especially children
              have access to sufficient and nutritious food all year round.
              This involves promoting sustainable agricultural practices,
              improving the livelihoods and capacities of small scale famers, 
              allowing equal access to land, technology and markets.</p>
          </div>
        </div>
        <div className='team-container'>
          <h1>THE TEAM</h1>
          <div className="team">
            <div className="me">
              <img id='img' src={ me } alt="TOBI" />
              <h3>Tobi Adesanya</h3>
              <p>FRONTEND DEVELOPER</p>
              <a href="http://github.com/Omolaso" target="_blank" rel="noopener noreferrer">
                <img id='githubImg' src={github} alt="github"/>
              </a>
              
              <a href="mailto:adextee001@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon id='faEnvelope' icon={ faEnvelope }/> 
              </a>
            </div>

            
            <div className="her">
              <img id='img' src={ usen } alt="Unyime" />
              <h3>Unyime Usen</h3>
              <p>FRONTEND DEVELOPER</p>
              <a href="http://github.com/Unyime94" target="_blank" rel="noopener noreferrer">
                <img id='githubImg' src={github} alt="github"/>
              </a>
              
              <a href="mailto:unyimeusen01@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon id='faEnvelope' icon={ faEnvelope }/> 
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About