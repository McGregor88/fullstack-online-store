import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/Header';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';

const App = () => {
    return (
        <BrowserRouter>
            <div className="d-flex flex-column page">
                <Header />
                <main className="page-content">
                    <AppRouter />
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
