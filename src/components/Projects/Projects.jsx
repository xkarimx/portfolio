import React from 'react';
import './Projects.css';
import Empire from '../../img/empire.png';
import MingaMobile from '../../img/minga-mobile.png';
import Minga from '../../img/minga.png';
import Petshop from '../../img/petshop.png';
import AmazingEvents from '../../img/amazing-events.png';
import Button from '../Button/Button';

function Projects() {
  return (
    <div className="body">
      <h1 className='title-project'>Projects</h1>
      <div className='container'>
        <div className="card" tabIndex="0">
          <img className='img-project' src={Empire} alt="Empire" />
          <div className="text-project">
            <h2 className='project-h2'>Empire</h2>
            <p className='project-p'>
              Web app for selling high-end vehicles, with the possibility of customization. Also added functionality with gpt chat api.
            </p>
            <Button url="https://empire-project.netlify.app/" />
          </div>
        </div>
        <div className="card" tabIndex="0">
          <img className='img-project' src={MingaMobile} alt="Minga Mobile" />
          <div className="text-project">
            <h2 className='project-h2'>Minga <br /> Mobile</h2>
            <p className='project-p'>
              Mobile design for reading, creation and edition of manga.
            </p>
            <Button url="https://drive.google.com/file/d/1AmT62I27TH9pKdJegPU8mX5xAzKURGvh/view?usp=sharing" />
          </div>
        </div>
        <div className="card" tabIndex="0">
          <img className='img-project' src={Minga} alt="Minga" />
          <div className="text-project">
            <h2 className='project-h2'>Minga</h2>
            <p className='project-p'>
              Web design for reading, creation and edition of manga.
            </p>
            <Button url="https://mingaweb-5vmn.vercel.app/" />
          </div>
        </div>
        <div className="card" tabIndex="0">
          <img className='img-project' src={Petshop} alt="Petshop" />
          <div className="text-project">
            <h2 className='project-h2'>Petshop</h2>
            <p className='project-p'>
              Team e-commerce design for pet products.
            </p>
            <Button url="https://lucasmsantoss.github.io/Pet-shop/" />
          </div>
        </div>
        <div className="card" tabIndex="0">
          <img className='img-project' src={AmazingEvents} alt="Amazing Events" />
          <div className="text-project">
            <h2 className='project-h2'>Amazing <br /> Events</h2>
            <p className='project-p'>
              Event web site with API consumption different types of search filters are applied.
            </p>
            <Button url="https://amazing-events-three.vercel.app/" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
