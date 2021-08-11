import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import wireframe from '../../assets/images/wireframe.png';
import './Gallery.css';

const items = [
  {
    src: wireframe,
  },
  {
    src: wireframe,
  },
  {
    src: wireframe,
  }
];

const Gallery = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div id="gallery">
      <div>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" onClickHandler={previous} />
          <CarouselControl direction="next" onClickHandler={next} />
        </Carousel>
        <Link to="/gallery-card-view" className="gallery-link">View All</Link>
      </div>
    </div>
  );
}

export default Gallery;
