import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import reviews from "../data";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const nextReview = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % reviews.length;
      // return currentIndex === reviews.length - 1 ? 0 : currentIndex + 1;
      return newIndex;
    });
  };

  const prevReview = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + reviews.length) % reviews.length;
      // return currentIndex === 0 ? reviews.length - 1 : currentIndex - 1;
      return newIndex;
    });
  };

  const randomReview = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    if (randomIndex === index) {
      randomIndex = randomIndex + 1;
    }
    const newIndex = randomIndex % reviews.length;
    setIndex(newIndex);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>

      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div className="btn-container">
        <button className="prev-btn" onClick={prevReview}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextReview}>
          <FaChevronRight />
        </button>
      </div>

      <button className="btn btn-hipster" onClick={randomReview}>
        Surprise me
      </button>
    </article>
  );
};
export default Reviews;
