import React, { useState } from "react";
import styles from "./Gallery.module.scss";
import cn from "classnames";
import { ImagePreviews } from "./ImagePreviews";
import { Slider } from "./Slider";
import { useSlider } from "../common/hooks/useSlider";

import img1 from "../../assets/img/gallery-minified/im1.jpg";
import img2 from "../../assets/img/gallery-minified/im2.jpg";
import img3 from "../../assets/img/gallery-minified/im3.jpg";
import img4 from "../../assets/img/gallery-minified/im4.jpg";
import img5 from "../../assets/img/gallery-minified/im5.jpg";
import img6 from "../../assets/img/gallery-minified/im6.jpg";
import img7 from "../../assets/img/gallery-minified/im7.jpg";
import img8 from "../../assets/img/gallery-minified/im8.jpg";
import img9 from "../../assets/img/gallery-minified/im9.jpg";
import img10 from "../../assets/img/gallery-minified/im10.jpg";

const images = [
  { id: 0, image: img1 },
  { id: 1, image: img2 },
  { id: 2, image: img3 },
  { id: 3, image: img4 },
  { id: 4, image: img5 },
  { id: 5, image: img6 },
  { id: 6, image: img7 },
  { id: 7, image: img8 },
  { id: 8, image: img9 },
  { id: 9, image: img10 },
];

const Gallery = () => {
  const [isSliderOpened, setIsSliderOpened] = useState(false);
  const [current, setCurrentSlide, slideHandler, handlers] = useSlider(
    images.length
  );

  const imagePreviews = images.slice(0, 9);

  return (
    <div className={cn(styles.gallery, { [styles.active]: isSliderOpened })}>
      <h1 className={styles.title}>
        Our <span>gallery</span>
      </h1>
      <ImagePreviews
        imagePreviews={imagePreviews}
        isSliderOpened={isSliderOpened}
        setIsSliderOpened={setIsSliderOpened}
        setCurrentSlide={setCurrentSlide}
      />
      <div className={styles.galleryButton}>
        <button onClick={() => {
          setIsSliderOpened(true);
          setCurrentSlide(0);
        }}>
          Watch all photos
        </button>
      </div>
      {isSliderOpened && (
        <Slider
          current={current}
          slideHandler={slideHandler}
          handlers={handlers}
          setIsSliderOpened={setIsSliderOpened}
        />
      )}
    </div>
  );
};

export default Gallery;
