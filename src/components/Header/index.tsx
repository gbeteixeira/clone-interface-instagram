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
            <img src="https://secure.gravatar.com/avatar/1115396d4dec662e739dd8ff1a7220e8?s=256&d=mm&r=g" alt="Usuário" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header;