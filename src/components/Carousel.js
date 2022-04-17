import React, { useState } from 'react';
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption
// } from 'reactstrap';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const CarouselComponent = ({ items, setCurrentSlide }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
    setCurrentSlide(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
    setCurrentSlide(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
    setCurrentSlide(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <div>
        <img
          src={item.src}
          alt={item.altText}
          style={{ width: '100%', height: 'auto' }}
        />
        <div>{item.caption}</div>
      </div>
    );
  });

  return (
    // <Carousel
    //   activeIndex={activeIndex}
    //   next={next}
    //   previous={previous}
    // >
    <AwesomeSlider>
      {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} /> */}
      {slides}
      {/* <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} /> */}
      {/* <CarouselControl direction="next" directionText="Next" onClickHandler={next} /> */}
    </AwesomeSlider>
    // </Carousel>
  );
};

export default CarouselComponent;
