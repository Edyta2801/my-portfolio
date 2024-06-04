import React from "react";
import { Card, CardColumns } from "react-bootstrap";
import "../styles/Projects.css";
import linkedin from "../../images/linkedin-logo.png";
import github from "../../images/GitHub-logo.png";
import "../../components/styles/Responsive.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { ZoomIn, Link } from "react-feather";
import p2 from "../../images/Projects/blog_1.png";
import p1 from "../../images/Projects/chat.png";
import p3 from "../../images/Projects/wydatki.png";
import p4 from "../../images/Projects/image_superhero_.jpg";
import p5 from "../../images/Projects/home.png";
import p6 from "../../images/Projects/pizzeria_new.png";
import p7 from "../../images/Projects/travel.png";
import p8 from "../../images/Projects/e-shop.png";
import p9 from "../../images/Projects/cms.png";

const images6 = [
  "//res.cloudinary.com/edyta/image/upload/v1713866456/main_ri0uwv.png",
  "//res.cloudinary.com/edyta/image/upload/v1713866457/home_u0hlkj.png",
  "//res.cloudinary.com/edyta/image/upload/v1713866456/jobs_rstluy.png",
  "//res.cloudinary.com/edyta/image/upload/v1713866457/candidates_ryldlq.png",
];

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      linkedin: linkedin,
      github: github,
      photoIndex: 0,
      isOpen: false,
    };
  }
  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div className="body">
        <CardColumns>
        <Card>
        <Card.Img variant="top" src={p5} />
            <Card.Body>
              <div className="icon-description">
                <div className="social-icons">
                  <div className="icon">
                    <a
                      href="https://github.com/Edyta2801/HR-dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Link />
                      </a>
                  </div>
                  <div className="icon">
                    <a
                      href="https://hr-analytics-dashboard.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ZoomIn />
                    </a>
                  </div>
                </div>
              </div>
              <Card.Title>HR Analytics </Card.Title>
              <Card.Subtitle>React TypeScript Axios</Card.Subtitle>
            </Card.Body>
          </Card>

                    {/* </a>
                  </div>
                  <div className="icon">
                    <button
                      type="button"
                      onClick={() => this.setState({ isOpen: true })}
                    >
                      <ZoomIn />
                    </button>

                    {isOpen && (
                      <Lightbox
                        mainSrc={images6[photoIndex]}
                        nextSrc={images6[(photoIndex + 1) % images6.length]}
                        prevSrc={
                          images6[
                            (photoIndex + images6.length - 1) % images6.length
                          ]
                        }
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                          this.setState({
                            photoIndex:
                              (photoIndex + images6.length - 1) %
                              images6.length,
                          })
                        }
                        onMoveNextRequest={() =>
                          this.setState({
                            photoIndex: (photoIndex + 1) % images6.length,
                          })
                        }
                      />
                    )}
                  </div>
                </div>
              </div>
              <Card.Title>HR Analytics </Card.Title>
              <Card.Subtitle>React TypeScript Axios</Card.Subtitle>
            </Card.Body>
          </Card> */}
        
          <Card style={{ minHeight: "244.2px" }}>
            <Card.Img variant="top" src={p1} />
            <Card.Body>
              <Card.Title>Chat messager</Card.Title>
              <Card.Subtitle>React Chakra UI Firebase </Card.Subtitle>
              <div className="icon-description">
                <div className="social-icons">
                  <div className="icon">
                    <a
                      href="https://github.com/Edyta2801/chat-react"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Link />
                    </a>
                  </div>
                  <div className="icon">
                    <a
                      href="https://chat-c3e05.web.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ZoomIn />
                    </a>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={p2} />
            <Card.Body>
              <Card.Title>JavaScript-blog</Card.Title>
              <Card.Subtitle>JavaScript Sass npm</Card.Subtitle>
              <div className="icon-description">
                <div className="social-icons">
                  <div className="icon">
                    <a
                      href="https://github.com/Edyta2801/javascript-blog"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Link />
                    </a>
                  </div>
                  <div className="icon">
                    <a
                      href="https://edyta2801.github.io/javascript-blog/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ZoomIn />
                    </a>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          
          <Card>
            <Card.Body>
              <div className="icon-description">
                <div className="social-icons">
                  <div className="icon">
                    <a
                      href="https://github.com/Edyta2801/superhero-search"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Link />
                    </a>
                  </div>
                  <div className="icon">
                    <a
                      href="https://superhero-search-app.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ZoomIn />
                    </a>
                  </div>
                </div>
              </div>
              <Card.Title>Superhero search app</Card.Title>
              <Card.Subtitle>React Axios DarkMode </Card.Subtitle>
            </Card.Body>
            <Card.Img variant="top" src={p4} />
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Moje Wydatki</Card.Title>
              <Card.Subtitle>React Google SpredSheets</Card.Subtitle>
              <div className="icon-description">
                <div className="social-icons">
                  <div className="icon">
                    <a
                      href="https://github.com/Edyta2801/React-App-and-Google-SpreadSheets"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Link />
                    </a>
                  </div>
                  <div className="icon">
                    <a
                      href="https://moje-wydatki.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ZoomIn />
                    </a>
                  </div>
                </div>
              </div>
            </Card.Body>
            <Card.Img variant="top" src={p3} />
          </Card>
          <Card>
            <Card.Body>
              <div className="icon-description">
                <div className="social-icons">
                  <div className="icon">
                    <a
                      href="https://github.com/Edyta2801/pizzeria-app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Link />
                    </a>
                  </div>
                  <div className="icon">
                    <a
                      href="https://project-restaurant-pizzeria.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ZoomIn />
                    </a>
                  </div>
                </div>
              </div>
              <Card.Title>Pizzeria App </Card.Title>
              <Card.Subtitle>JavaScript Sass API</Card.Subtitle>
            </Card.Body>
            <Card.Img variant="top" src={p6} />
          </Card>
          <Card>
            <Card.Img variant="top" src={p7} />
            <Card.Body>
              <div className="icon-description">
                <div className="social-icons">
                  <div className="icon">
                    <a
                      href="https://github.com/Edyta2801/travel-agency-version-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Link />
                    </a>
                  </div>
                  <div className="icon">
                    <a
                      href="https://travel-agency-v2-20258ec7b4b6.herokuapp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ZoomIn />
                    </a>
                  </div>
                  {/* <div className="icon">
                    <button
                      type="button"
                      onClick={() => this.setState({ isOpen: true })}
                    >
                      <ZoomIn />
                    </button>

                    {isOpen && (
                      <Lightbox
                        mainSrc={images6[photoIndex]}
                        nextSrc={images6[(photoIndex + 1) % images6.length]}
                        prevSrc={
                          images6[
                            (photoIndex + images6.length - 1) % images6.length
                          ]
                        }
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                          this.setState({
                            photoIndex:
                              (photoIndex + images6.length - 1) %
                              images6.length,
                          })
                        }
                        onMoveNextRequest={() =>
                          this.setState({
                            photoIndex: (photoIndex + 1) % images6.length,
                          })
                        }
                      />
                    )}
                  </div> */}
                </div>
              </div>
              <Card.Title>Travel Agency App </Card.Title>
              <Card.Subtitle>React Redux Sass API</Card.Subtitle>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={p8} style={{maxHeight:'155px'}}/>
            <Card.Body>
              <div className="icon-description">
                <div className="social-icons">
                  <div className="icon">
                    <a
                      href="https://github.com/Edyta2801/patronage_frontend_"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Link />
                    </a>
                  </div>
                  <div className="icon">
                    <a
                      href="https://patronage-frontend-eshop.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ZoomIn />
                    </a>
                  </div>
                </div>
              </div>
              <Card.Title>E-commerce</Card.Title>
              <Card.Subtitle>Next.js TypeScript Redux</Card.Subtitle>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={p9} />
            <Card.Body>
              <div className="icon-description">
                <div className="social-icons">
                  <div className="icon">
                    <a
                      href="https://github.com/Edyta2801/patronage22_lublin_js_cms_"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Link />
                    </a>
                  </div>
                  <div className="icon">
                    <a
                      href="https://patronage-cms.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ZoomIn />
                    </a>
                  </div>
                </div>
              </div>
              <Card.Title>CMS Panel</Card.Title>
              <Card.Subtitle>React TypeScript Redux</Card.Subtitle>
            </Card.Body>
          </Card>
        </CardColumns>
      </div>
    );
  }
}

export default Projects;
