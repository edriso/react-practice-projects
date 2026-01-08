import Duties from './Duties';

const JobInfo = ({ jobs }) => {
  return (
    <>
      {jobs.map((job) => {
        const { id, title, dates, duties, company } = job;
        return (
          <article key={id} className='job-info'>
            <h3>{title}</h3>
            <span className='job-company'>{company}</span>
            <p className='job-date'>{dates}</p>
            <Duties duties={duties} />
          </article>
        );
      })}
    </>
  );
};
export default JobInfo;
