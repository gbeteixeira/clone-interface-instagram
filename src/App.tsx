import React from 'react';
import './App.css';

import Posts from './components/Posts';
import Stories from './components/Stories';
import Suggestion from './components/SuggestionFollow';
import Header from './components/Header';

function App() {
  return (
    <>

      <Header />
      
      <div className="body">

        <aside className="stories--list">
          <Stories />
        </aside>

        <aside className="postsList">
          <Posts/>
        </aside>

        <aside className="suggestionsList">
          <Suggestion/>
        </aside>
      
      </div>

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