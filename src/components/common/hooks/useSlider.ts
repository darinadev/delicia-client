import { useCallback, useEffect, useState, useRef } from "react";
import { useSwipeable } from "react-swipeable";

export const useSlider = (itemsLength: number) => {
  const [current, setCurrent] = useState(0);

  const slide = useRef(0);

  const setCurrentSlide = (index: number) => {
    slide.current = index;
    setCurrent(index);
  };

  //slider handler
  const slideHandler = useCallback(
    (dir: string) => {
      let newIndex = slide.current;
      if (dir === "next" && newIndex < itemsLength - 1) {
        newIndex = slide.current + 1;
      } else if (dir === "prev" && newIndex > 0) {
        newIndex = slide.current - 1;
      }
      setCurrentSlide(newIndex);
    },
    [itemsLength]
  );

  // slider navigation by arrows keys (Left / Right)
  const onKeyClicked = useCallback(
    (event: KeyboardEvent) => {
      const { keyCode } = event;
      if (keyCode === 37) {
        slideHandler("prev");
      } else if (keyCode === 39) {
        slideHandler("next");
      }
    },
    [slideHandler]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyClicked);
    return () => {
      document.removeEventListener("keydown", onKeyClicked);
    };
  }, [onKeyClicked]);

  // slider navigation by swipes
  const handlers = useSwipeable({
    onSwipedLeft: () => slideHandler("next"),
    onSwipedRight: () => slideHandler("prev"),
    trackMouse: true,
  });

  return [current, setCurrentSlide, slideHandler, handlers] as const;
};
