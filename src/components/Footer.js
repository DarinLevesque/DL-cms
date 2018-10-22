import React from "react";
import Link from "gatsby-link";
import Obfuscate from 'react-obfuscate'
import { OutboundLink } from "gatsby-plugin-google-analytics";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
          <nav className="level is-mobile">
            <div className="level-item has-text-centered">
              <span className="icon is-medium">
                <OutboundLink href="https://facebook.com/darinlevesque">
                  <i className="fab fa-lg fa-facebook" />
                </OutboundLink>
              </span>
            </div>
            <div className="level-item has-text-centered">
              <span className="icon is-medium">
                <OutboundLink href="https://www.twitter.com/darinlevesque">
                  <i className="fab fa-lg fa-twitter" />
                </OutboundLink>
              </span>
            </div>
            <div className="level-item has-text-centered">
              <span className="icon is-medium">
                <OutboundLink href="https://www.linkedin.com/in/darinlevesque/">
                  <i className="fab fa-lg fa-linkedin" />
                </OutboundLink>
              </span>
            </div>
            <div className="level-item has-text-centered">
              <span className="icon is-medium">
                <OutboundLink href="https://github.com/DarinLevesque">
                  <i className="fab fa-lg fa-github" />
                </OutboundLink>
              </span>
            </div>
          </nav>
          <hr />
          <div className="columns is-mobile">
            <div className="column is-one-third">Contact Me...</div>
            <div className="column is-one-third">
              <address class="vcard">
                <div class="adr">
                  <div class="street-address"></div>
                  <div class="locality">California, Maryland</div >
                  <div class="postal-code">20619</div >
                  <div class="country-name">United States</div >
                </div>
                <div class="tel">Tel: <Obfuscate tel="603-326-8667" /></div>
              </address>
            </div>
            <div className="column is-one-third has-text-centered">
              <p>
                <strong>Digital Resume</strong> by{" "}
                <Link to="/">Darin Levesque</Link>. The source code is licensed{" "}
                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.<br />
              </p>
              <div className="is-hidden-mobile">
                <p>
                  <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                    <img
                      alt="Creative Commons License"
                      style={{
                        borderWidth: 0
                      }}
                      src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" />
                  </a>
                  <br />This work is licensed under a{" "}
                  <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                    Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
                  </a>.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div >
    </footer >
  );
};

export default Footer;
