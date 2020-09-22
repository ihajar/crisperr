import React from 'react';

import Post from './components/Post/Post';

import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <div className="app__headerLogo">
          <h2>Crisperr</h2>
        </div>
      </header>

      <Post  />
      {/* Posts */}

      {/* Footer */}
    
    </div>
  );
}

export default App;
