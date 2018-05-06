import React from 'react';
import ArticleList from './ArticleList';

export default (props) => {
    const articles = [
      { 
        snippet: 'Snippet 1',
        multimedia: 'Multimedia 1',
        pub_date: 'Public Date 1',
        source: 'Source 1'
      },
      { 
        snippet: 'Snippet 2',
        multimedia: 'Multimedia 2',
        pub_date: 'Public Date 2',
        source: 'Source 2'
      },

    ];

  return (
    <ArticleList articles={articles}/>
  );
}
