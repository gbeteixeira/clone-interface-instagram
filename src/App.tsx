import React from 'react';
import './App.css';

import Posts from './components/Posts';
import Stories from './components/Stories';
import Suggestion from './components/SuggestionFollow'

function App() {
  return (
    <>
      
      <aside className="stories--list">
        <Stories />
      </aside>

      <aside className="postsList">
        <Posts/>
      </aside>

      <aside className="suggestions">
        <Suggestion/>
      </aside>

    </>
  );
}

export default App;


/*
 Header 
 Stories
 Posts
 Sugestão de Amigos
*/