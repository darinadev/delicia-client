import React, { FC, useRef, RefObject } from "react";
import styles from "./Gallery.module.scss";
import { SwipeableHandlers } from "react-swipeable";
import { ReactComponent as Prev } from "../../assets/svg/prev.svg";
import { ReactComponent as Next } from "../../assets/svg/next.svg";
import { ReactComponent as Close } from "../../assets/svg/close.svg";

import img1 from "../../assets/img/gallery/im1.jpg";
import img2 from "../../assets/img/gallery/im2.jpg";
import img3 from "../../assets/img/gallery/im3.jpg";
import img4 from "../../assets/img/gallery/im4.jpg";
import img5 from "../../assets/img/gallery/im5.jpg";
import img6 from "../../assets/img/gallery/im6.jpg";
import img7 from "../../assets/img/gallery/im7.jpg";
import img8 from "../../assets/img/gallery/im8.jpg";
import img9 from "../../assets/img/gallery/im9.jpg";
import img10 from "../../assets/img/gallery/im10.jpg";

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

type PropsType = {
  current: number;
  slideHandler: (dir: string) => void;
  handlers: SwipeableHandlers;
  setIsSliderOpened: (isSliderOpened: boolean) => void;
};

export const Slider: FC<PropsType> = ({
  current,
  slideHandler,
  handlers,
  setIsSliderOpened,
}) => {
  const imageRef: RefObject<HTMLImageElement> = useRef(null);
  const prevButtonRef: RefObject<HTMLButtonElement> = useRef(null);
  const nextButtonRef: RefObject<HTMLButtonElement> = useRef(null);
  const slideNumberRef: RefObject<HTMLParagraphElement> = useRef(null);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        <button
          ref={prevButtonRef}
          disabled={current <= 0}
          onClick={() => slideHandler("prev")}
        >
          <Prev />
        </button>
        <div className={styles.slide} {...handlers}>
          <img ref={imageRef} src={images[current].image} alt="slider" />
        </div>
        <button
          ref={nextButtonRef}
          disabled={current >= images.length - 1}
          onClick={() => slideHandler("next")}
        >
          <Next />
        </button>
      </div>
      <div className={styles.sliderControlPanel}>
        <p ref={slideNumberRef} className={styles.slideNumber}>
          {current + 1} of {images.length}
        </p>
        <button onClick={() => setIsSliderOpened(false)}>
          <Close />
        </button>
      </div>
    </div>
  );
};
