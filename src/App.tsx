import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss';

import Catalog from './pages/Catalog/Catalog'
import Cart from './pages/Cart/Cart'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Catalog />} />
                <Route path="/Catalog" element={<Catalog />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="*" element={<h1>Кажется, такой страницы нет. Но она обязательно будет!</h1>} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;
