import { useContext } from "react";
import { ThemeContext } from "../../context";
import "./Timeline.css";

const Timeline = ({ year, title, type, subtitle, side, end, details }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div className="wrapper">
        <div className="center-line">
          {end && (
            <a href="#education" className="scroll-icon">
              <i className="fas fa-caret-up"></i>
            </a>
          )}
        </div>
        <div className={`row ${side}`}>
          <section style={{ color: "black" }}>
            <i
              className={`icon fas fa-${type}`}
              style={{ background: darkMode && "white", color: darkMode && "black"}}
            ></i>
            <div className="details">
              <span className="title ">{title}</span>
              <span className="subtitle ">{subtitle}</span>
              <span className="year ">{year}</span>
            </div>

            <div className="bottom">
              <p>{details}</p>
            </div>
          </section>
        </div>
        {/* <div class="row row-1">
        <section>
          <i className="icon fas fa-star"></i>
          <div className="details">
            <span className="title">Title of Section 2</span>
            <span>2nd Jan 2021</span>
          </div>
          <p>
            Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui
            veroes praesentium maiores, sint eos vero sapiente voluptas debitis
            dicta dolore.
          </p>
          <div className="bottom">
            <a href="#">Read more</a>
            <i>- Someone famous</i>
          </div>
        </section>
      </div> */}
      </div>
    </>
  );
};

export default Timeline;
