import { useState } from "react";

function TourCard({ tour, deleteTour }) {
  const [isReadMore, setIsReadMore] = useState(true);

  return (
    <article className="single-tour">
      <img src={tour.image} alt={tour.name} className="img" />
      <span className="tour-price">{tour.price}</span>

      <div className="tour-info">
        <h5>{tour.name}</h5>
        <p>
          {isReadMore ? tour.info : tour.info?.substring(0, 200) + "..."}
          &nbsp;
          <button
            className="info-btn"
            onClick={() => setIsReadMore(!isReadMore)}
          >
            {isReadMore ? "show less" : "read more"}
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
