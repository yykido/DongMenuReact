import logo from './logo.svg';
import './css/MainPage.css';
import './css/Basic.css';
import './css/ProductCard.css';
import MainPage from'./components/MainPage.jsx';
import Home from'./components/Home.jsx';
import Login from'./components/Login.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            {/* <Route
              path="/"
              element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
            /> */}
            <Route path="/" element={<Home />}/>
            {/* <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} /> */}
            <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail}/>} />
            <Route path="/mainpage" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
        
      </header>
    </div>
  );
}


export default App;
