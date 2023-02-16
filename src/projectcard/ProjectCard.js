import React from "react";
import "./projectcard.css";

const ProjectCard = ({ ele }) => {
  const{title,about,url,tools} =ele

  return (
    <div>
      <div className="container">
        <div className="containerr">
          <div className="card">
            {/* <div className="card-header" style={{ backgroundImage: `url(${imgUrl})`}}> */}
              {/* <img
                src={ele.imgUrl}
                alt="projectImage"
              /> */}
            {/* </div> */}
            <div className="card-body">

              <h4>{title}</h4>
              <p>{about}</p>
              <div className="tools">

                {tools.map((item) => (
                  <span className="tag tag-teal" key={item.id}>{item}</span>
                ))}
              </div>
              <button><a href={url} target="_blank" rel="noreferrer">View project</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
