const AIAnalysis = () => {
  const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'CSS3', 'HTML5', 'Git', 'Agile'];
  
  return (
    <section className="ai-analysis show">
      <h3>
        <i className="fas fa-brain ai-icon"></i>
        AI Resume Analysis
      </h3>
      <div className="analysis-content">
        <p>Based on your resume, we've identified your key strengths and matching opportunities:</p>
        <div className="skill-tags">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAnalysis;