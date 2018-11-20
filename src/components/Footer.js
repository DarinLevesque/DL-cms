import React from "react";
import Link from "gatsby-link";
import Obfuscate from 'react-obfuscate'
import {OutboundLink} from "gatsby-plugin-google-analytics";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
          <nav className="level is-mobile">
            <div className="level-item has-text-centered">
              <span className="icon is-medium">
                <OutboundLink href="https://facebook.com/darinlevesque">
                  <i className="fab fa-lg fa-facebook"/>
                </OutboundLink>
              </span>
            </div>
            <div className="level-item has-text-centered">
              <span className="icon is-medium">
                <OutboundLink href="https://www.twitter.com/darinlevesque">
                  <i className="fab fa-lg fa-twitter"/>
                </OutboundLink>
              </span>
            </div>
            <div className="level-item has-text-centered">
              <span className="icon is-medium">
                <OutboundLink href="https://www.linkedin.com/in/darinlevesque/">
                  <i className="fab fa-lg fa-linkedin"/>
                </OutboundLink>
              </span>
            </div>
            <div className="level-item has-text-centered">
              <span className="icon is-medium">
                <OutboundLink href="https://github.com/DarinLevesque">
                  <i className="fab fa-lg fa-github"/>
                </OutboundLink>
              </span>
            </div>
          </nav>
          <hr/>
          <div className="columns is-mobile">
            <div className="column is-one-third">
              <p>Contact Me...</p>
              <br/>
              <OutboundLink href='https://ko-fi.com/E1E4LU0A' target='_blank'>
                <img height='36'
                  style='border:0px;height:36px;' 
                  src='https://az743702.vo.msecnd.net/cdn/kofi4.png?v=0'
                  border='0'
                  alt='Buy Me a Coffee' />
              </OutboundLink>
              <br/>          
              <OutboundLink href="https://bulma.io">
                <img
                  src="https://bulma.io/images/made-with-bulma--dark.png"
                  alt="Made with Bulma"
                  width="128"
                  height="24"/>
              </OutboundLink>
             </div>
            <div className="column is-one-third has-text-centered">
              <p>
                <strong>Digital Resume</strong>
                {" "}by{" "}
                <Link to="/">Darin Levesque</Link>. The source code is licensed{" "}
                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.<br/>
              </p>
              <div className="is-hidden-mobile">
                <p>
                  <OutboundLink rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                    <img
                      alt="Creative Commons License"
                      style={{
                      borderWidth: 0
                    }}
                      src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png"/>
                  </OutboundLink>
                  <br/>This work is licensed under a{" "}
                  <OutboundLink rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                    Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
                  </OutboundLink>.
                </p>
              </div>
            </div>
            <div className="column is-one-third">
              <address className="vcard">
                <div className="adr">
                  <div className="street-address"></div>
                  <div className="locality">California, Maryland</div >
                  <div className="postal-code">20619</div >
                  <div className="country-name">United States</div >
                </div>
                <div className="tel">Tel:
                  <Obfuscate tel="603-326-8667"/>
                </div>
              </address>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
