import "./About.css"
import me from "../../img/profileSide.png"
import award from "../../img/award.jpg"
import { useContext } from "react";
import { ThemeContext } from "../../context"

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
    return (
      <>
        <div className="a">
          <div className="a-left">
            <div
              className="a-card bg"
              style={{ "backgroundColor": darkMode && "#8360c3" }}
            ></div>
            <div className="a-card">
              <img src={me} alt="profile" className="a-img" />
            </div>
          </div>
          <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">Something will come here later</p>
            <p className="a-desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="a-award">
              <img className="a-award-img" src={award} alt="" />
              <div className="a-award-text">
                <h4 className="a-award-title">Internation Experience</h4>
                <div className="a-award-desc">
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );

}

export default About;