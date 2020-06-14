import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { Row, Col, Container } from 'react-bootstrap';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import TextField from '@material-ui/core/TextField';
import './Register.css';
import { useHistory } from "react-router-dom";
import PetsIcon from '@material-ui/icons/Pets';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';

class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        name_error_text: null,
        email_error_text: null,
        password_error_text: null,
        disabled: true,

    }

    isDisabled = () => {
        let nameIsValid = false;
        let emailIsValid = false;
        let passwordIsValid = false;

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

        if (this.state.password === "" || !this.state.password) {
            this.setState({
                password_error_text: null
            });
        } else {
            if (this.state.password.length >= 6) {
                passwordIsValid = true;
                this.setState({
                    password_error_text: null
                });
            } else {
                this.setState({
                    password_error_text: "Your password must be at least 6 characters"
                });
            }
        }

        if (emailIsValid && passwordIsValid) {
            if (this.state.name === '') {
                this.setState({
                    name_error_text: "Please enter name"
                });
            } else if (emailIsValid && nameIsValid && passwordIsValid) {
                this.setState({
                    disabled: false
                });
            }

        }
    }
    validateEmail = (email) => {
        return new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email);

    }

    changeValue = (e, type) => {
        const value = e.target.value;
        const nextState = {};
        nextState[type] = value;
        this.setState(nextState);
    }

    onSubmit = () => {
        const history = useHistory();
        history.push('/');
    }

    render() {
        return (
            <div className="main">
                <div className="App">
                    <form onSubmit={this.onSubmit} >
                        <div>
                            <Link to="/"><CloseIcon style={{ float: "right", marginRight: "20px" }} fontSize="large"></CloseIcon></Link>
                            <h2 className="mainheader"><PetsIcon fontSize="large" />HappyPaws</h2>
                            <h6 className="custom-h6">Already have an HappyPaws account? <a href="#login">Log in</a></h6>

                            <Container>
                                <Row>
                                    <Col>
                                        <div>
                                            <div className="custom-class">
                                                <TextField className="input-class"
                                                    id="standard-basic"
                                                    floatinglabeltext="Name"
                                                    type="text"
                                                    error={this.state.name_error_text !== null}
                                                    helperText={this.state.name_error_text}
                                                    onChange={e => this.changeValue(e, 'name')}
                                                    id="standard-basic" required label="Email"
                                                    onBlur={this.isDisabled}
                                                    required label="Name" /></div>
                                            <div className="custom-class">
                                                <TextField className="input-class"
                                                    floatinglabeltext="Email"
                                                    type="email"
                                                    error={this.state.email_error_text !== null}
                                                    helperText={this.state.email_error_text}
                                                    onChange={e => this.changeValue(e, 'email')}
                                                    id="standard-basic" required label="Email"
                                                    onBlur={this.isDisabled} />
                                            </div>
                                            <div className="custom-class">
                                                <TextField className="input-class"
                                                    floatinglabeltext="Password"
                                                    type="password"
                                                    error={this.state.password_error_text !== null}
                                                    helperText={this.state.password_error_text}
                                                    onChange={e => this.changeValue(e, 'password')}
                                                    id="standard-basic" required label="Password"
                                                    onBlur={this.isDisabled} /></div>
                                        </div>
                                        <div className="button-class">
                                            <Link to="/"> <Button disabled={this.state.disabled} variant="primary" size="lg" active>
                                                Sign Up
                    </Button>{' '}</Link>
                                        </div>
                                        <div className="btn-width">
                                            <div className="button-class">
                                                <FacebookLoginButton onClick={() => alert("Under Construction")} />
                                            </div>
                                            <div className="button-class">
                                                <GoogleLoginButton onClick={() => alert("Under Construction")} />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;