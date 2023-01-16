import './App.css';
import SearchBar from './components/SearchBar';
import Comparator from './components/Comparator';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <Comparator/>
    </div>
  );
}

export default App;