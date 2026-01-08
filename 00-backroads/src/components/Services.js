import { offeredServices } from "../data";

import Title from "./Title";

function Services() {
  return (
    <section className="section" id="services">
      <Title subTitle="Our" highlight="Services" />

      <div className="section-center services-center">
        {offeredServices.map((item) => {
          return (
            <article className="service" key={item.title}>
              <span className="service-icon">
                <i className={item.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{item.title}</h4>
                <p className="service-text">{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
