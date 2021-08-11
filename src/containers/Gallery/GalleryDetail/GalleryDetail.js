import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import Footer from '../../../components/Footer/Footer';
import './GalleryDetail.css';

const GalleryDetail = (props) => {
  return (
    <div className="gallery-detail">
      <h2>{props.history.location.state.name}</h2>
      <Image src={props.history.location.state.src} size='huge' />
      <p className="paragraph">{props.history.location.state.description}. Click <a href="https://github.com/Singatha" className="gallery-detail-link">View Project</a> to see hosted project.</p>
      <Link className="gallery-detail-home-link" to="/">Home</Link>
      <Footer />
    </div>
  );
}

export default GalleryDetail;
