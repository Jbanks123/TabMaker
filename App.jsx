import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import HomePage from './pages/Homepage';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/home' element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </DndProvider>
  );
}

export default App;
