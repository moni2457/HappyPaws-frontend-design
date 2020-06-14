import React, { Component } from 'react';
import './DonateUs.css';
import Button from 'react-bootstrap/Button';
import { Row, Col, Container } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
// import '../../App.css';
import Carousel from 'react-bootstrap/Carousel';
import PetsIcon from '@material-ui/icons/Pets';
import  NavbarComponent  from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

class DonateUs extends Component {
    state = {
        subscription: 'One Time',
        activeFirstbtn: false,
        activeSecondbtn: true,
        name: '',
        email: '',
        cardHolderName: '',
        amount: 0,
        cardNumber: 0,
        captcha: '',
        name_error_text: null,
        email_error_text: null,
        cardHolderName_error_text: null,
        amount_error_text: null,
        cardNumber_error_text: null,
        captcha_error_text: null,
        disabled: true,
        amountTextVisisble: false
    }

    monthlyClick = () => {
        this.setState({ subscription: 'Monthly', activeFirstbtn: true, activeSecondbtn: false })
    }

    onAmountClick = (e, amount) => {
        if (amount > 0) {
            this.setState({
                amount: amount,
                amountTextVisisble: false
            })
        }
        if (amount === 0) {
            this.setState({
                amountTextVisisble: true
            })
        }
    }

    onSubmit = () => {

    }

    onetimeClick = () => {
        this.setState({ subscription: 'One Time', activeFirstbtn: false, activeSecondbtn: true })
    }

    isDisabled = () => {
        let nameIsValid = false;
        let emailIsValid = false;
        let hasAmount = false;
        let cardNameValid = false;
        let cardNumberValid = false;
        let captchaValid = false;

        if (this.state.name === '' || !this.state.name) {
            nameIsValid = false;
            this.setState({
                name_error_text: null
            });
        } else {
            if (this.state.name !== '') {
                nameIsValid = true
                this.setState({
                    name_error_text: null
                });
            }

        }
        if (this.state.cardHolderName === '' || !this.state.cardHolderName) {
            cardNameValid = false;
            this.setState({
                cardHolderName_error_text: null
            });
        } else {
            if (this.state.cardHolderName !== '') {
                cardNameValid = true
                this.setState({
                    cardHolderName_error_text: null
                });
            }

        }

        if (this.state.email === "") {
            this.setState({
                email_error_text: null
            });
        } else {
            if (this.validateEmail(this.state.email)) {
                emailIsValid = true
                this.setState({
                    email_error_text: null
                });
            } else {
                this.setState({
                    email_error_text: "Please enter valid email!"
                });
            }
        }

        if (this.state.captcha === "" || !this.state.captcha) {
            this.setState({
                captcha_error_text: null
            });
        } else {
            if (this.state.captcha === 'qGphJD') {
                captchaValid = true;
                this.setState({
                    captcha_error_text: null
                });
            } else if (this.state.captcha !== 'qGphJD') {
                this.setState({
                    captcha_error_text: "Your captcha is incorrect."
                });
            } else {
                this.setState({
                    captcha_error_text: "Please enter captcha"
                });
            }
        }
        if (this.state.cardNumber === 0 || this.state.captcha === null) {
            this.setState({
                cardNumber_error_text: null
            });
        } else {

            if (this.cardNumberValidate(this.state.cardNumber)) {
                cardNumberValid = true;
                this.setState({
                    cardNumber_error_text: null
                });
            } else if (!(this.cardNumberValidate(this.state.cardNumber))) {
                this.setState({
                    cardNumber_error_text: "Card Number must have 13-16 digits."
                });
            } else {
                this.setState({
                    cardNumber_error_text: "Please enter Card Number"
                });
            }
        }
        if (this.state.amount === 0 || this.state.amount === null) {
            this.setState({
                amount_error_text: null
            });
        } else {
            if (this.state.amount > 0) {
                hasAmount = true;
                this.setState({
                    amount_error_text: null
                });
            } else {
                this.setState({
                    amount_error_text: "Please enter Amount"
                });
            }
        }

        if (emailIsValid && captchaValid && hasAmount && cardNameValid && cardNumberValid) {
            if (this.state.name === '') {
                this.setState({
                    name_error_text: "Please enter name"
                });

            } else if (emailIsValid && nameIsValid && hasAmount && cardNumberValid && captchaValid) {
                if (this.state.cardHolderName === '') {
                    this.setState({
                        name_error_text: "Please enter card holder name"
                    });
                }
                else if (emailIsValid && nameIsValid && hasAmount && cardNameValid && cardNumberValid && captchaValid) {
                    this.setState({
                        disabled: false
                    });
                }
            }
        }
    }

