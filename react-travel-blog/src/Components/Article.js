import React from 'react';
import Img from '../Images/logo192.png';

class Article extends React.Component {
  render(props) {
    return (
      <div className="Article">
        <div className="Article-Image">
          {' '}
          <img src={Img} alt="React Logo"></img>
        </div>
        <div className="Article-Body">
          <div className="Article-Title">
            <h1>{this.props.title}!</h1>
          </div>
          <div className="Article-SubTitle">
            <h2>{this.props.date}!</h2>
            <h2>{this.props.location}!</h2>
          </div>
          <div className="Article-Description">
            <p>{this.props.description}!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
