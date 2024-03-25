import React from 'react';
import './App.css';
import Homepage from './component/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    document.title = "E-commerce";
    return (
        <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                </Routes>
        </Router>
    );
}

export default App;
