import React from "react";
import Link from "gatsby-link";
import Headroom from "react-headroom";
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import logo from "../img/dl6.png";

const Header = () => {
  return (
    <Headroom>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img src={logo} alt="Darin Levesque Logo" width="112" height="50" />
            </Link>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <Link to="/about" className="navbar-item is-active">
                <i className="fas fa-user" /><span>{' '} About</span>
              </Link>
              <div className="navbar-item has-dropdown is-hoverable">
                <Link to="/blog" className="navbar-link">
                  Blog
                </Link>
                <div className="navbar-dropdown">
                  <Link to="/blog/professional" className="navbar-item">
                    <i className="fas fa-fighter-jet" /><span> Professional</span>
                  </Link>
                  <Link to="/blog/family" className="navbar-item">
                    <i className="fas fa-users" /><span>{' '} Family</span>
                  </Link>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <Link to="/resume" className="navbar-link">
                  Resume
                </Link>
                <div className="navbar-dropdown">
                  <Link to="/resume/experience" className="navbar-item">
                    <i className="fas fa-wrench" /><span>{' '} Experience</span>
                  </Link>
                  <Link to="/resume/education" className="navbar-item">
                    <i className="fas fa-user-graduate" /><span>{' '} Education</span>
                  </Link>
                  <Link to="/resume/skills" className="navbar-item">
                    <i className="fas fa-table-tennis" /><span>{' '} Skills</span>
                  </Link>
                  <hr className="navbar-divider" />
                  <Link to="/timeline" className="navbar-item">
                    <i className="fas fa-download" /><span>{' '} Download</span>
                  </Link>
                </div>
              </div>
              <Link to="/contact" className="navbar-item">
                Contact
              </Link>
            </div>
            <div className="navbar-end">
              <OutboundLink
                href="https://github.com/DarinLevesque/DL-cms" className="navbar-item">
                <i className="fab fa-github fa-inverse"/>
              </OutboundLink>
            </div>
          </div>
        </div>
      </nav>
    </Headroom>
  )
}

export default Header;
