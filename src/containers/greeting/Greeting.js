import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  {greeting.nickname}
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <a
                  style={{
                    backgroundColor: theme.secondaryText,
                    color: theme.dark,
                    padding: "12px",
                    borderRadius: "5px",
                    border: `1px solid ${theme.dark}`,
                    transition: "transform 0.2s ease-in-out, background-color 0.2s ease",
                    cursor: "pointer",
                    textDecoration: "none",
                    boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.7)",
                  }}
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow = "5px 5px 15px rgba(0, 0, 0, 0.3)"; 
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "3px 3px 10px rgba(0, 0, 0, 0.2)";
                  }}
                >
                  My Resume
                </a>        
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme}/>
          </div>
        </div>
      </div>
    </Fade>
  );
}
