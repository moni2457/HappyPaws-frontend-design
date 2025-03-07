// Dummy content is referred from https://www.lipsum.com/
import React, { Component } from 'react';
import './DonateUs.css';
import Button from 'react-bootstrap/Button';
import { Row, Col, Container } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import Carousel from 'react-bootstrap/Carousel';
import PetsIcon from '@material-ui/icons/Pets';
import NavbarComponent from '../Navbar/Navbar';
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
        nameError: null,
        emailError: null,
        cardHolderNameError: null,
        amountError: null,
        cardNumberError: null,
        captchaError: null,
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

    isSubmitDisabled = () => {
        let nameIsRequired = false;
        let validEmail = false;
        let hasAmount = false;
        let cardNameValid = false;
        let cardNumberValid = false;
        let captchaValid = false;

        if (this.state.name === '' || !this.state.name) {
            nameIsRequired = false;
            this.setState({
                nameError: null
            });
        } else {
            if (this.state.name !== '') {
                nameIsRequired = true
                this.setState({
                    nameError: null
                });
            }

        }
        if (this.state.cardHolderName === '' || !this.state.cardHolderName) {
            cardNameValid = false;
            this.setState({
                cardHolderNameError: null
            });
        } else {
            if (this.state.cardHolderName !== '') {
                cardNameValid = true
                this.setState({
                    cardHolderNameError: null
                });
            }
        }

        if (this.state.email === "") {
            this.setState({
                emailError: null
            });
        } else {
            if (this.validateEmail(this.state.email)) {
                validEmail = true
                this.setState({
                    emailError: null
                });
            } else {
                this.setState({
                    emailError: "Please enter valid email!"
                });
            }
        }

        if (this.state.captcha === "" || !this.state.captcha) {
            this.setState({
                captchaError: null
            });
        } else {
            if (this.state.captcha === 'qGphJD') {
                captchaValid = true;
                this.setState({
                    captchaError: null
                });
            } else if (this.state.captcha !== 'qGphJD') {
                this.setState({
                    captchaError: "Your captcha is incorrect."
                });
            } else {
                this.setState({
                    captchaError: "Please enter captcha"
                });
            }
        }
        if (this.state.cardNumber === 0 || this.state.captcha === null) {
            this.setState({
                cardNumberError: null
            });
        } else {

            if (this.cardNumberValidate(this.state.cardNumber)) {
                cardNumberValid = true;
                this.setState({
                    cardNumberError: null
                });
            } else if (!(this.cardNumberValidate(this.state.cardNumber))) {
                this.setState({
                    cardNumberError: "Card Number must have 13-16 digits."
                });
            } else {
                this.setState({
                    cardNumberError: "Please enter Card Number"
                });
            }
        }
        if (this.state.amount === 0 || this.state.amount === null) {
            this.setState({
                amountError: null
            });
        } else {
            if (this.state.amount > 0) {
                hasAmount = true;
                this.setState({
                    amountError: null
                });
            } else {
                this.setState({
                    amountError: "Please enter Amount"
                });
            }
        }

        if (validEmail && captchaValid && hasAmount && cardNameValid && cardNumberValid) {
            if (this.state.name === '') {
                this.setState({
                    nameError: "Please enter name"
                });

            } else if (validEmail && nameIsRequired && hasAmount && cardNumberValid && captchaValid) {
                if (this.state.cardHolderName === '') {
                    this.setState({
                        nameError: "Please enter card holder name"
                    });
                }
                else if (validEmail && nameIsRequired && hasAmount && cardNameValid && cardNumberValid && captchaValid) {
                    this.setState({
                        disabled: false
                    });
                }
            }
        }
    }
    // Regex referred from  https://stackoverflow.com/questions/940577/javascript-regular-expression-email-validation
    validateEmail = (email) => {
        return new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email);

    }
    amountChange = (event) => {
        this.setState({
            amount: event.target.value
        })
    }

    onValueChange = (e, label) => {
        const nextState = {};
        nextState[label] = e.target.value;;
        this.setState(nextState);
    }

    // Regex referred from https://stackoverflow.com/questions/19410950/regex-to-match-10-15-digit-number 
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
                                                    src="https://storage.needpix.com/rsynced_images/dogs-4137678_1280.jpg"
                                                    alt="First slide"
                                                    width="100%"
                                                    height="350px"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src="https://storage.needpix.com/rsynced_images/cat-4262034_1280.jpg"
                                                    alt="Second slide"
                                                    width="100%"
                                                    height="350px"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src="https://www.hertsforlearning.co.uk/sites/default/files/images/blog/DOG%20PIC%201.jpg"
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
                                                error={this.state.nameError !== null}
                                                helperText={this.state.nameError}
                                                onChange={e => this.onValueChange(e, 'name')}
                                                id="standard-basic" required label="Name"
                                                onBlur={this.isSubmitDisabled}
                                                required label="Name" />
                                        </div>
                                        <div className="custom-class">
                                            <TextField className="input-class"
                                                id="standard-basic"
                                                floatinglabeltext="Email"
                                                type="email"
                                                error={this.state.emailError !== null}
                                                helperText={this.state.emailError}
                                                onChange={e => this.onValueChange(e, 'email')}
                                                id="standard-basic" required label="Email"
                                                onBlur={this.isSubmitDisabled}
                                                required label="Email" /></div>
                                        <div>
                                            <TextField className="input-class"
                                                id="standard-basic"
                                                floatinglabeltext="Amount"
                                                type="number"
                                                error={this.state.amountError !== null}
                                                helperText={this.state.amountError}
                                                onChange={e => this.onValueChange(e, 'amount')}
                                                required label="Amount"
                                                onBlur={this.isSubmitDisabled}
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
                                                error={this.state.cardHolderNameError !== null}
                                                helperText={this.state.cardHolderNameError}
                                                onChange={e => this.onValueChange(e, 'cardHolderName')}
                                                required label="CardHolderName"
                                                onBlur={this.isSubmitDisabled}
                                                required label="CardHolderName" />
                                        </div>
                                        <div className="custom-class">
                                            <TextField className="input-class"
                                                id="standard-basic"
                                                floatinglabeltext="cardNumber"
                                                type="number"
                                                error={this.state.cardNumberError !== null}
                                                helperText={this.state.cardNumberError}
                                                onChange={e => this.onValueChange(e, 'cardNumber')}
                                                required label="CardNumber"
                                                onBlur={this.isSubmitDisabled}
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
                                            error={this.state.captchaError !== null}
                                            helperText={this.state.captchaError}
                                            onChange={e => this.onValueChange(e, 'captcha')}
                                            id="standard-basic" required label="Captcha"
                                            onBlur={this.isSubmitDisabled}
                                            required label="Captcha" />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <div>
                            <Link to="/"><Button type="submit"
                                onChange={e => this.onValueChange(e, 'captcha')}
                                disabled={this.state.disabled} className="button-css" variant="outline-primary" size="lg">Donate</Button>{' '}</Link></div>
                    </form>
                </div >
            </div>
        );
    }

}
export default DonateUs;