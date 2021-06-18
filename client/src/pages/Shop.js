import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Container, Row, Col } from 'react-bootstrap';

import { Context } from '..';
import { fetchTypes, fetchBrands, fetchDevices } from '../http/deviceAPI';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import Pages from '../components/Pages';

const Shop = observer(() => {
    const { device } = useContext(Context);

    useEffect(() => {
        fetchTypes().then(response => device.setTypes(response));
        fetchBrands().then(response => device.setBrands(response));
        fetchDevices(null, null, 1, 2).then(response => {
            const { rows, count } = response;

            device.setDevices(rows);
            device.setTotalCount(count);
        });
    }, [device]);

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 2).then(response => {
            const { rows, count } = response;

            device.setDevices(rows);
            device.setTotalCount(count);
        });
    }, [device.page, device.selectedType, device.selectedBrand]);

    return (
        <Container>
            <Row className="pt-4">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                    <Pages />
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
