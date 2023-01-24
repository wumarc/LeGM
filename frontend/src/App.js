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
      <div className='fs-4 mt-5 col-md-7 mx-auto font-weight-bold text-body-secondary'>
        <h1 className='mt-2 mb-3'>LeGM</h1>
        LeGM is a tool that lets you compare multiple players' statistics in one chart. This 
        helps you solve important questions like: Is it wise to trade Lebron James for Patrick Beverley?
        Select one or more players in the search bar above to compare the main stats along of the current 
        season. Aspring to become the best general manager in history? Look no further, LeGM is here to help!
      </div>
    </div>
  );
}

export default App;