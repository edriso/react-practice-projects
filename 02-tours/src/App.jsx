import { useEffect, useState } from "react";
import TourCard from "./components/TourCard";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setIsLoading] = useState(true);

  const getData = async () => {
    setIsLoading(true);

    const response = await fetch(url);
    const data = await response.json();
    setTours(data);

    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteTour = (tourID) => {
    const filteredTours = tours.filter((tour) => tour.id !== tourID);
    setTours(filteredTours);
  };

  return (
    <main>
      {loading ? (
        <h4>Loading...</h4>
      ) : tours.length ? (
        <>
          <div className="title">
            <h2>Our Tours</h2>
            <div className="title-underline"></div>
          </div>

          <section className="tours">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} deleteTour={deleteTour} />
            ))}
          </section>
        </>
      ) : (
        <div className="title">
          <h2>No Tours Left</h2>
          <button
            className="btn"
            style={{ marginTop: "2rem" }}
            onClick={getData}
          >
            Refresh
          </button>
        </div>
      )}
    </main>
  );
};
export default App;
