// Dummy content is referred from https://www.lipsum.com/
import React, { Component, useRef } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../../App.css';
import './Shareyourstory.css';
import TextField from '@material-ui/core/TextField';
import Jodit from './Jodit';
import Button from 'react-bootstrap/Button'
import NavbarComponent from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

class Shareyourstory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null,
            email: '',
            email_error_text: null,
            disabled: true,
            counter: 'Your Story',
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }

    validateEmail = (email) => {
        return new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email);
    }

    isDisabled = () => {
        let emailIsValid = false;
        let jodit = this.state.counter !== '';

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
        debugger;
        if (emailIsValid && jodit) {
            this.setState({
                disabled: false
            });
        }
    }


    changeValue = (e, type) => {
        const value = e.target.value;
        const nextState = {};
        nextState[type] = value;
        this.setState(nextState);
    }

    update=(value)=>{
        return () => {
           this.setState({
             counter: value
           });
        }
      }
    

    render() {
        return (
            <div>
                <NavbarComponent />
                <div className="main-class">
                    <form >
                        <h1 className="header-style">Share Your Story</h1>
                        <p> Your experience is very precious and would motivate many others.</p>
                        <Container>
                            <Row>
                                <Col>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </Col>
                            </Row>
                        </Container>
                        <p>Provide us your email ID for subscriptions to read every new story posted!</p>
                        <Container>
                            <Row>
                                <Col>
                                    <div style={{ marginBottom: "20px" }}>
                                        <TextField className="input-class" id="standard-basic" label="Enter your Email"
                                            floatinglabeltext="Email"
                                            type="email"
                                            error={this.state.email_error_text !== null}
                                            helperText={this.state.email_error_text}
                                            onChange={e => this.changeValue(e, 'email')}
                                            id="standard-basic" label="Email"
                                            onBlur={this.isDisabled} required />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <div className="editor-style">
                            <Jodit data={this.update.bind(this)}/>
                        </div>
                        <div className="button-style">
                            <Link to="/"> <Button disabled={this.state.disabled} type="submit" size="lg" variant="outline-primary">Submit</Button>{' '}</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Shareyourstory;