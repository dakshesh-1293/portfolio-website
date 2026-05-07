import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    title: "ML-Based Song Recommendation System",
    category: "Machine Learning",
    tools: "Python, Pandas, Scikit-learn, KNN, K-Means",
    image: "/images/Song_recommendation_cover.png",
    link: "https://github.com/dakshesh-1293/song-recommendation-system",
  },
  {
    id: "02",
    title: "Personal Carbon Footprint Calculator",
    category: "Machine Learning + Streamlit",
    tools: "Python, Pandas, Regression, Random Forest, Streamlit",
    image: "/images/Carbon_footprint_cover.png",
    link: "https://github.com/dakshesh-1293/carbon-footprint-predictor",
  },
  {
    id: "03",
    title: "HR Analytics Dashboard",
    category: "Power BI",
    tools: "Power BI • Data Visualization",
    image: "/images/HR_report_ss.webp",
    video: "HR_report_vdo.mp4",
    link: "https://github.com/dakshesh-1293/hr-analytics-dashboard-powerbi",
  },
  {
    id: "04",
    title: "Credit Risk Dashboard",
    category: "Power BI",
    tools: "Power BI • Data Analysis",
    image: "/images/Credit_report_ss.webp",
    video: "Credit_report_vdo.mp4",
    link: "https://github.com/dakshesh-1293/credit-report-dashboard-powerbi",
  },
];

const Work = () => {

  useEffect(() => {

    // ✅ Disable horizontal animation on mobile
    if (window.innerWidth <= 768) return;

    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");

      if (!box.length) return;

      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;

      const rect = (box[0] as HTMLElement).getBoundingClientRect();

      const parentWidth =
        (box[0] as HTMLElement).parentElement!.getBoundingClientRect().width;

      let padding: number =
        parseInt(window.getComputedStyle(box[0] as Element).padding) / 2;

      translateX =
        rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };

  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.id}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>Category : {project.category}</p>
                  </div>
                </div>

                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>

              <WorkImage
                image={project.image}
                alt={project.title}
                video={project.video}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;