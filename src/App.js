import './App.css';
import { React } from 'react'
import { Route, Routes } from 'react-router-dom';
import Search from './pages/Search';
import Home from './pages/Home';



function App() {
  
    return (
      <div className="App">
        <header className="App-header">
          <section>
            <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/search" exact element={<Search />}/>
            </Routes>
            
          </section>
        </header>
      </div>
    );
  }

export default App;
