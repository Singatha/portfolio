import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';
import './Home.css';

class Home extends Component {
  render(){
    return (
      <div>
        <div id="home">
          <Navigation />
          <h1>Yo<span>&#128075;</span>, I'm Xhanti</h1>
          <p className="headline"> Former Child, Bounty Hunter and Code Scavenger.</p>
        </div>   
        <Gallery />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
