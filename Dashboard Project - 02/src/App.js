// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Profile from './components/Profile';
import Assignments from './components/Assignments';
import Reports from './components/Reports'; 
import './App.css';

const App = () => {
  const location = useLocation();
  const isDashboard = location.pathname === '/';

  return (
    <div className='dashboard'>
      <Sidebar />
      <div className='dashboard--content'>
        <Routes> 
          <Route path='/' element={<Content />} />
          <Route path='/assignments' element={<Assignments />} />
          <Route path='/reports' element={<Reports />} />
        </Routes>
        {isDashboard && <Profile />}
      </div>
    </div>
  );
}

const Root = () => (
  <Router>
    <Routes>
      <Route path='/*' element={<App />} />
    </Routes>
  </Router>
);

export default Root;
