import React from 'react';
import Nav from './Nav';
import Article from './Article';
import ArticleData from '../Data/ArticleData';

const ArticleEl = ArticleData.map((el) => {
  return (
    <Article
      img={el.img}
      title={el.title}
      date={el.date}
      location={el.location}
      hyperlink={el.hyperlink}
      description={el.description}
    />
  );
});

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div>{ArticleEl}</div>
      </div>
    );
  }
}

export default App;
