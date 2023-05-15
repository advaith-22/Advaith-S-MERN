import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route 
            path="/"
            element = {<Home />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
