import React from 'react';

import Main from './Main'

import './App.scss';

function App() {
  return (
    <main className="App">
      <header>Header</header>
      <section className="App__content">
        <Main />
      </section>
      <footer>Footer</footer>
    </main>
  );
}

export default App;
