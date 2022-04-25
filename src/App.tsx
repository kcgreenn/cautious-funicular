import { Context, useContext, useState } from 'react';
import logo from './logo.svg';
import classes from './App.scss';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import { productInputs, userInputs } from './data/formSource';
import NewUser from './pages/new/user/NewUser';
import NewProduct from './pages/new/product/NewProduct';
import './styles/dark.scss';
import { DarkModeContext } from './context/darkModeContext';

function App() {
   const { state, dispatch } = useContext(DarkModeContext);
   return (
      <div className={state.darkMode ? 'app dark' : 'app'}>
         <BrowserRouter>
            <Routes>
               <Route index element={<Home />} />
               <Route path="login" element={<Login />} />
               <Route path="users">
                  <Route index element={<List />} />
                  <Route path=":userId" element={<Single />} />
                  <Route
                     path="new"
                     element={
                        <NewUser inputs={userInputs} title="Add New User" />
                     }
                  />
               </Route>
               <Route path="products">
                  <Route index element={<List />} />
                  <Route path=":productId" element={<Single />} />
                  <Route
                     path="new"
                     element={
                        <NewProduct
                           inputs={productInputs}
                           title="Add new Product"
                        />
                     }
                  />
               </Route>
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
