import { useState } from 'react';
import SingleQuestion from './SingleQuestion';

const Questions = ({ questions }) => {
  const [shownQuestionIndex, setShownQuestionIndex] = useState(null);

  const toggleAnswer = (id) => {
    setShownQuestionIndex(shownQuestionIndex === id ? null : id);
  };

  return (
    <section className='container'>
      <h1>Questions</h1>
      {questions.map((question) => (
        <SingleQuestion
          key={question.id}
          {...question}
          isCollapsed={shownQuestionIndex === question.id}
          toggleAnswer={() => toggleAnswer(question.id)}
        />
      ))}
    </section>
  );
};
export default Questions;
