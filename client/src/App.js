import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Spinner } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Context } from '.';
import { auth } from './http/userAPI';
import Header from './components/Header';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';

const App = observer(() => {
    const { user } = useContext(Context);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        auth().then(response => {
            user.setUser(true);
            user.setIsAuth(true);
        }).finally(() => setLoading(false));
    }, [user]);

    if (loading) {
        return <Spinner animation="grow" />;
    }

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
});

export default App;
