import React from 'react';
import './Projects.css';
import Card from '../Card/Card'
import Empire from '../../img/empire.png'
import MingaMobile from '../../img/minga-mobile.png'
import Minga from '../../img/minga.png'
import Petshop from '../../img/petshop.png'
import AmazingEvents from '../../img/amazing-events.png'

function App() {
  return (
    <div className='body'>
      <h1 className='title-project'>Projects</h1>
    <div id="app" className="container">
      <Card dataImage={Empire}>
        <h1 id='border'>Empire</h1>
        <p>Web app for sales of high-end vehicles, with the possibility of customization. We also added functionality whit GPT Chat API.</p>
      </Card>
      <Card dataImage={MingaMobile}>
        <h1>Minga Mobile</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </Card>
      <Card dataImage={Minga}>
        <h1>Minga</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </Card>
      <Card dataImage={Petshop}>
        <h1>Peshop</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </Card>
      <Card dataImage={AmazingEvents}>
        <h1>Amazing Events</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </Card>
    </div>
    </div>
  );
}

export default App;
