import React, { Component } from 'react';
import { Image, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import wireframe from '../../../assets/images/wireframe.png';
import Footer from '../../../components/Footer/Footer';
import './GalleryCard.css';

class GalleryCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [
        {
          src: wireframe,
          name: "Project 1",
          link: "#",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima molestias excepturi laudantium ipsa dolore. Ex, porro consequuntur facilis voluptates quisquam, ipsum maxime placeat mollitia deleniti aliquam tempora? Eum, quibusdam magni?"
        },
        {
          src: wireframe,
          name: "Project 2",
          link: "#",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima molestias excepturi laudantium ipsa dolore. Ex, porro consequuntur facilis voluptates quisquam, ipsum maxime placeat mollitia deleniti aliquam tempora? Eum, quibusdam magni?"
        },
        {
          src: wireframe,
          name: "Project 3",
          link: "#",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima molestias excepturi laudantium ipsa dolore. Ex, porro consequuntur facilis voluptates quisquam, ipsum maxime placeat mollitia deleniti aliquam tempora? Eum, quibusdam magni?"
        },
        {
          src: wireframe,
          name: "Project 4",
          link: "#",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima molestias excepturi laudantium ipsa dolore. Ex, porro consequuntur facilis voluptates quisquam, ipsum maxime placeat mollitia deleniti aliquam tempora? Eum, quibusdam magni?"
        }
      ]
    };
  }

  render(){
    return (
      <div className="gallery-card">
        <h2>Project Gallery</h2>
        <div className="grid-container">
          {
            this.state.items.map((item) => {
              return (
                <div className="grid-item">
                  <Card>
                    <Image src={item.src} size='medium' wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>{item.name}</Card.Header>
                    </Card.Content>
                    {console.log(this.props)}
                    <Link 
                      to={{ pathname: "/gallery-detail", state: { name: item.name, src: item.src, description: item.description } }}
                      className="card-link"
                    >
                      View Detail
                    </Link>
                  </Card>
                </div>
              );
            })
          }
        </div>
        <Link className="gallery-card-home-link" to="/">Home</Link>
        <Footer />
      </div>
    );
  }
}

export default GalleryCard;
