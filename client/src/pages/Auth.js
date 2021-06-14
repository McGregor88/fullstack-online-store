import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Container, Card, Form, Button } from 'react-bootstrap';

import './Auth.scss';
import { Context } from '..';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userAPI';

const Auth = observer(() => {
    const { user } = useContext(Context);
    const location = useLocation();
    const history = useHistory();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const onButtonClick = async () => {
        try {
            let data;

            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
    
            user.setUser(user);
            user.setIsAuth(true);
            history.push(SHOP_ROUTE);
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    return (
        <Container 
            className="d-flex justify-content-center align-items-center auth-container"
        >
            <Card className="p-5 auth-card">
                <h2 className="ml-auto mr-auto mb-5">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        placeholder="Введите ваш email"
                        value={email}
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        placeholder="Введите ваш пароль..."
                        value={password}
                        className="mt-3"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Button
                        variant="primary"
                        className="mt-3"
                        onClick={onButtonClick}
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
});

export default Auth;
