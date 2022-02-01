import "./Intro.css";
import profile from "../../img/profile-image.png"

const Intro = () => {
    return (
      <>
        <div className="i">
          <div className="i-left">
            <div className="i-left-wrapper">
              <h2 className="i-intro">Hello, My name is</h2>
              <h1 className="i-name">Udit Choudhary</h1>
              <div className="i-title">
                <div className="i-title-wrapper">
                  <div className="i-title-item">Automation Test Engineer</div>
                  <div className="i-title-item">Front End Developer</div>
                  <div className="i-title-item">MERN Stack Learner</div>
                  <div className="i-title-item">Scrum Master</div>
                </div>
              </div>
              <div className="i-desc">
                I Build Things For The Web
                <br /> I'm a software engineer specializing in building
                exceptional digital experiences. Currently, I'm focused on
                learning MERN Stack
              </div>
              <svg
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 122.88 120.64"
                className="i-scroll"
              >
                <g>
                  <path d="M108.91,54.03c1.63-1.55,3.74-2.31,5.85-2.28c2.11,0.03,4.2,0.84,5.79,2.44l0.12,0.12c1.5,1.58,2.23,3.6,2.2,5.61 c-0.03,2.01-0.82,4.02-2.37,5.55c-17.66,17.66-35.61,35.13-53.4,52.68c-0.05,0.07-0.1,0.13-0.16,0.19 c-1.63,1.55-3.76,2.31-5.87,2.28c-2.11-0.03-4.21-0.85-5.8-2.45l-0.26-0.27C37.47,100.43,19.87,82.98,2.36,65.46 C0.82,63.93,0.03,61.93,0,59.92c-0.03-2.01,0.7-4.03,2.21-5.61l0.15-0.15c1.58-1.57,3.66-2.38,5.76-2.41 c2.1-0.03,4.22,0.73,5.85,2.28l47.27,47.22L108.91,54.03L108.91,54.03z M106.91,2.26c1.62-1.54,3.73-2.29,5.83-2.26 c2.11,0.03,4.2,0.84,5.79,2.44l0.12,0.12c1.5,1.57,2.23,3.6,2.21,5.61c-0.03,2.01-0.82,4.02-2.37,5.55 C101.2,31.01,84.2,48.87,67.12,66.39c-0.05,0.07-0.11,0.14-0.17,0.21c-1.63,1.55-3.76,2.31-5.87,2.28 c-2.11-0.03-4.21-0.85-5.8-2.45C38.33,48.94,21.44,31.36,4.51,13.83l-0.13-0.12c-1.54-1.53-2.32-3.53-2.35-5.54 C2,6.16,2.73,4.14,4.23,2.56l0.15-0.15C5.96,0.84,8.05,0.03,10.14,0c2.1-0.03,4.22,0.73,5.85,2.28l45.24,47.18L106.91,2.26 L106.91,2.26z" />
                </g>
              </svg>
            </div>
          </div>
          <div className="i-right">
            <div className="i-bg"></div>
            <img className="i-img" src={profile} alt="profile" />
          </div>
        </div>
      </>
    );
}

export default Intro;