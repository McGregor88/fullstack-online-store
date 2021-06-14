import React, { useContext, useState } from 'react';
import { Modal, Form, Button, Dropdown, Row, Col } from 'react-bootstrap';

import { Context } from '../..';

const CreateDevice = ({ show, onHide }) => {
    const { device } = useContext(Context);
    const [ info, setInfo ] = useState([]);

    const addInfo = () => {
        setInfo([
            ...info, 
            {
                title: '',
                description: '',
                number: Date.now()
            }
        ]);
    };

    const removeInfo = number => {
        setInfo(info.filter(el => el.number !== number));
    };

    return (
        <Modal
            centered
            show={show}
            onHide={onHide}
            size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Добавить устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mb-3">
                        <Dropdown.Toggle variant="secondary">Выберите тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item key={type.id}>{ type.name }</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mb-3">
                        <Dropdown.Toggle variant="secondary">Выберите бренд</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item key={brand.id}>{ brand.name }</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control 
                        placeholder="Введите название устройства"
                        className="mb-3"
                    />
                    <Form.Control 
                        placeholder="Введите стоимость устройства"
                        className="mb-3"
                        type="number"
                    />
                    <Form.Control type="file" />
                    <hr />
                    <Button
                        variant="outline-primary"
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map(el =>
                        <Row key={el.number} className="mt-3">
                            <Col md={5}>
                                <Form.Control 
                                    placeholder="Введите название свойства" 
                                />
                            </Col>
                            <Col md={5}>
                                <Form.Control 
                                    placeholder="Введите описание свойства" 
                                />
                            </Col>
                            <Col md={2}>
                                <Button 
                                    variant="outline-danger"
                                    onClick={() => removeInfo(el.number)}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button 
                    variant="outline-dark"
                    onClick={onHide}
                >
                    Закрыть
                </Button>
                <Button 
                    variant="primary"
                    onClick={onHide}
                >
                    Добавить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;
