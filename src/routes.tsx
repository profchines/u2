import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import { Carrinho } from './pages/Carrinho';
import { Home } from './pages/Home';
import { Categoria } from './pages/Categoria';
import { Produto } from './pages/Produto';
import { ListCategoria } from './pages/ListCategoria';
import { AddAndUpdateCategoria } from './pages/AddAndUpdateCategoria';

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route
                    path='/carrinho'
                    element={<Carrinho />}
                />
                <Route
                    path='/categoria/:id'
                    element={<Categoria />}
                />
                <Route
                    path='/produto/:id'
                    element={<Produto />}
                />
                <Route
                    path='/listagemCategoria'
                    element={<ListCategoria />}
                />
                <Route
                    path='/crud/categoria/:id'
                    element={<AddAndUpdateCategoria />}
                />
            </Routes>
        </BrowserRouter>
    )
}