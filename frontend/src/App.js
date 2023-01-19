import './App.css';
import NavigationBar from './components/NavigationBar';
import Results from './components/Results';
import Comparator from './components/Comparator';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

function App() {
  
  return (
    <div className="App">
      <NavigationBar/>
      <div className='col-md-7 mx-auto'>
          <Results/>
      </div>
    </div>
  );
}

export default App;