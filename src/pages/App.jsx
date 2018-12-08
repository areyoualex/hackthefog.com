import React, {Component} from "react";
import {hot} from "react-hot-loader";
import "./App.scss";

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faInstagram } from '@fortawesome/free-solid-svg-icons'
// library.add(faInstagram)

import Front from "../components/Front";
import Section from "../components/Section";
import EmailForm from "../components/EmailForm";
import Footer from "../components/Footer";

class App extends Component{
  render(){
    return(
      <div className="App">
        <Front />
        <Section title="Hack the Fog in the Press">
        </Section>
        <Section title="Stay updated." >
          <p>
            Submit your email below and get email updates when applications open in 2019.
          </p>
          <EmailForm />
          <p>
            Don't check your emails? Follow us on social media!
          </p>
          <div className="social-buttons">
          </div>
        </Section>
        <Footer />
      </div>
    );
  }
}

export default hot(module)(App);
