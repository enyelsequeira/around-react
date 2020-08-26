import React from 'react';

import logo from '../images/SVGHEADER.svg';

const Header = () => (
  <header className="header">

    <a className="header__link" href="/"><img src={logo} alt="logo" className="header__logo" /></a>
  </header>
);

export default Header;
