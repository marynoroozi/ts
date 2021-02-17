import React from 'react';

import './App.css';
import FirstTest from './components/firstTest/FirstTest';

function App() {
  const myData = 123456
  return (
    <div className="App">
      <FirstTest data={myData} />

    </div>
  );
}

export default App;
