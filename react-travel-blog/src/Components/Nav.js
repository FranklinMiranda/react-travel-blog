import React from 'react';
import Img from '../Images/logo192.png'

class Nav extends React.Component {
  render() {
    return (
      <div className="Nav">
        <h1>Franklin Miranda's Travel Blog</h1>
        <img src={Img} alt="React Logo"></img>
      </div>
    );
  }
}

export default Nav;
