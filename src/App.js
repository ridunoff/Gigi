import React, {Component} from 'react';
import Event from './components/Event';
import events from './content/events.json';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      events: events
    };
  }
  
  
  render() {
  return (
    <div className="App">
      <nav>
        <a class="header-name" href="#home" id="home">Mary Siller</a>
        <div class="nav-right">
          <a href="#life">Life</a>
          <a href="#photos">Photos</a>
          <a href="#art">Art</a>
        </div>
      </nav>
     <header>
        <img class="header-image" src="images/header.png" alt="In loving memory of Mary J (Abrams) Siller, Born December 11th, 1919, Passed Febrary 2nd, 2020. Mary smiling is displayed on the left and a painting of hers with blue and orange flowers is displayed on the right."></img>
     </header>
     <br/>
     <br/>
     <br/>
     <span id="life"></span>
        {
          events.map(event => (
          <Event event={event} />
          ))
        }
      
      <img class="border" src="images/border.png"/>

      <br/>
        <br/><br/>
        <br/>

        <h1 id="photos">Photo Gallery</h1>
        <div class="gallery">
          <div class="row"> <img src="images/SuzAndHar.png"/> <img src="images/suzbat2.png"/> <img src="images/grandkids.png"/> </div>
          <div class="row"> <img src="images/Navy.png"/> <img src="images/babysuz.png"/> <img src="images/david.png"/> </div>
          <div class="row"> <img src="images/todd.png"/> <img src="images/baby2.png"/> <img src="images/suz.png"/> </div>
        </div>

        <img class="border" src="images/border.png"/>

<br/>
  <br/><br/>
  <br/>

  <h1 id="art">Artwork</h1>
  <div class="gallery">
          <div class="row"> <img src="images/pinkFlowers.png"/> <img src="images/greenFlower.png"/> <img src="images/purpleFlower.png"/> </div>
          <div class="row"> <img src="images/BrightColors.png"/> <img src="images/blueFlower.png"/> <img src="images/easel.png"/> </div>
        </div>

    <footer>
      <img class="border" src="images/border.png"/>
      <div>
        Created with <i class="fas fa-heart"></i> by Raquel
      </div>
    </footer>

    </div>
  );
}
}

export default App;
