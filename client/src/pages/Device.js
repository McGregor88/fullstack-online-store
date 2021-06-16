import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import { Star } from 'react-bootstrap-icons';

import './Device.scss';
import { fetchDevice } from '../http/deviceAPI';

const Device = () => {
    const [ device, setDevice ] = useState({ info: [] });
    const { id } = useParams();

    useEffect(() => {
        fetchDevice(id).then(response => setDevice(response));
    }, [id]);

    return (
        <Container className="mt-3 device-view">
            <Row>
                <Col md={4}>
                    <Image
                        width={300}
                        height={300}
                        src={process.env.REACT_APP_API_URL + device.img} 
                    />
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{ device.name }</h2>
                        <div className="d-flex align-items-center justify-content-center">
                            <Star
                                size={80}
                                color="royalblue"
                            />
                            { device.rating }
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card 
                        className="d-flex flex-column align-items-center justify-content-around device-view__card"
                    >
                        <h3>От: { device.price } руб.</h3>
                        <Button variant="primary">
                            Добавить в корзину
                        </Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h3 className="mb-4">Характеристики</h3>
                {device.info.map((item, index) =>
                    <Row 
                        key={item.id}
                        style={{
                            background: index % 2 === 0 ? 'lightgray' : 'transparent',
                            padding: 10
                        }}
                    >
                        { item.title }: { item.description }
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default Device;
