import React from 'react';
import './App.css';
import Header from './components/Common/Header/Header';
import Content from './components/Common/Content/Content';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Content />
      </header>
    </div>
  );
}

export default App;
