import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import ResumePdf from '../assets/pdf/CV-Michel-Moraes-2020-EN.pdf'

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/resume">
            Resume
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/landing">
            Work
          </Link>
        </li>

        {/* <li><Link onClick={props.onToggleMenu} to="/generic">Generic</Link></li> */}
        {/* <li><Link onClick={props.onToggleMenu} to="/elements">Elements</Link></li> */}
      </ul>
      <ul className="actions vertical">
        <li>
          <a
            href={ResumePdf}
            className="button special fit icon fa-file-pdf-o"
            download="CV-Michel-Moraes-2020-EN"
          >
            Download CV
          </a>
        </li>
        <li>
          <Link
            onClick={props.onToggleMenu}
            to="/#contact"
            className="button fit"
          >
            Hire Me
          </Link>
        </li>
      </ul>
      <ul className="icons">
        <li>
          <a
            href="https://www.linkedin.com/in/michelmany"
            className="icon fa-linkedin"
          >
            <span className="label">Linkedin</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/michelmany" className="icon fa-github">
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/michelmany" className="icon fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu} href="#">
      Close
    </a>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
