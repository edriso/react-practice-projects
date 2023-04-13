import { useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const checkIndex = (index) => {
    if (index > reviews.length - 1) {
      return 0;
    }
    if (index < 0) {
      return reviews.length - 1;
    }
    return index;
  };

  const nextReview = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      // return currentIndex === reviews.length - 1 ? 0 : currentIndex + 1;
      return checkIndex(newIndex);
    });
  };

  const prevReview = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      // return currentIndex === 0 ? reviews.length - 1 : currentIndex - 1;
      return checkIndex(newIndex);
    });
  };

  return (
    <main>
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
      </article>
    </main>
  );
};
export default App;
