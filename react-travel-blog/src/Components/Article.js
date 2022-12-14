import React from 'react';

class Article extends React.Component {
  render(props) {
    return <div className="Article">
        <h1>{this.props.title}</h1>
    </div>;
  }
}

export default Article