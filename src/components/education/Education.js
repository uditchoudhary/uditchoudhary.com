import "./Education.css";
import Timeline from "../timeline/Timeline";
import { type } from "@testing-library/user-event/dist/type";

const data = [
  {
    type: "university",
    title: "Full Stack Development with React Specialization",
    subtitle: "Coursera - The Hong Kong University of Science and Technology",
    year: "2021 - 2021",
    side: "left",
    detials: "details",
  },
  {
    type: "university",
    title: "Post Graduate Diploma in Comptuer and Information Science",
    subtitle: "Auckland University of Technology, New Zealand",
    year: "2015 - 2015",
    side: "right",
    detials: "details",
    end: false,
  },
  {
    type: "university",
    title: "Master of Computer Application",
    subtitle: "Sikkim Manipal University - Distance Education, India",
    year: "2012 - 2013",
    side: "left",
    detials: "details",
    end: false,
  },
  {
    type: "university",
    title: "Bachelor of Computer Application",
    subtitle: "Birla Institute of Technology, Noida, India",
    year: "2008 - 2011",
    side: "right",
    detials: "details",
    end: true,
  },
];

const Education = () => {
  return (
    <div className="e">
      <div className="e-title" id="education">Degrees and Certifications</div>
      <div className="timeline-wrapper">
        {data.map((item,index) => {
         const {type, title, subtitle, year, side, details, end } = item;
          return (
            <Timeline key={index}
              type={type}
              title={title}
              subtitle={subtitle}
              year={year}
              side={side}
              details={details}
              end={end}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Education;
