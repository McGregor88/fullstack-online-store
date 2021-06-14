import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

import { Context } from '..';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';

const Header = observer(() => {
    const { user } = useContext(Context);
    const history = useHistory();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    };

    return (
        <header className="header">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href={SHOP_ROUTE}>Store</Navbar.Brand>
                    <Nav className="ml-auto">
                        {user.isAuth ?
                            <>
                                <Button 
                                    variant="outline-light"
                                    onClick={() => history.push(ADMIN_ROUTE)}
                                >
                                    Админ панель
                                </Button>
                                <Button 
                                    variant="outline-light"
                                    className="ml-2"
                                    onClick={logOut}
                                >
                                    Выйти
                                </Button>
                            </>
                            :
                            <Button 
                                variant="outline-light"
                                onClick={() => history.push(LOGIN_ROUTE)}
                            >
                                Авторизация
                            </Button>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
});

export default Header;
