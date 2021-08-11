import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import './Contact.css';

class Contact extends Component {
  render(){
    return (
      <div id="contact">
        <h2>Contact Me</h2>
        <div className="contact-details">
          <div>
            <Icon name='mail' size="big" />
            <p className="contact-text">xhantisingatha@gmail.com</p>
          </div>
          <div>
            <Icon name='phone' size="big" />
            <p className="contact-text">079 915 5081</p>
          </div>
          <div>
            <Icon name='linkedin' size="big" />
            <a className="contact-link" href='https://www.linkedin.com/in/xhanti-singatha-70555a127/' target="_blank" rel="noreferrer">linkedin</a>
          </div>
          <div>
            <Icon name='github' size="big" />
            <a className="contact-link" href='https://github.com/Singatha' target="_blank" rel="noreferrer">github</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
