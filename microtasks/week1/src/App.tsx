import React from 'react';
import './App.css';
import Body from './site/Body/Body';
import Footer from './site/Footer/Footer';
import Header from './site/Header/Header';
import topCars from './state/state'


function App() {
  return (
    <div >
      <Header title={'Privet'}/>
      <Body title={'Hello'} topCars={topCars} />
      <Footer title={'Chao'}/>
    </div>
  );
}

export default App;



