import { useState } from "react";

function TourCard({ tour, deleteTour }) {
  const [isFullInfo, setIsFullInfo] = useState(true);

  return (
    <article className="single-tour">
      <img src={tour.image} alt={tour.name} className="img" />
      <span className="tour-price">{tour.price}</span>

      <div className="tour-info">
        <h5>{tour.name}</h5>
        <p>
          {isFullInfo ? tour.info : tour.info?.substring(0, 200) + "..."}
          &nbsp;
          <button
            className="info-btn"
            onClick={() => setIsFullInfo(!isFullInfo)}
          >
            {isFullInfo ? "read less" : "read more"}
          </button>
        </p>
        <button
          className="delete-btn btn-block btn"
          onClick={() => deleteTour(tour.id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
}

export default TourCard;
