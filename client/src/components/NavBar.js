import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

import { Context } from '..';
import { SHOP_ROUTE } from '../utils/consts';

export const NavBar = observer(() => {
    const { user } = useContext(Context);

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href={SHOP_ROUTE}>Store</Navbar.Brand>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Button 
                            variant="outline-light"
                        >
                            Админ панель
                        </Button>
                        <Button 
                            variant="outline-light"
                            className="ml-2"
                            onClick={() => user.setIsAuth(false)}
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button 
                            variant="outline-light"
                            onClick={() => user.setIsAuth(true)}
                        >
                            Авторизация
                        </Button>
                    </Nav>
                }
            </Container>
      </Navbar>
    );
});
