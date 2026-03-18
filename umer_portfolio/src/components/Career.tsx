import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python Django Developer</h4>
                <h5>Freelance / Self Projects</h5>
              </div>
              <h3>2022 - Present</h3>
            </div>
            <p>
              Developed multiple web applications using Python and Django,
              focusing on scalable and maintainable backend systems.
              Built REST APIs using Django REST Framework and integrated
              frontend interfaces.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer</h4>
                <h5>Web Applications</h5>
              </div>
              <h3>Projects Based</h3>
            </div>
            <p>
              Worked on real-world projects including e-commerce platforms,
              CRM systems, and real-time chat applications. Managed databases
              using MySQL and optimized performance for better scalability.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BS Information Technology (BSIT)</h4>
                <h5>University</h5>
              </div>
              <h3>2024 - Present</h3>
            </div>
            <p>
              Currently pursuing a Bachelor's degree in Information Technology,
              focusing on software development, databases, and modern web
              technologies.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
