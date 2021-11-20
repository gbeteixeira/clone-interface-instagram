import React, { useState } from 'react';
import './index.css';

import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';

function Stories() {

  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let width = 600;
    let x = scrollX + Math.round(width / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  const handleRightArrow = () => {
    let width = 600;
    let x = scrollX - Math.round(width / 2);
    let listWidth = 8 * 71.5;
    if ((width - listWidth) > x) {
      x = (width - listWidth) - 66;
    }

    setScrollX(x);
  }

  const style = { color: "#262626", fontSize: "1.5em", ZIndex: 99, opacity: '0.5' };

  return (
    <div className="story">

      <div className="storyLeft">
        <FaChevronCircleLeft style={style} size={30} onClick={handleLeftArrow} />
      </div>

      <div className="user--story" style={{
        marginLeft: scrollX,
        width: 8 * 71.5
      }}>
        <div className="circle">
          <img className="img--user--story" src="https://secure.gravatar.com/avatar/1115396d4dec662e739dd8ff1a7220e8?s=256&d=mm&r=g" alt="" />
          <svg className="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="rgba(138, 58, 185, 1)" />
                <stop offset="100%" stop-color="rgba(205, 72, 107, 1)" />
              </linearGradient>
            </defs>
            <circle stroke="url(#gradient)" cx="50" cy="50" r="40" />
          </svg>
        </div>
        <div className="name--user">
          <span>Fulano 1</span>
        </div>
      </div>

      <div className="user--story">
        <div className="circle">
          <img className="img--user--story" src="https://secure.gravatar.com/avatar/1115396d4dec662e739dd8ff1a7220e8?s=256&d=mm&r=g" alt="" />
          <svg className="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="rgba(138, 58, 185, 1)" />
                <stop offset="100%" stop-color="rgba(205, 72, 107, 1)" />
              </linearGradient>
            </defs>
            <circle stroke="url(#gradient)" cx="50" cy="50" r="40" />
          </svg>
        </div>
        <div className="name--user">
          <span>Fulano 1</span>
        </div>
      </div>

      <div className="user--story">
        <div className="circle">
          <img className="img--user--story" src="https://secure.gravatar.com/avatar/1115396d4dec662e739dd8ff1a7220e8?s=256&d=mm&r=g" alt="" />
          <svg className="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="rgba(138, 58, 185, 1)" />
                <stop offset="100%" stop-color="rgba(205, 72, 107, 1)" />
              </linearGradient>
            </defs>
            <circle stroke="url(#gradient)" cx="50" cy="50" r="40" />
          </svg>
        </div>
        <div className="name--user">
          <span>Fulano 1</span>
        </div>
      </div>

      <div className="user--story">
        <div className="circle">
          <img className="img--user--story" src="https://secure.gravatar.com/avatar/1115396d4dec662e739dd8ff1a7220e8?s=256&d=mm&r=g" alt="" />
          <svg className="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="rgba(138, 58, 185, 1)" />
                <stop offset="100%" stop-color="rgba(205, 72, 107, 1)" />
              </linearGradient>
            </defs>
            <circle stroke="url(#gradient)" cx="50" cy="50" r="40" />
          </svg>
        </div>
        <div className="name--user">
          <span>Fulano 1</span>
        </div>
      </div>

      <div className="user--story">
        <div className="circle">
          <img className="img--user--story" src="https://secure.gravatar.com/avatar/1115396d4dec662e739dd8ff1a7220e8?s=256&d=mm&r=g" alt="" />
          <svg className="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="rgba(138, 58, 185, 1)" />
                <stop offset="100%" stop-color="rgba(205, 72, 107, 1)" />
              </linearGradient>
            </defs>
            <circle stroke="url(#gradient)" cx="50" cy="50" r="40" />
          </svg>
        </div>
        <div className="name--user">
          <span>Fulano 1</span>
        </div>
      </div>

      <div className="user--story">
        <div className="circle">
          <img className="img--user--story" src="https://secure.gravatar.com/avatar/1115396d4dec662e739dd8ff1a7220e8?s=256&d=mm&r=g" alt="" />
          <svg className="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="rgba(138, 58, 185, 1)" />
                <stop offset="100%" stop-color="rgba(205, 72, 107, 1)" />
              </linearGradient>
            </defs>
            <circle stroke="url(#gradient)" cx="50" cy="50" r="40" />
          </svg>
        </div>
        <div className="name--user">
          <span>Fulano 1</span>
        </div>
      </div>

      <div className="user--story">
        <div className="circle">
          <img className="img--user--story" src="https://secure.gravatar.com/avatar/1115396d4dec662e739dd8ff1a7220e8?s=256&d=mm&r=g" alt="" />
          <svg className="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="rgba(138, 58, 185, 1)" />
                <stop offset="100%" stop-color="rgba(205, 72, 107, 1)" />
              </linearGradient>
            </defs>
            <circle stroke="url(#gradient)" cx="50" cy="50" r="40" />
          </svg>
        </div>
        <div className="name--user">
          <span>Fulano 1</span>
        </div>
      </div>

      <div className="user--story">
        <div className="circle">
          <img className="img--user--story" src="https://secure.gravatar.com/avatar/1115396d4dec662e739dd8ff1a7220e8?s=256&d=mm&r=g" alt="" />
          <svg className="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="rgba(138, 58, 185, 1)" />
                <stop offset="100%" stop-color="rgba(205, 72, 107, 1)" />
              </linearGradient>
            </defs>
            <circle stroke="url(#gradient)" cx="50" cy="50" r="40" />
          </svg>
        </div>
        <div className="name--user">
          <span>Fulano 1</span>
        </div>
      </div>

      <div className="storyRight">
        <FaChevronCircleRight style={style} size={30} onClick={handleRightArrow} />
      </div>
    </div>
  );
}

export default Stories;
