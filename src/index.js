import React from 'react';
import ReactDOM from 'react-dom';

import Landing from './Landing';
import Services from './Services';
import Projects from './Projects';
import Connect from './Connect';
import Footer from './Footer';
import NavBar from './Navbar';

import './styles.scss';

function App() {
  return (
    <main className="App">
      <NavBar />
      <Landing />
      <Services />
      <Projects />
      <Connect />
      <Footer />
    </main>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
