import React from 'react';
import './index.css';
import { IconContext } from "react-icons";
import { FiHeart, FiMoreHorizontal, FiBookmark, FiMessageCircle, FiSend } from "react-icons/fi";

function Posts() {
  return (
    <>
      <div className="posts">
        <div className="user--info">
          <div className="user">
            <div className="img--user">
              <div className="circle--user--storys--post">
              <img src="https://lh3.googleusercontent.com/dSt8d_zjBF7HrAguVn_l9ix5XCO_FbTZYo5VVUfinWkp1kCfmDBfrL30P9v8gHcXJUn6=s85" alt="" />
                <svg className="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve">
                  <defs>
                    <linearGradient id="gradientStoryUserPost" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stop-color="rgba(138, 58, 185, 0.2)" />
                      <stop offset="100%" stop-color="rgba(205, 72, 107, 0.2)" />
                    </linearGradient>
                  </defs>
                  <circle stroke="url(#gradientStoryUserPost)" cx="50" cy="50" r="40" />
                </svg>
              </div>
            </div>
            <div className="nome--user">
              <a href='#local'><span>Gabriel Teixeira</span></a>
            </div>
            <div className="more--info">

              <IconContext.Provider value={{ className: "iconMore" }}>
                <div>
                  <FiMoreHorizontal />
                </div>
              </IconContext.Provider>

            </div>
          </div>
        </div>
        <div className="post">
          <img src="https://webtrends.net.br/wp-content/uploads/2020/04/tamanho-post-instagram-feed.jpg" alt="" />
        </div>
        <div className="post--actions">
          <div className="actions">
            <div className="like">
              <IconContext.Provider value={{ className: "iconAction active" }}>
                <div>
                  <FiHeart size={30} />
                </div>
              </IconContext.Provider>
            </div>
            <div className="comments">
              <IconContext.Provider value={{ className: "iconAction" }}>
                <div>
                  <FiMessageCircle size={30} />
                </div>
              </IconContext.Provider>
            </div>
            <div className="share">
              <IconContext.Provider value={{ className: "iconAction" }}>
                <div>
                  <FiSend size={30} />
                </div>
              </IconContext.Provider>
            </div>
            <div className="save--post">
              <IconContext.Provider value={{ className: "iconAction" }}>
                <div>
                  <FiBookmark size={30} />
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <p className="likes">6.890 curtidas</p>
        <p className="time">HÁ 2 HORAS</p>
      </div>

      <div className="posts">
        <div className="user--info">
          <div className="user">
            <div className="img--user">
              <img src="https://secure.gravatar.com/avatar/1115396d4dec662e739dd8ff1a7220e8?s=256&d=mm&r=g" alt="" />
            </div>
            <div className="nome--user">
              <a href='#local'><span>Lukinhas</span></a>
            </div>
            <div className="more--info">

              <IconContext.Provider value={{ className: "iconMore" }}>
                <div>
                  <FiMoreHorizontal />
                </div>
              </IconContext.Provider>

            </div>
          </div>
        </div>
        <div className="post">
          <img src="https://webtrends.net.br/wp-content/uploads/2020/04/tamanho-post-instagram-feed.jpg" alt="" />
        </div>
        <div className="post--actions">
          <div className="actions">
            <div className="like">
              <IconContext.Provider value={{ className: "iconAction" }}>
                <div>
                  <FiHeart size={30} />
                </div>
              </IconContext.Provider>
            </div>
            <div className="comments">
              <IconContext.Provider value={{ className: "iconAction" }}>
                <div>
                  <FiMessageCircle size={30} />
                </div>
              </IconContext.Provider>
            </div>
            <div className="share">
              <IconContext.Provider value={{ className: "iconAction" }}>
                <div>
                  <FiSend size={30} />
                </div>
              </IconContext.Provider>
            </div>
            <div className="save--post">
              <IconContext.Provider value={{ className: "iconAction" }}>
                <div>
                  <FiBookmark size={30} />
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <p className="likes">2.190 curtidas</p>
        <p className="time">HÁ 3 HORAS</p>
      </div>
    </>
  );
}

export default Posts;
