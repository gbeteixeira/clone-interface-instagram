import React from 'react';
import './index.css';
import { FaRegHeart, FaRegComment, FaRegPaperPlane, FaRegBookmark, FaEllipsisH } from 'react-icons/fa';

function Posts() {
  return (
    <div className="posts">
      <div className="user--info">
        <div className="user">
          <div className="img--user">
            <img src="https://lh3.googleusercontent.com/dSt8d_zjBF7HrAguVn_l9ix5XCO_FbTZYo5VVUfinWkp1kCfmDBfrL30P9v8gHcXJUn6=s85" alt="" />
          </div>
          <div className="nome--user">
            <a href='#local'><span>Gabriel Teixeira</span></a>
          </div>
          <div className="more--info">
            <FaEllipsisH />
          </div>
        </div>
      </div>
      <div className="post">
        <img src="https://webtrends.net.br/wp-content/uploads/2020/04/tamanho-post-instagram-feed.jpg" alt="" />
      </div>
      <div className="post--actions">
        <div className="actions">
            <div className="like">
              <FaRegHeart  size={30}/>
            </div>
            <div className="comments">
              <FaRegComment size={30}/>
            </div>
            <div className="share">
              <FaRegPaperPlane size={30}/>
            </div>
            <div className="save--post">
              <FaRegBookmark size={30}/>
            </div>
        </div>
      </div>
      <p className="likes">6.890 curtidas</p>
      <p className="time">HÁ 2 HORAS</p>
    </div>
  );
}

export default Posts;
