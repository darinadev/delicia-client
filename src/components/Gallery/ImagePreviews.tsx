import React, { FC, useCallback, useEffect } from "react";
import styles from "./Gallery.module.scss";
import { ReactComponent as Photo } from "../../assets/svg/photo.svg";
import { ImageType } from "../../types/types";

type PropsType = {
  imagePreviews: Array<ImageType>;
  isSliderOpened: boolean;
  setIsSliderOpened: (isSliderOpened: boolean) => void;
  setCurrentSlide: (idx: number) => void;
};

export const ImagePreviews: FC<PropsType> = ({
  imagePreviews,
  isSliderOpened,
  setIsSliderOpened,
  setCurrentSlide,
}) => {
  const openSlider = useCallback(() => {
    isSliderOpened
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isSliderOpened]);

  useEffect(() => {
    openSlider();
  }, [isSliderOpened, openSlider]);

  const onImageClick = (idx: number) => {
    setIsSliderOpened(true);
    setCurrentSlide(idx);
  };

  const imageElements = imagePreviews.map((image: ImageType) => (
    <div key={image.id} className={styles.image}>
      <img
        src={image.image}
        alt={`Gallery${image.id}`}
        onClick={() => onImageClick(image.id)}
      />
      <div
        className={styles.imageWrapper}
        onClick={() => onImageClick(image.id)}
      >
        <Photo />
      </div>
    </div>
  ));

  return <div className={styles.images}>{imageElements}</div>;
};
