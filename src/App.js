import React from 'react';
import Button from 'react-bootstrap/Button'
import { Row, Col, Container } from 'react-bootstrap';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DonateUs from './components/DonateUs/DonateUs';
import Shareyourstory from './components/Shareyourstory/Shareyourstory';
import HomePage from './components/HomePage/HomePage';
import { Route, Link, Switch } from 'react-router-dom';
import Register from './components/Register/Register';
import NavbarComponent from './components/Navbar/Navbar';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


function App() {
  const classes = useStyles();
  return (
    // <div className="main" id="grad">
    //   <div className="App" >
    //     <form noValidate autoComplete="off">
    //       <div>
    //         <h1 className="mainheader">Sign Up for HappyPaws</h1>
    //         <h6 className="custom-h6">Already have an HappyPaws account? <a href="/">Log in</a></h6>
    //         <Container>
    //           <Row>
    //             <Col>
    //               <div>
    //                 <div className="custom-class"><TextField className="input-class" id="standard-basic" label="Name" /></div>
    //                 <div className="custom-class"><TextField className="input-class" id="standard-basic" label="Email" /></div>
    //                 <div className="custom-class"><TextField className="input-class" id="standard-basic" label="Password" /></div>
    //                 <div className="custom-class"><TextField className="input-class" id="standard-basic" label="Confirm Password" /></div>
    //               </div>
    //               <div className="button-class">
    //                 <Button variant="primary" size="lg" active>
    //                 Sign Up
    //                 </Button>{' '}
    //               </div>
    //             </Col>
    //             <div class="vl"></div>
    //             <Col >
    //               <div className="vertical-align">
    //                 <div className="button-class">
    //                   <FacebookLoginButton onClick={() => alert("Under Construction")} />
    //                 </div>
    //                 <div className="button-class">
    //                   <GoogleLoginButton onClick={() => alert("Under Construction")} />
    //                 </div>
    //               </div>
    //             </Col>
    //           </Row>
    //         </Container>
    //       </div>
    //     </form>
    //   </div>
    // </div>

    //<DonateUs />
    //<Register />
    <div>
      {/* <NavbarComponent /> */}
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/donation" exact component={DonateUs} />
        <Route path="/share" exact component={Shareyourstory} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </div>
    //  <Shareyourstory/>
    //<HomePage />

  );
}

export default App;
