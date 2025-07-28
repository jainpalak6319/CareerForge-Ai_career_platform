const CompanySuggestions = ({ companies }) => {
  return (
    <section className="company-suggestions show">
      <h3>
        <i className="fas fa-star"></i>
        Top Companies for Your Profile
      </h3>
      <div className="company-cards">
        {companies.map((company, index) => (
          <div key={index} className="company-card">
            <div className="company-header">
              <div className="company-logo-suggestion">{company.logo}</div>
              <div className="company-info">
                <h4>{company.name}</h4>
                <div className="company-match">{company.match}</div>
              </div>
            </div>
            <p>{company.description}</p>
            <p><strong>{company.openings} open positions</strong></p>
            <div className="company-links">
              <a href="#" className="company-link view-jobs-link">
                <i className="fas fa-briefcase"></i>
                View Jobs
              </a>
              <a href="#" className="company-link apply-direct-link">
                <i className="fas fa-paper-plane"></i>
                Apply Direct
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanySuggestions;