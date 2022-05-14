import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import NestedSelects from '../NestedSelects';
import { AuthProvider } from '../../hooks/useAuth';
import SelectList from '../SelectList';

function Routing() {
  return (
    <BrowserRouter>
      <div className='bg-slate-900 h-screen text-lime-500 flex'>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/quotes' element={<NestedSelects />} />.
            <Route path='/quotation' element={<SelectList />} />
          </Routes>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default Routing;
