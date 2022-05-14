import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import NestedSelects from '../NestedSelects';
import About from '../About';
import { AuthProvider } from '../../hooks/useAuth';
import SelectList from '../SelectList';
import Sidebar from '../Sidebar';

function Routing() {
  return (
    <BrowserRouter>
      <div className='bg-slate-900 h-screen text-lime-500 flex'>
        <AuthProvider>
          <Sidebar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/quotes' element={<NestedSelects />} />
            <Route path='/about' element={<About />} />
            <Route path='/quotation' element={<SelectList />} />
          </Routes>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default Routing;
