import React from 'react';

const CommentDetail = props => {
    return (
      <div className="content">
        <a href="/" className="avatar">
          <img alt="avatar" className='right floated mini ui image' src={props.avatar} />
        </a>
        <div className="header">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="meta">
            <span className="date">{props.timeAgo}</span>
          </div>
          <div className="description">{props.content}</div>
        </div>
      </div>
    );
  };
  
  export default CommentDetail;