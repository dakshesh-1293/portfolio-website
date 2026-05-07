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

          {/* MSc */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MSc Data Science Student</h4>
                <h5>Marwadi University, Rajkot-Gujarat</h5>
              </div>
              <h3>2025 - 2027</h3>
            </div>
            <p>
              Currently pursuing MSc in Data Science with a focus on Machine Learning, 
              Data Analysis, and real-world problem solving through projects.
            </p>
          </div>

          {/* ML Project */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning Project</h4>
                <h5>Personal Project</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Built ML-based Song Recommendation System using K-Means, KNN, and Cosine Similarity 
              on large datasets. Focused on feature engineering and model evaluation.
            </p>
          </div>

          {/* Data Analysis Project */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analysis & ML Application</h4>
                <h5>Academic Project</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developed Carbon Footprint Prediction app using Linear Regression, Random Forest, 
              and Streamlit for real-time prediction and visualization.
            </p>
          </div>

          {/* BSc */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BSc Mathematics</h4>
                <h5>Tolani College Of Arts & Science, Gandhidham-Gujarat</h5>
              </div>
              <h3>2021 - 2024</h3>
            </div>
            <p>
              Built a strong foundation in mathematics, statistics, and analytical thinking, 
              supporting my journey into data science and machine learning.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;