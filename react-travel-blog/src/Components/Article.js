import React from 'react';

class Article extends React.Component {
  render(props) {
    return (
      <div className="Article">
        <div className="Article-Image">
          <img src={this.props.img} alt="React Logo"></img>
        </div>
        <div className="Article-Body">
          <div className="Article-Title">
            <h1>{this.props.title}</h1>
          </div>
          <div className="Article-SubTitle">
            <h3>{this.props.date}</h3>
            <h3>{this.props.location}</h3>
          </div>
          <div className="Article-Description">
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
