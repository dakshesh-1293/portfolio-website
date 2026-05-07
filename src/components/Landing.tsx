import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <div className="landing-section" id="landingDiv">

      <div className="landing-container">

        {/* LEFT SIDE */}
        <div className="landing-intro">
          <h2 className="intro-text">Hello! I'm</h2>

          <h1 className="name-text">
            DAKSHESH
            <br />
            <span>PARMAR</span>
          </h1>
        </div>

        {/* RIGHT SIDE */}
        <div className="landing-info">
          <p className="subtitle"><h3>Data Science Enthusiast</h3></p>

          <h2 className="landing-role">
            Data Scientist <br />
            & ML Engineer
          </h2>
        </div>

      </div>

      {children}
    </div>
  );
};

export default Landing;