import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Container, Row, Col } from 'react-bootstrap';

import { Context } from '..';
import { fetchTypes, fetchBrands, fetchDevices } from '../http/deviceAPI';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';

const Shop = observer(() => {
    const { device } = useContext(Context);

    useEffect(() => {
        fetchTypes().then(response => device.setTypes(response));
        fetchBrands().then(response => device.setBrands(response));
        fetchDevices().then(response => device.setDevices(response.rows));
    }, [device]);

    return (
        <Container>
            <Row className="pt-4">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
