import React from "react";
import styles from "./Testimonials.module.scss";
import cn from "classnames";
import { Testimonial } from "./Testimonial";
import { useSlider } from "../../common/hooks/useSlider";
import { ReactComponent as Prev } from "../../../assets/svg/prev-arrow.svg";
import { ReactComponent as Next } from "../../../assets/svg/next-arrow.svg";

const testimonials = [
  {
    id: 0,
    name: "John Smith",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis architecto hic iste quod, est adipisci dolores? Saepe mollitia debitis fuga sit magnam voluptatem odio, labore perspiciatis ullam repudiandae numquam perferendis.",
  },
  {
    id: 1,
    name: "Elsa Louren",
    text: "Sequi dolorum debitis vitae quo molestias aut, libero ab ad et asperiores distinctio tempore magni velit doloribus saepe quis in, delectus nobis.",
  },
  {
    id: 2,
    name: "Mike Nilson",
    text: "Sed corporis ea enim, cum veniam nisi provident ullam, cupiditate officia saepe laboriosam voluptates doloribus eligendi sunt nulla eos optio reiciendis similique.",
  },
];

export const Testimonials = () => {
  const [current, setCurrentSlide, slideHandler, handlers] = useSlider(
    testimonials.length
  );
  return (
    <div className={styles.testimonials}>
      <h2>What our clients says</h2>
      <div className={styles.slider}>
        <button disabled={current <= 0} onClick={() => slideHandler("prev")}>
          <Prev />
        </button>
        <div {...handlers}>
          <Testimonial {...testimonials[current]} />
        </div>
        <button
          disabled={current >= testimonials.length - 1}
          onClick={() => slideHandler("next")}
        >
          <Next />
        </button>
      </div>
      <div className={styles.dots}>
        {testimonials.map((testimonial) => (
          <button
            key={testimonial.id}
            className={cn(styles.dot, {
              [styles.active]: testimonial === testimonials[current],
            })}
            onClick={() => setCurrentSlide(testimonials.indexOf(testimonial))}
          />
        ))}
      </div>
    </div>
  );
};
