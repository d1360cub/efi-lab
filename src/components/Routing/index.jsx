import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import Quotes from '../Quotes';
import About from '../About';
import Projects from '../Projects';
import { AuthProvider } from '../../hooks/useAuth';
import SelectList from '../SelectList';
import Sidebar from '../Sidebar';
import { ProtectedRoutes } from '../ProtectedRoutes';
import FinalQuote from '../FinalQuote';

function Routing() {
  return (
    <BrowserRouter>
      <div className='bg-slate-900 text-lime-500 flex'>
        <AuthProvider>
          <Sidebar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route
              path='/quotes'
              element={
                <ProtectedRoutes>
                  <Quotes />
                </ProtectedRoutes>
              }
            />
            <Route
              path='quote/:id'
              element={
                <ProtectedRoutes>
                  <FinalQuote />
                </ProtectedRoutes>
              }
            />
            <Route path='/about' element={<About />} />
            <Route path='/quotation' element={<SelectList />} />
            <Route
              path='/form'
              element={
                <ProtectedRoutes>
                  <Projects />
                </ProtectedRoutes>
              }
            />
          </Routes>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default Routing;
