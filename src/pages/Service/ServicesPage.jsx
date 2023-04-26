import React from 'react';
import './ServicesPage.css'

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Accordion from './Accordion'


/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Services = () => {
  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main className="service-page">
      <section className="servicos" id="servicos">
        <h2 className="heading">
            <FormattedMessage
                id='services'
                defaultMessage='Services'
            />
        </h2>
        <div className="row">
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
                <i className="fas fa-drafting-compass"></i>
                <h3>
                    <FormattedMessage
                        id='design'
                        defaultMessage='ADesign UX/UIboult me'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='design-info'
                        defaultMessage='Design of attractive interfaces for both web and mobile users, making the most of the brand or product that the client wishes to exploit on their website'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="300">
                <i className="fas fa-laptop"></i>
                <h3>
                    <FormattedMessage
                        id='development'
                        defaultMessage='Web development'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='development-info'
                        defaultMessage='Creation of well-structured web pages, good responsive design, attractive color palette, with interactions that give the user satisfaction when browsing the website.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="500">
                <i className="fas fa-wrench"></i>
                <h3>
                    <FormattedMessage
                        id='maintenance'
                        defaultMessage='Web maintenance'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='maintenance-info'
                        defaultMessage='Complete maintenance of web pages to detect and solve errors, update content whether text, photos, web design elements, add new functions, etc.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="700">
                <i className="fas fa-tachometer-alt"></i>
                <h3>
                    <FormattedMessage
                        id='optimization'
                        defaultMessage='Website optimization'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='optimization-info'
                        defaultMessage='Complete optimization of your web page, improving loading speed, using optimized images, a good URL, to give a better experience to users who visit the website'
                    />
                </p>
            </div>
        </div>
    </section>

        <section className="site-services">
          <h2 className="heading">
            <FormattedMessage
              id='services-experience'
              defaultMessage='Studies'
            />
          </h2>
          <div className="row">
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
              <h3>
                <FormattedMessage
                  id='services-info-title-1'
                  defaultMessage=' Escola Secundária Miguel Torga'
                />
              </h3>
              <h4 className="sub-title">
                <FormattedMessage
                  id='services-info-sub-title-1'
                  defaultMessage='16 SEP 2008 – 20 JUL 2011'
                />
              </h4>
              <p className="numero"><span>IT SYSTEMS MANAGEMENT/PROGRAMMING</span></p>
              <ul className="ul-cards-services">
                <li>
                  <i className="fas fa-check"></i>
                  <span >
                    <FormattedMessage
                      id='services-info-1-p1'
                      defaultMessage='Network management'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p2'
                      defaultMessage=' Operating Systems'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p3'
                      defaultMessage='Programming and Computer systems'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p4'
                      defaultMessage='Computer Architecture'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p5'
                      defaultMessage='Information and Communication Technologies'
                    />
                  </span>
                </li>
              </ul>
            </div>
            <div className="columns recomendado" data-aos="fade-up" data-aos-delay="300">
              <h3>
                <FormattedMessage
                  id='services-info-title-2'
                  defaultMessage='EDIT. - Disruptive Digital Education'
                />
              </h3>
              <h4 className="sub-title">
                <FormattedMessage
                  id='services-info-sub-title-2'
                  defaultMessage='10 MAR 2021 – 11 AUG 2021'
                />
              </h4>
              <p className="numero"><span>FRONT-END DEVELOPER</span></p>
              <ul className="ul-cards-services">
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-2-p1'
                      defaultMessage='UX/UI Design'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p2'
                      defaultMessage='HTML5'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p3'
                      defaultMessage='CSS3'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p4'
                      defaultMessage='Responsive Web Development'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p5'
                      defaultMessage='Javascript'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p6'
                      defaultMessage='React Foundations'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p7'
                      defaultMessage='Project 360º'
                    />
                  </span>
                </li>
              </ul>             
            </div>
            
            <div className="columns" data-aos="fade-up" data-aos-delay="400">
              <h3>Instituto Politécnico de Bragança </h3>
              <h4 className="sub-title">
                <FormattedMessage
                  id='services-info-sub-title-3'
                  defaultMessage='15 SEP 2011 – 20 JUL 2015'
                />
              </h4>
              <p className="numero"><span>Sports</span></p>
              <ul className="ul-cards-services">
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-3-p1'
                      defaultMessage='Anatomy (I/II)'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p2'
                      defaultMessage='Statistic (I/II)'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p3'
                      defaultMessage='Sociology'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p4'
                      defaultMessage='Multiple Sports(Indoor and outdoor)'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p5'
                      defaultMessage='Others'
                    />
                  </span>
                </li>
              </ul>
              
            </div>
          </div>
        </section>

        <section className="perguntas">
          <h2 className="heading">
            <FormattedMessage
              id='services-questions'
              defaultMessage='Frequent questions'
            />
          </h2>
          <div className="accordion-container">
            <Accordion
              title={<FormattedMessage
                id='services-questions-1'
                defaultMessage='How long have I been coding?'
              />}
              content={<FormattedMessage
                id='services-questions-p1'
                defaultMessage='I have been coding for the last 3 years almost every single day.'
              />}
              dataAos="fade-right"
              dataAosDelay="300"
            />

            <Accordion
              title={<FormattedMessage
                id='services-questions-2'
                defaultMessage='How many languages do I speak?'
              />}
              content={<FormattedMessage
                id='services-questions-p2'
                defaultMessage='Portuguese is my native language. I am also fluent in English, Spanish and French.'
              />}
              dataAos="fade-left"
              dataAosDelay="300"
            />

            <Accordion
              title={<FormattedMessage
                id='services-questions-3'
                defaultMessage='What are my main frameworks?'
              />}
              content={<FormattedMessage
                id='services-questions-p3'
                defaultMessage='I mainly work on ReactJs and NextJs. But i am always eager to learn more'
              />}
              dataAos="fade-right"
              dataAosDelay="300"
            />

            <Accordion
              title={<FormattedMessage
                id='services-questions-4'
                defaultMessage='Am I looking for a Job?'
              />}
              content={<FormattedMessage
                id='services-questions-p4'
                defaultMessage='Yes I am :)'
              />}
              dataAos="fade-left"
              dataAosDelay="300"
            />

          </div>
        </section>
      </main>


      <ScrollToTop />

      <Footer />

    </div>
  )
}
export default Services;