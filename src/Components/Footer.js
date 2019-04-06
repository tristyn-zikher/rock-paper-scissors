import React from 'react';
import PropTypes from 'prop-types';

// title and subtitle take strings which render to the footer.
// Title is for line 1 of the footer
// Subtitle is for line 2 of the footer (under title/line 1)

const Footer = ({ title, subtitle }) => {
  return (
    <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
      <div className="container text-center">
        <h6>{title}</h6>
        <h6>{subtitle}</h6>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

Footer.defaultProps = {
  title: 'React/Bootstrap - Mobile Friendly',
  subtitle: 'Created by Tristyn Leos - (512) 956-1160',
}

export default Footer;
