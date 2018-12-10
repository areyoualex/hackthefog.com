import React, {Component} from "react";
import {hot} from "react-hot-loader";
import "./App.scss";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faEnvelope);

import Front from "../components/Front";
import Section from "../components/Section";
import EmailForm from "../components/EmailForm";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Article from "../components/Article";

import sfchronicle from "../img/sfchronicle.jpg";

class App extends Component{
  constructor() {
    super();
    this.state = {footerHeight: 0};
    this.updateFooterHeight = this.updateFooterHeight.bind(this);
  }
  updateFooterHeight(height) {
    this.setState({footerHeight: height});
  }
  render(){
    return(
      <div className="App" style={{paddingBottom:this.state.footerHeight}}>
        <Front />
        <Section title="Hack the Fog in the Press">
          <Article
            href="https://www.sfchronicle.com/bayarea/article/Hack-the-Fog-makes-history-as-San-12729895.php"
            title="'Hack the Fog' makes history as San Francisco’s first high school hackathon"
            date="March 5, 2018"
            shortlink="sfchronicle.com"
            imgSrc={sfchronicle}
            />
        </Section>
        <Section title="Stay updated.">
          <p>
            Submit your email below and get email updates when applications open in 2019.
          </p>
          <EmailForm />
          <p>
            Don't check your emails? Follow us on social media!
          </p>
          <div className="social-buttons">
            <Button href="https://www.instagram.com/hackthefog/">
              <FontAwesomeIcon icon={['fab','instagram']} />
              <span>INSTAGRAM</span>
            </Button>
            <Button href="https://www.twitter.com/hackthefog/">
              <FontAwesomeIcon icon={['fab','twitter']} />
              <span>TWITTER</span>
            </Button>
            <Button href="https://www.facebook.com/hackthefog/">
              <FontAwesomeIcon icon={['fab','facebook']} />
              <span>FACEBOOK</span>
            </Button>
          </div>
        </Section>
        {/**
          <Section title="Past Sponsors">
          </Section>
        */}
        <Footer updateReceiver={this.updateFooterHeight} />
      </div>
    );
  }
}

export default hot(module)(App);
