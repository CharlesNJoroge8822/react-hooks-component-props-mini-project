import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import posts from '../data/blog';

const App = () => {
  return (
    <div>
      <h2>Programmer</h2>
      <Header name="My Blog" />
      <About about="This is a blog about tech and programming." />
      <ArticleList posts={posts} />
    </div>
  );
};

export default App;
