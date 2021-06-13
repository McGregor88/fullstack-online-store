import React from 'react';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import { Star } from 'react-bootstrap-icons';

import './Device.scss';

const Device = () => {
    const device = {
        "id": 1,
        "name": "12 pro",
        "price": 100000,
        "rating": 0,
        "img": "http://localhost:5000/b6c645e7-8ed8-4c11-bc8f-e5e50b066298.jpg",
        "createdAt": "2021-06-08T22:09:12.956Z",
        "updatedAt": "2021-06-08T22:09:12.956Z",
        "typeId": 2,
        "brandId": 2
    };

    const description = [{
        id: 1,
        title: 'Оперативная память',
        description: '5 Гб'
    }, {
        id: 2,
        title: 'Камера',
        description: '12 Мп'
    }, {
        id: 3,
        title: 'Процессор',
        description: 'Pentium 3'
    }, {
        id: 4,
        title: 'Кол-во ядер',
        description: '2'
    }, {
        id: 5,
        title: 'Аккумулятор',
        description: '4000'
    }];

    return (
        <Container className="mt-3 device-view">
            <Row>
                <Col md={4}>
                    <Image
                        width={300}
                        height={300}
                        src={device.img} 
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
                {description.map((item, index) =>
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
