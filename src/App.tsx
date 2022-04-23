import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/users/single/Single';
import New from './pages/users/new/New';

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Routes>
               <Route index element={<Home />} />
               <Route path="login" element={<Login />} />
               <Route path="users">
                  <Route index element={<List />} />
                  <Route path=":userId" element={<Single />} />
                  <Route path="new" element={<New />} />
               </Route>
               <Route path="products">
                  <Route index element={<List />} />
                  <Route path=":userId" element={<Single />} />
                  <Route path="new" element={<New />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
