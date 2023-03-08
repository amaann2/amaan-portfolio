import React from "react";
import "./projectcard.css";

const ProjectCard = ({ ele }) => {
  const { title, about, url, tools } = ele;

  // const [isReadMoreShown, setReadMoreShown] = useState(false)

  // const toggleText = () => {
  //   setReadMoreShown(prevState => !prevState)
  // }
  // const maxlength = 100;

  return (
    <div>
      <div className="container">
        <div className="containerr">
          <div className="card" data-aos="flip-left">
            {/* <div className="card-header" > */}
            <img

              src={ele.imgUrl}
              alt="projectImage"
              className="project-image"
            />
            {/* </div> */}
            <div className="card-body">
              <h4>{title}</h4>
              {/* <p>{isReadMoreShown ? about : about.substr(0, maxlength)}
                {about.length < maxlength ?
                  ""
                  : <span className="read" onClick={toggleText}>{isReadMoreShown ? "Read less" : "... Readmore"}</span>
                }
              </p> */}

              <p>{about}</p>

              <div className="tools">
                {tools.map((item, ind) => (
                  <span className="tag tag-teal" key={ind}>
                    {item}
                  </span>
                ))}
              </div>
              <button>
                <a href={url} target="_blank" rel="noreferrer">
                  View project
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
