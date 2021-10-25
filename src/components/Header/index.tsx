import React from 'react';
import './index.css';

function Header() {
  return (
    <header>
      <div className="header">
        <div className="header__logo">
          <a href="/">
            <img src="https://instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png%202x" alt="Instagram" />
          </a>
        </div>
        <div className="header__user">
          <a href="/">
            <img src="https://lh3.googleusercontent.com/dSt8d_zjBF7HrAguVn_l9ix5XCO_FbTZYo5VVUfinWkp1kCfmDBfrL30P9v8gHcXJUn6=s85" alt="Usuário" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header;