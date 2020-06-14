import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Form, Button } from 'react-bootstrap';
import { Row, Col, Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './HomePage.css';
import NavbarComponent from '../Navbar/Navbar';

class HomePage extends Component {
    render() {
        return (
            <div className="home-component">
                 <NavbarComponent />
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://s3-us-west-1.amazonaws.com/breederretriever/uploads/breeds/images/photopost/536/iStock_000001285472Small.jpg"
                            alt="First slide"
                            width="100%"
                            height="375px"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ytimg.com/vi/kEtCPKjWpgQ/maxresdefault.jpg"
                            alt="Third slide"
                            width="100%"
                            height="375px"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.witsend4pets.co.uk/blog/wp-content/uploads/2016/05/Dog-playing-with-ball.jpg"
                            alt="Third slide"
                            width="100%"
                            height="375px"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div>
                    
                </div>
                <h4 className="font-style-class">Pet Description</h4>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <div className="font-class">
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        </div>
                        </Col>
                    </Row>
                </Container>
                <div>
                </div>
                <div className="btn-center">
                    <button className="btn-css" onClick={() => alert("Under Construction")} > Take a Quiz</button>
                </div>
                {/* <Button variant="outline-primary" size="lg"> Take a Quiz </Button>{' '} */}
                <h4 className="font-style-class">Pets available for adoption near your location</h4>
                <Container >
                    <Row>
                        <Col xs={4.5} sm={6} md={6} lg={3}>
                            <div style={{ cursor: "pointer" }} onClick={() => alert("Under Construction")} className="img-pets">
                                <img height="250px" width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnK_EdyQSbwU3PeuNpG9Dl9cM6BwKTh0zDaXablw8ebRIObku-&usqp=CAU"></img>
                                <p>Polo, Darmouth</p>
                            </div>
                        </Col>
                        <Col xs={4.5} sm={6} md={6} lg={3}>
                            <div style={{ cursor: "pointer" }} onClick={() => alert("Under Construction")} className="img-pets">
                                <img height="250px" width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCE7gS5k-2yoa0IOEybqxlH6SE11P-5bHMFEQ-LIgvjlVlnZfG&usqp=CAU"></img>
                                <p>Cashew, Clayton Park</p>
                            </div>
                        </Col>
                        <Col xs={4.5} sm={6} md={6} lg={3}>
                            <div style={{ cursor: "pointer" }} onClick={() => alert("Under Construction")}  className="img-pets">
                                <img height="250px" width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0Zd-mqpAqdUkccYP0_f6ZW2IFhTHxnYQp4gzu7h8NkteaZhlO&usqp=CAU"></img>
                                <p>Mixy, Spring Garden</p>
                            </div></Col>
                        <Col xs={4.5} sm={6} md={6} lg={3}>
                            <div style={{ cursor: "pointer" }} onClick={() => alert("Under Construction")} className="img-pets">
                                <img height="250px" width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTbEitL08lRED-TOWLeoeK-KcXcaav_TRVxRDrm1R8tKl2OnLV&usqp=CAU"></img>
                                <p>Trixy, Lower Sackville</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <h4 className="font-style-class"> Read our stories of happy customers</h4>
                <Container>
                    <Row >
                        <Col xs={9} sm={9} md={6} lg={6}>
                            <div style={{ cursor: "pointer" }} onClick={() => alert("Under Construction")} className="img-view">
                                <img src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12202308/happy-high-five-lab.jpg" height="250px" width="100%"></img>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. </p>
                            </div>
                        </Col>
                        <Col xs={9} sm={9} md={6} lg={6}>
                            <div style={{ cursor: "pointer" }} onClick={() => alert("Under Construction")} className="img-view">
                                <img src="https://athenaspets.com/wp-content/uploads/2019/12/Happy-Dog-Owner-with-Lab.jpg" height="250px" width="100%"></img>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-style">
                    <h4 className="font-style-class">Get your new friend today</h4>
                    <Container>
                        <Row>
                            <Col xs={9} sm={6} md ={4} lg={4}>
                                <div className="connect-style">
                                    Pet Adoption FAQS
                                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4DjlGu1wqimqHhR_CmFk8m5SQOC2oreUJwjFSwKXoccx-dtMq&usqp=CAU" width="100%" height="100px"></img>
                           Have a question? Get answers to questions over here..
                           <div><Button variant="outline-primary" onClick={() => alert("Under Construction")} >FAQs</Button>{' '}</div>
                                </div>
                            </Col>
                            <Col xs={9} sm={6} md ={4} lg={4}>
                                <div className="connect-style">
                                    Contact Us
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7CccpJ2BDElBYwWaKWShnF8orL3LMPN7lq47mKR3Xz3MnzkUC&usqp=CAU" width="100%" height="100px"></img>

                          Want to contact us? Details for contacting us are mentioned in Contact Us.
                          <div><Button variant="outline-primary" onClick={() => alert("Under Construction")} >Contact Us</Button>{' '}</div>
                                </div>
                            </Col>
                            <Col xs={9} sm={6} md ={4} lg={4}>
                                <div className="connect-style">
                                    About Us
                                    <img src="https://adr.sd33.bc.ca/sites/adr.sd33.bc.ca/files/2019-01/About%20Us.jpg" width="100%" height="100px"></img>
                                Want to know more about us? Visit your About Us page to know our details.
                            <div><Button variant="outline-primary" onClick={() => alert("Under Construction")} >About Us</Button>{' '}</div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </div>
        );

    }

}

export default HomePage;