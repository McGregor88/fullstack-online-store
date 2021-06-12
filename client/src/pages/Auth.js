import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Container, Card, Form, Button } from 'react-bootstrap';

import './Auth.scss';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    return (
        <Container 
            className="d-flex justify-content-center align-items-center auth-container"
        >
            <Card className="p-5 auth-card">
                <h2 className="ml-auto mr-auto mb-5">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        placeholder="Введите ваш email"
                    />

                    <Form.Control
                        placeholder="Введите ваш пароль..."
                        className="mt-3"
                    />
                    <Button
                        variant="primary"
                        className="mt-3"
                    >
                        {isLogin ? 'Войти' : 'Зарегистрироваться'}
                    </Button>
                    {isLogin ?
                        <Form.Text>
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                        </Form.Text>
                        :
                        <Form.Text>
                            Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                        </Form.Text>
                    }
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;