    validateEmail = (email) => {
        return new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email);

    }
    amountChange = (event) => {
        this.setState({
            amount: event.target.value
        })
    }
    changeValue = (e, type) => {
        const value = e.target.value;
        const nextState = {};
        nextState[type] = value;
        this.setState(nextState);
    }

    cardNumberValidate = (cardNumber) => {
        return new RegExp(/^[1-9][0-9]{12,15}$/).test(cardNumber);
    }

    render() {
        return (
            <div>
            <NavbarComponent />
            <div className="donateUs">
                <form onSubmit={this.onSubmit}>
                    <h1><PetsIcon style={{ fontSize: 40, marginBottom: 10, marginRight: 5 }} />Donate Us</h1>
                    <h4> We need your help because every pet deserves care</h4>
                    <div>
                        <Container>
                            <Row>
                                <Col className="box-style" xs={12} sm={12} md={12} lg={12}>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src="https://s3-us-west-1.amazonaws.com/breederretriever/uploads/breeds/images/photopost/536/iStock_000001285472Small.jpg"
                                                alt="First slide"
                                                width="100%"
                                                height="350px"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src="https://i.ytimg.com/vi/kEtCPKjWpgQ/maxresdefault.jpg"
                                                alt="Third slide"
                                                width="100%"
                                                height="350px"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src="https://cdn.dribbble.com/users/1786581/screenshots/6523562/untitled-1.png"
                                                alt="Third slide"
                                                width="100%"
                                                height="350px"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12}>
                                    <div className="fonts-class">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the indused in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                           </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div>
                        <Button active={this.state.activeFirstbtn} onClick={this.monthlyClick} className="button-css" size="lg" variant="outline-primary">Monthly</Button>{' '}
                        <Button active={this.state.activeSecondbtn} onClick={this.onetimeClick} className="button-css" size="lg" variant="outline-primary">One Time</Button>{' '}
                    </div>
                    <div>
                        <h4>{this.state.subscription === "Monthly" ? "Monthly subscription" : "One Time Payment"}</h4>
                    </div>
                    <Container>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={6}>
                                <h4>Your Details</h4>
                                <div className="border-right-here">
                                    <div className="custom-class">

                                        <TextField className="input-class"
                                            id="standard-basic"
                                            floatinglabeltext="Name"
                                            type="text"
                                            error={this.state.name_error_text !== null}
                                            helperText={this.state.name_error_text}
                                            onChange={e => this.changeValue(e, 'name')}
                                            id="standard-basic" required label="Name"
                                            onBlur={this.isDisabled}
                                            required label="Name" />
                                    </div>
                                    <div className="custom-class">
                                        <TextField className="input-class"
                                            id="standard-basic"
                                            floatinglabeltext="Email"
                                            type="email"
                                            error={this.state.email_error_text !== null}
                                            helperText={this.state.email_error_text}
                                            onChange={e => this.changeValue(e, 'email')}
                                            id="standard-basic" required label="Email"
                                            onBlur={this.isDisabled}
                                            required label="Email" /></div>
                               <div>
                                        <TextField className="input-class"
                                            id="standard-basic"
                                            floatinglabeltext="Amount"
                                            type="number"
                                            error={this.state.amount_error_text !== null}
                                            helperText={this.state.amount_error_text}
                                            onChange={e => this.changeValue(e, 'amount')}
                                            required label="Amount"
                                            onBlur={this.isDisabled}
                                            required label="Amount" />
                                    </div>
                                </div>
                            </Col>
                            
                            <Col xs={12} sm={12} md={6} lg={6}>
                                <h4>Card Details</h4>
                                <div>
                                    <div className="custom-class">
                                        <TextField className="input-class"
                                            id="standard-basic"
                                            floatinglabeltext="cardHolderName"
                                            type="text"
                                            error={this.state.cardHolderName_error_text !== null}
                                            helperText={this.state.cardHolderName_error_text}
                                            onChange={e => this.changeValue(e, 'cardHolderName')}
                                            required label="CardHolderName"
                                            onBlur={this.isDisabled}
                                            required label="CardHolderName" />
                                    </div>
                                    <div className="custom-class">
                                        <TextField className="input-class"
                                            id="standard-basic"
                                            floatinglabeltext="cardNumber"
                                            type="number"
                                            error={this.state.cardNumber_error_text !== null}
                                            helperText={this.state.cardNumber_error_text}
                                            onChange={e => this.changeValue(e, 'cardNumber')}
                                            required label="CardNumber"
                                            onBlur={this.isDisabled}
                                            required label="cardNumber" /></div>
                                    <div className="custom-class"><TextField className="input-class" id="standard-basic" label="ZipCode" /></div>
                                    <div >

                                        </div><img className="captcha-css" src="https://www.pandasecurity.com/mediacenter/src/uploads/2014/09/avoid-captcha.jpg" height="75px" width="75px"></img>
                                </div>
                                <div>
                                <TextField className="input-class"
                                            id="standard-basic"
                                            floatinglabeltext="Captcha"
                                            type="text"
                                            error={this.state.captcha_error_text !== null}
                                            helperText={this.state.captcha_error_text}
                                            onChange={e => this.changeValue(e, 'captcha')}
                                            id="standard-basic" required label="Captcha"
                                            onBlur={this.isDisabled}
                                            required label="Captcha" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                <div>
                <Link to="/"><Button type="submit"
                        onChange={e => this.changeValue(e, 'captcha')}
                        onBlur={this.isDisabled} disabled={this.state.disabled} className="button-css" variant="outline-primary" size="lg">Donate</Button>{' '}</Link></div>
                </form>
            </div >
            </div>
        );
    }

}
export default DonateUs;