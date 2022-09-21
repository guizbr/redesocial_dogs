import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound';
import Photo from './Components/Photo/Photo';
import User from './Components/User/User';
import UserProfile from './Components/User/UserProfile';
import { UserStorage } from './UserContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header></Header>
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="login/*" element={<Login></Login>}></Route>
              <Route
                path="conta/*"
                element={
                  <ProtectedRoute>
                    <User></User>
                  </ProtectedRoute>
                }
              ></Route>
              <Route path="foto/:id" element={<Photo></Photo>}></Route>
              <Route
                path="perfil/:user"
                element={<UserProfile></UserProfile>}
              ></Route>
              <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
          </main>
          <Footer></Footer>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
