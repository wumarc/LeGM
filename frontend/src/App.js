import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';

function App() {
  
  return (
    <div className="App">
      <NavigationBar/>
      <div className='col-md-7 mx-auto mt-5'>
          <Search/>
      </div>
    </div>
  );
}

export default App;