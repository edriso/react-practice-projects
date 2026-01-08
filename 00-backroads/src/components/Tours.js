import Title from "./Title";
import { featuredTours } from "../data";

function Tours() {
  return (
    <section className="section" id="tours">
      <Title subTitle="Featured" highlight="Tours" />

      <div className="section-center featured-center">
        {featuredTours.map((tour) => {
          return (
            <article className="tour-card" key={tour.title}>
              <div className="tour-img-container">
                <img src={tour.cover} className="tour-img" alt={tour.title} />
                <p className="tour-date">{tour.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{tour.title}</h4>
                </div>
                <p>{tour.description}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>
                    {tour.location}
                  </p>
                  <p>{tour.duration}</p>
                  <p>from ${tour.cost}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Tours;
