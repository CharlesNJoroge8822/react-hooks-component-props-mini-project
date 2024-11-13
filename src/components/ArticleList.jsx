// ArticleList.js
import React from 'react';
import Article from './Article';

const ArticleList = ({ posts }) => {
  return (
    <main>
      {posts.map((post, index) => (
        <Article 
          key={index} 
          title={post.title} 
          date={post.date} 
          content={post.content} 
        />
      ))}
    </main>
  );
};

export default ArticleList;


