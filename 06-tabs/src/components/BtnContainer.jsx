import { useState } from "react";

const BtnContainer = ({ companies, handleCompanyChange }) => {
    const [selectedCompany, setSelectedCompany] = useState(companies[0]) 
  return (
    <div className='btn-container'>
      {companies.map((company) => {
        return (
          <button
            key={company}
            className={company === selectedCompany ? 'job-btn active-btn' : 'job-btn'}
            onClick={() => {
                handleCompanyChange(company)
                setSelectedCompany(company)
            }}
          >
            {company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
