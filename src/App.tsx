import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";


function App() {
  return (
      <div className="App">
      <Header title="My header" subtitle="subtitle2" />
      <Body message="My content" />
      <Footer note="Footer Note" />
  </div>
  );
}

export default App;
