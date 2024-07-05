import logo from './logo.svg';
import './css/MainPage.css';
import MainPage from'./components/MainPage.jsx';
import Home from'./components/Home.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  return (
    <div className="App">
      <header className="App-header">
        
        <MainPage/>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
            />
            {/* <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} /> */}
          </Routes>
        </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
