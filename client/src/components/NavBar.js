import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

import { Context } from '..';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const history = useHistory();

    return (
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
                                onClick={() => history.push(LOGIN_ROUTE)}
                            >
                                Выйти
                            </Button>
                        </>
                        :
                        <Button 
                            variant="outline-light"
                            onClick={() => user.setIsAuth(true)}
                        >
                            Авторизация
                        </Button>
                    }
                </Nav>
            </Container>
      </Navbar>
    );
});

export default NavBar;
