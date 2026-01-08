import { useEffect, useState } from 'react';
import { shortList, list, longList } from '../data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = () => {
  const [people, setPeople] = useState(longList);
  const [currentPersonIndex, setCurrentPersonIndex] = useState(0);

  const prevSlide = () => {
    // const prevIndex =
    //   currentPersonIndex === 0 ? people.length - 1 : currentPersonIndex - 1;
    // setCurrentPersonIndex(prevIndex);

    setCurrentPersonIndex((oldIndex) => {
      const newIndex = (oldIndex - 1 + people.length) % people.length;

      return newIndex;
    });
  };

  const nextSlide = () => {
    // const nextIndex =
    //   currentPersonIndex === people.length - 1 ? 0 : currentPersonIndex + 1;
    // setCurrentPersonIndex(nextIndex);

    setCurrentPersonIndex((oldIndex) => {
      const newIndex = (oldIndex + 1) % people.length;

      return newIndex;
    });
  };

  useEffect(() => {
    const sliderId = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => {
      clearInterval(sliderId);
    };
  }, [currentPersonIndex]);

  return (
    <section className='slider-container'>
      {people.map((person, personIndex) => {
        const { id, name, image, title, quote } = person;
        return (
          <article
            key={id}
            className='slide'
            style={{
              transform: `translateX(${
                100 * (personIndex - currentPersonIndex)
              }%)`,
              opacity: personIndex === currentPersonIndex ? 1 : 0,
              visibility:
                personIndex === currentPersonIndex ? 'visible' : 'hidden',
            }}
          >
            <img src={image} alt={name} className='person-img' />
            <h5 className='name'>{name}</h5>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>
        );
      })}

      <button type='button' className='prev' onClick={prevSlide}>
        <FiChevronLeft />
      </button>

      <button type='button' className='next' onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};
export default Carousel;
