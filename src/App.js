import React from 'react'
import './App.css';
import {Modal} from './components'
import {Header, Main, Footer} from './containers'


function App() {
  return (
    <div >
      <Modal />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
