import { useState } from 'react';
import { useEffect } from 'react';
import JobInfo from './components/JobInfo';
import BtnContainer from './components/BtnContainer';

const url = 'https://www.course-api.com/react-tabs-project';

// TODO: fetch the data

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allJobs, setAllJobs] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [companies, setCompanies] = useState([]);

  const fetchJobs = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setAllJobs(data);
      setCompanies([...new Set(data.map((job) => job.company))]);
      setJobs(data.filter((job) => job.company === data[0].company));
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  const handleCompanyChange = (company) => {
    const companyJobs = allJobs.filter((job) => job.company === company);
    setJobs(companyJobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className='jobs-center'>
        <div className='loading'></div>
      </section>
    );
  }

  return (
    <section className='jobs-center'>
      <BtnContainer
        companies={companies}
        handleCompanyChange={handleCompanyChange}
      />
      <JobInfo jobs={jobs} />
    </section>
  );
};
export default App;
