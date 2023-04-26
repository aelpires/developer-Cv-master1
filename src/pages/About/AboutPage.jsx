import React from 'react';
import './AboutPage.css'

/* Component */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import cv from '../../cv/cv.pdf';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
import imgabout from '../../img/home.jpg';

const About = () => {

  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let paragraphActive = document.querySelector(".paragraph-active");

    paragraphActive.classList.toggle("show");

    if (paragraphActive.classList.contains("show")) {
      btnHide.innerHTML = "↑";
    } else {
      btnHide.innerHTML = "Read more";
    }
  }

  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="sobre-mim-section" id="sobre-mim">
          <div className="sobre-mim-container">
            <div className="sobre-mim-img-container">
              <img src={imgabout} alt="" className="sobre-mim-img" />
              
              <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo cv buttonDownload">
                  <FormattedMessage
                      id='btn-cv'
                      defaultMessage='Download CV'
                  />
              </a>
            </div>
            <div className="sobre-mim-info">
              <p>
                <FormattedMessage
                  id='about-info-1'
                  defaultMessage="My name is Alex, I live in Porto, Portugal working as a Front-end Developer + Designer as Freelancer"
                />
              </p>

              <div className="hide paragraph-active">
                <p>
                  <FormattedMessage
                    id='about-info-2'
                    defaultMessage='My journey into code started when I took a high school degree in IT Systems Management and Programming Technician (lvl 4) in which I was introduced to Front-end, Back-end, Operating Systems, How to assemble and manage Networks, together with a range of subjects such as Portuguese, Mathematics, English and all necessary to academic development.'
                  />
                </p>

                <p>
                  <FormattedMessage
                    id='about-info-3'
                    defaultMessage="Before the covid outbreak I started re-learning by myself some Front-End basics like HTML, CSS and JavaScript, which led me to go back to school, this time in Porto to a Front-End Devopment bootcamp on EDIT.. There I learned more about HTML, CSS, JavaScript and also introduced me to UX Design, Responsive Web Development and React Foundations."
                  />
                </p>
              </div>

              <div className="btn-info">
                <div className="custom-btn btn-codigo" id="btn-hide" onClick={readMore}><span>Read more</span></div>
              </div>
            </div>

          </div>

          <div className="skill-section">
            <h1 className="heading">Skills</h1>
            <div className="skill-container">
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="HTML" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" title="HTML5" />
                <h2 className="skill-name">HTML</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-1'
                    defaultMessage='More than 5 years of professional experience in this language, allows me to perform without problems in the industry.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="CSS" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" title="CSS3" />
                <h2 className="skill-name">CSS</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-2'
                    defaultMessage='More than 5 years of work experience in this language, I use it daily to develop web designs and interfaces.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="Js" className="skills-img icon-li" src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" title="Java Script" />
                <h2 className="skill-name">Javascript</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-3'
                    defaultMessage='Couple of years of experience using it in the front-end and back-end branch, allowed me to familiarize myself with the language, and include it in my work projects.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="Sass" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" title="Sass" />
                <h2 className="skill-name">Sass</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-4'
                    defaultMessage='Two years using this preprocessor in the professional field, I include it in many of my projects since it allows me a better structured code.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-down" data-aos-delay="300">
                <img alt="Bootstrap" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" title="Bootstrap" />
                <h2 className="skill-name">Bootstrap</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-5'
                    defaultMessage='Two years using this framework, even so, I used it in countless work projects, which allowed me to get to know it for the most part.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="jQuery" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" title="jQuery" />
                <h2 className="skill-name">jQuery</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-6'
                    defaultMessage='A year using this bookstore in the personal and work environment, it is one of the bookstores that I use and manipulate the most.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="react" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" title="jQuery" />
                <h2 className="skill-name">ReactJs</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-7'
                    defaultMessage='More than two years using this JavaScript framework, carrying out multiple personal and work projects.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="next" className="skills-img" src="https://github.com/devicons/devicon/blob/master/icons/nextjs/nextjs-original.svg" title="jQuery" />
                <h2 className="skill-name">NextJs</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-9'
                    defaultMessage='More than a year using this JavaScript framework, carrying out multiple personal and work projects.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="nodejs" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" title="jQuery" />
                <h2 className="skill-name">NodeJs</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-8'
                    defaultMessage='It is the cross-platform runtime environment that I use to make my web applications scalable.'
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />

      <Footer />

    </div>
  )
}
export default About;