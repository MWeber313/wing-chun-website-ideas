import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>
          {/* I will put a login/signup bit here, along with links to social media */}
        </span>
        <h1>Fei Mong Wing Chun</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">Sifu's Story</a>
          <a href="#">Wing Chun and A Cup of Tea</a>
          <a href="#">About Us</a>
          <a href="#">Video Examples</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <div>
      {/* I think I'll stop for now */}
      </div>
      <footer>
        <p>
        <span>{/* Social media goes here too */}</span>
        Designed and Built by <a href="https://github.com/MWeberLambdaweb19">Mackenzie Weber</a><br/>
        All information &#169; Fei Mong Wing Chun and Ed Dumancas, 1995-2020<br/>
        </p>
      </footer>
    </div>
  );
}

export default App;
