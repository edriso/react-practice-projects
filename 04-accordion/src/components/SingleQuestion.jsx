import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = ({ title, info, isCollapsed, toggleAnswer }) => {
//   const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    // <article className='question' onClick={() => setIsCollapsed(!isCollapsed)}>
    <article className='question' onClick={toggleAnswer}>

      <header>
        <h5>{title}</h5>
        <button
          className='question-btn'
          onClick={toggleAnswer}
        >
          {isCollapsed ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>

      {isCollapsed && <p>{info}</p>}
    </article>
  );
};
export default SingleQuestion;
