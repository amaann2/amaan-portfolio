import "./App.css";
import {
  AiFillHtml5,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiOutlineConsoleSql,
  AiOutlineWhatsApp,
  AiOutlineMail
} from "react-icons/ai";
import { FaCss3Alt, FaReact, FaBootstrap, FaJava } from "react-icons/fa";
import { SiJavascript, SiFirebase, SiRedux } from "react-icons/si";
import {
  DiResponsive,
  DiNodejsSmall,
  DiMongodb,
  DiPython,
} from "react-icons/di";
import ProjectCard from "./projectcard/ProjectCard";
import { useState, useEffect } from "react";
import { project } from "./projectcard/projectData";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [data] = useState(project);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  return (
    <>
      <div className="navbar" id="navbar" >
        <div className="logo">
          <h2>Amaan </h2>
        </div>
        <div className="menu">
          <nav>
            <ul>
              <li>
                <a href="#homepage">Home</a>{" "}
              </li>
            </ul>
            <ul>
              <li>
                <a href="#about">About</a>{" "}
              </li>
            </ul>
            <ul>
              <li>
                <a href="#project">Project</a>{" "}
              </li>
            </ul>
            <ul>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="homepage" id="homepage">
        <div className="container">
          <div className="content">
            <h1 className="heading" data-aos="zoom-out">
              {" "}
              Hello, I'm Amaan Ansari
            </h1>
            <p className="info">
              Passionate Computer Science student with strong frontend
              development skills{" "}
            </p>
            <button>
              <a href="#project">project</a>{" "}
            </button>
          </div>
          <div className="social-icon" data-aos="zoom-in">
            <div className="icon">
              <a
                href="https://www.linkedin.com/in/amaan-ansarii/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin className="icons" />
              </a>
            </div>

            <div className="icon">
              <a
                href="https://github.com/amaann2"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub className="icons" />
              </a>
            </div>
            <div className="icon">
              <a
                href="mailto:ansari028amaan@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineMail className="icons" />
              </a>
            </div>
            <div className="icon">
              <a
                href="//wa.me/918291126896"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineWhatsApp className="icons" />
              </a>
            </div>
            <div className="icon">
              <a
                href="https://www.instagram.com/amaann.2"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram className="icons" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* aboutpage */}

      <div className="about" id="about" data-aos="fade-up">
        <div className="container">
          <h1 className="heading-text">about me</h1>
          <div className="info-text">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </div>

          <div className="main-content">
            <div className="left-content" data-aos="fade-right">
              <div className="content-heading">Get To Know me !</div>
              <div className="content-para">
                My education background includes a{" "}
                <strong>Bachelor of Computer Applications</strong> in Computer
                Science, currently underway at Somaiya Vidyavihar University.
                Prior to this, I completed my high school education in Science
                at S.M. Shetty College- Degree Section, where I studied physics,
                chemistry, mathematics, biology, and IT. I also completed my SSC
                from Eden High School, where I achieved a grade of 82.00%.
              </div>
              <div className="content-para">
                As a passionate and driven Computer Science student, I have
                developed a strong foundation in{" "}
                <strong>frontend development</strong> and proficiency in
                programming languages such as HTML, CSS, JavaScript, and React.
                In addition to these, I also have knowledge in other programming
                languages such as Java, C++, Python, and Node.js.
              </div>
              <div className="content-para">
                As a quick learner, I'm open to{" "}
                <strong>internship opportunities</strong> where I can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills and experience then don't hesitate to{" "}
                <strong>contact me</strong> where I can leverage my existing
                skill set and expand it further through ongoing studies and
                future projects
              </div>
              <button>
                <a href="#contact">contact</a>
              </button>
            </div>
            <div className="right-content" data-aos="fade-left">
              <div className="content-heading">My Skills</div>
              <div className="skills">
                <div className="skills__skill" data-aos="fade-up">
                  HTML5 <AiFillHtml5 className="skills__icon" />
                </div>
                <div className="skills__skill" data-aos="fade-up">
                  css <FaCss3Alt className="skills__icon" />
                </div>
                <div className="skills__skill" data-aos="fade-up">
                  javascript <SiJavascript className="skills__icon" />
                </div>
                <div className="skills__skill" data-aos="fade-up">
                  React . js <FaReact className="skills__icon" />
                </div>
                <div className="skills__skill" data-aos="fade-up">
                  Redux . js <SiRedux className="skills__icon" />
                </div>
                <div className="skills__skill" data-aos="fade-up">
                  firebase <SiFirebase className="skills__icon" />
                </div>
                <div className="skills__skill" data-aos="fade-up">
                  github <AiFillGithub className="skills__icon" />
                </div>
                <div className="skills__skill" data-aos="fade-up">
                  responsive design <DiResponsive className="skills__icon" />
                </div>
                <div className="skills__skill" data-aos="fade-up">
                  Bootstrap <FaBootstrap className="skills__icon" />
                </div>
                <div className="skills__skill" data-aos="fade-up">
                  node js <DiNodejsSmall className="skills__icon" />
                </div>
                <div className="skills__skill" data-aos="fade-up">
                  mongo db <DiMongodb className="skills__icon" />
                </div>
                <div className="skills__skill" data-aos="fade-up">
                  sql <AiOutlineConsoleSql className="skills__icon" />{" "}
                </div>
                <div className="skills__skill" data-aos="fade-up">
                  java <FaJava className="skills__icon" />
                </div>
                <div className="skills__skill" data-aos="fade-up">
                  python <DiPython className="skills__icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* product  */}
      <div id="project">
        <div className="container">
          <h1 className="heading-text">Project</h1>
          <div className="info-text">
            Here you will find some of the personal projects{" "}
          </div>
          <div className="containerr">
            {data && data.map((ele) => <ProjectCard ele={ele} key={ele.id} />)}
          </div>
        </div>
      </div>

      {/* contact page  */}

      <div className="contact" id="contact">
        <div className="container">
          <h1 className="heading-text">Contact</h1>
          <div className="info-text">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </div>
          <div className="screen" data-aos="zoom-in">
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>CONTACT</span>
                </div>
                <div className="app-contact">
                  <a
                    href="https://www.linkedin.com/in/amaan-ansarii/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillLinkedin className="contact-icon" />
                  </a>
                  <a
                    href="https://github.com/amaann2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="contact-icon" />
                  </a>
                  <a
                    href="mailto:ansari028amaan@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineMail className="contact-icon" />
                  </a>
                  <a
                    href="https://instagram.com/amaann.2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillInstagram className="contact-icon" />
                  </a>
                  <a
                    href="//wa.me/918291126896"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineWhatsApp className="contact-icon" />
                  </a>
                </div>
              </div>
              <div className="screen-body-item">
                <form
                  className="app-form"
                  action="https://formspree.io/f/mbjegnoa"
                  method="POST"
                >
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="NAME"
                      type="text"
                      name="name"
                      required
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="EMAIL"
                      type="email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="app-form-group message">
                    <textarea
                      className="app-form-control"
                      placeholder="MESSAGE"
                      rows="4"
                      name="message"
                    />
                  </div>
                  <div className="app-form-group buttons">
                    <button type="submit">SEND</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* footer  */}
      <div id="footer" className="footer">
        <div className="container">develop by amaan ansari</div>
      </div>
    </>
  );
}

export default App;
