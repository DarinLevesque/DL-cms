import React from "react";
import NavLink from "./NavLink";
import Headroom from "react-headroom";
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import logo from "../img/dl6.png";

const Header = () => {
  return (
    <Headroom>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <NavLink className="navbar-item" to="/">
              <img src={logo} alt="Darin Levesque Logo" width="112" height="50" />
            </NavLink>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <NavLink to="/about" className="navbar-item is-active">
                <i className="fas fa-user" /><span>&nbsp;About</span>
              </NavLink>
              <div className="navbar-item has-dropdown is-hoverable">
                <NavLink to="/blog" className="navbar-link">
                  Blog
                </NavLink>
                <div className="navbar-dropdown">
                  <NavLink to="/blog/professional" className="navbar-item">
                    <i className="fas fa-fighter-jet" /><span>&nbsp;Professional</span>
                  </NavLink>
                  <NavLink to="/blog/family" className="navbar-item">
                    <i className="fas fa-users" /><span>&nbsp;Family</span>
                  </NavLink>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <NavLink to="/resume" className="navbar-link">
                  Resume
                </NavLink>
                <div className="navbar-dropdown">
                  <NavLink to="/resume/experience" className="navbar-item">
                    <i className="fas fa-wrench" /><span>&nbsp;Experience</span>
                  </NavLink>
                  <NavLink to="/resume/education" className="navbar-item">
                    <i className="fas fa-user-graduate" /><span>&nbsp;Education</span>
                  </NavLink>
                  <NavLink to="/resume/skills" className="navbar-item">
                    <i className="fas fa-table-tennis" /><span>&nbsp;Skills</span>
                  </NavLink>
                  <hr className="navbar-divider" />
                  <NavLink to="/timeline" className="navbar-item">
                    <i className="fas fa-download" /><span>&nbsp;Download</span>
                  </NavLink>
                </div>
              </div>
              <NavLink to="/contact" className="navbar-item">
                Contact
              </NavLink>
            </div>
            <div className="navbar-end">
              <OutboundLink
                href="https://github.com/DarinLevesque/DL-cms" className="navbar-item">
                <span className="tooltip is-tooltip-bottom" data-tooltip="Github Repository">
                  <i className="fab fa-github fa-lg fa-inverse"/>
                </span>
              </OutboundLink>
            </div>
          </div>
        </div>
      </nav>
    </Headroom>
  )
}

export default Header;
