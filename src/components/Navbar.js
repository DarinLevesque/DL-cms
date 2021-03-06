import React from 'react'
import { Link } from 'gatsby'
import { pushRotate as Menu } from "react-burger-menu"
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "26px",
    height: "15px",
    right: "20px",
    top: "20px"
  },
  bmBurgerBars: {
    background: "#373a47"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },
  bmCross: {
    background: "#777777"
  },
  bmMenu: {
    background: "#e0e0e0",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
    top: "0"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.6)"
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  // This keeps state in sync with the opening/closing of the menu via the default
  // means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  // This can be used to toggle the menu, e.g. when using a custom icon Tip: You
  // probably want to hide either/both default icons if using a custom icon See
  // https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  render() {
    return (
      <div className="is-hidden-desktop">
        <Menu
          styles={styles}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          width={'280px'}
          right
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}>
          <aside className="menu">
            <Link
              id="home"
              to="/"
              onClick={() => this.closeMenu()}
              activeClassName="is-active">
              <i className="fas fa-home" />
            </Link>
            <p className="menu-label">General</p>
            <ul className="menu-list">
              <li>
                <Link
                  id="about"
                  to="/about"
                  onClick={() => this.closeMenu()}
                  activeClassName="is-active">
                  <i className="fas fa-user" />
                  <span>
                    About Me</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  onClick={() => this.closeMenu()}
                  activeClassName="is-active">
                  <i className="fas fa-cogs" />{" "}
                  <span>
                    Projects</span>
                </Link>
              </li>
            </ul>
            <Link
              to="/blog"
              className="menu-label"
              onClick={() => this.closeMenu()}
              activeClassName="is-active">
              Blog
            </Link>
            <ul className="menu-list">
              <li>
                <Link to="/" onClick={() => this.closeMenu()} activeClassName="is-active">
                  <i className="fas fa-fighter-jet" />{" "}
                  <span>
                    Professional</span>
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => this.closeMenu()} activeClassName="is-active">
                  <i className="fas fa-users" />{" "}
                  <span>
                    Family</span>
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => this.closeMenu()} activeClassName="is-active">
                  Invitations
                </Link>
              </li>
            </ul>
            <Link to="/resume" className="menu-label">Resume</Link>
            <ul className="menu-list">
              <li>
                <Link
                  to="/resume/education"
                  onClick={() => this.closeMenu()}
                  activeClassName="is-active">
                  <i className="fas fa-graduation-cap" />{" "}
                  <span>
                    Education</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/resume/experience"
                  onClick={() => this.closeMenu()}
                  activeClassName="is-active">
                  <i className="fas fa-briefcase" />{" "}
                  <span>
                    Experience</span>
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => this.closeMenu()} activeClassName="is-active">
                  <i className="fas fa-chart-line" />{" "}
                  <span>
                    Skills</span>
                </Link>
              </li>
            </ul>
            <ul className="menu-list">
              <li>
                <Link
                  id="contact"
                  to="/contact"
                  onClick={() => this.closeMenu()}
                  activeClassName="is-active">
                  <i className="fas fa-envelope" />{" "}
                  <span>
                    Contact</span>
                </Link>
              </li>
            </ul>
            <div className="level is-mobile">
              <span className="tooltip level-item" data-tooltip="Download Resume">
                <i className="fas fa-lg fa-download" />
              </span>
              <OutboundLink
                href="https://github.com/DarinLevesque/DL-cms"
                className="level-item">
                <button class="button tooltip" data-tooltip="Github Repository">
                  <i className="fab fa-lg fa-github" />
                </button>
              </OutboundLink>
            </div>
          </aside>
        </Menu>
      </div>
    );
  }
}

export default Navbar
