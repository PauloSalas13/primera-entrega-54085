
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div>
      <Navbar />
      <Banner saludo="Bienvenidos a Paulo's" />
      <Main />
      <Footer />
    </div>
  );
}

export default App
