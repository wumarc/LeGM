import './App.css';
import SearchBar from './components/SearchBar';
import Comparator from './components/Comparator';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

function App() {
  
  return (
    <div className="App">
      <NavigationBar/>
      <SearchBar/>
      {/* <Comparator/> */}
    </div>
  );
}

export default App;