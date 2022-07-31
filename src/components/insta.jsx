import React, { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { v4 as uuidv4 } from "uuid";
import posts from "../helpers/posts";
import Post from "./post";
import "../css/insta.css";

const Insta = () => {
  const autoplay = useRef(
    Autoplay({ delay: 4000 }, (emblaRoot) => emblaRoot.parentElement)
  );

  return (
    <div className="insta-container">
      <h2 className="insta-title">#WineExperience</h2>
      <h3 className="insta-subtitle">Conte a sua experiência</h3>
      <Carousel
        className="insta-objects"
        sx={{ maxWidth: 400 }}
        mx="auto"
        withIndicators
        height={550}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {posts.map((post) => (
          <Carousel.Slide key={uuidv4()}>
            <Post post={post} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default Insta;
