import React from 'react';
import Login from './Login';
import Projects from './Projects';
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Login />} />
      <Route exact path='/projects/:authority' element={<Projects />} />
    </Routes>
  );
}

export default App;