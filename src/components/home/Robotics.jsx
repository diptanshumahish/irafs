import React from "react";
import r from "@/styles/Home/Robotics.module.css";

export default function Robotics() {
  return (
    <div id={r.mn}>
      <div id={r.mid}>
        <div>
          <iframe
            id={r.if}
            src="https://embed.lottiefiles.com/animation/143740"
          ></iframe>
        </div>
        <div id={r.items}>
          <h3>
            Our Robotic Process Automation Technology Expertise can help your
            business unlock growth
          </h3>
          <span className={r.sp}>
            Your business demands increase year over year. IRA FS uses the
            proper tools and methods to ensure your company can keep abreast of
            the times.
          </span>
          <ul id={r.u}>
            <li className="l">Our RPA team is the centre of excellence</li>
            <li className="l">All our consultants are RPA Certified</li>
            <li className="l">Exposure and knowledge in more than one tool</li>
            <li className="l">
              Expertise skills. Up to date with Advanced topic{" "}
            </li>
            <li className="l">RPA QA Analyst to RPA Solution Architects </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
