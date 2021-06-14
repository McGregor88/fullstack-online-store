import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Footer.scss';

const Footer = () => (
    <footer className="footer bg-dark">
        <Container className="d-flex justify-content-center align-items-center">
            <Row>
                <Col md={12}>
                    <div className="copyright-text text-white">
                        <p className="mb-0">© 2021 All rights reserved. Created by Store</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;