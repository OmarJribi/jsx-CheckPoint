import React from 'react';
import './App.css';
import './style.css'
import srcImage from './imageInSrc.jpg'


function App() {
  
  return (
    <div style={{border:'solid 1px black' , maxWidth:'100vw'}}>

      <h1 className={"title red"}>My title</h1>
      
      <br />

      <img src={srcImage} alt='srcImg' />

      <br />

      <img src="/imageInPublic.png" alt='pubImage' />

    </div>
  );
}

export default App;
