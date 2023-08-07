import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SchoolIcon from '@material-ui/icons/School';
import "react-vertical-timeline-component/style.min.css";
function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2017 - 2018"
            iconStyle={{background: '#2118E7' , color: "#fff"}}
            icon={<SchoolIcon />}>
                <h3 className="vertical-timeline-element-title">
                    The Doon Global School , Jhajhra
                </h3>
                <p> High School </p>
            </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2020 - 2024"
            iconStyle={{background: '#2118E7' , color: "#fff"}}
            icon={<SchoolIcon />}>
                <h3 className="vertical-timeline-element-title">
                    GB Pant Engineering College , Pauri
                </h3>
                <p> Degree </p>
            </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
