import React, { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Modal, Form, Button, Dropdown, Row, Col } from 'react-bootstrap';

import { Context } from '../..';
import { fetchTypes, fetchBrands, createDevice } from '../../http/deviceAPI';

const CreateDevice = observer(({ show, onHide }) => {
    const { device } = useContext(Context);
    const [ name, setName ] = useState('');
    const [ price, setPrice ] = useState(0);
    const [ file, setFile ] = useState(null);
    const [ info, setInfo ] = useState([]);

    useEffect(() => {
        fetchTypes().then(response => device.setTypes(response));
        fetchBrands().then(response => device.setBrands(response));
    }, [device]);

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

    const changeInfo = (key, value, number) => {
        setInfo(info.map(el => el.number === number ? { ...el, [key]: value } : el));
    };

    const selectFile = e => {
        setFile(e.target.files[0])
    };

    const addDevice = () => {
        const formData = new FormData();

        formData.append('name', name);
        formData.append('price', `${price}`);
        formData.append('img', file);
        formData.append('typeId', device.selectedType.id);
        formData.append('brandId', device.selectedBrand.id);
        formData.append('info', JSON.stringify(info));

        createDevice(formData).then(response => {
            onHide();
        });
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
                        <Dropdown.Toggle variant="secondary">
                            { device.selectedType.name || 'Выберите тип' }
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item 
                                    key={type.id}
                                    onClick={() => device.setSelectedType(type)}
                                >
                                    { type.name }
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mb-3">
                        <Dropdown.Toggle variant="secondary">
                        { device.selectedBrand.name || 'Выберите бренд' }
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item 
                                    key={brand.id}
                                    onClick={() => device.setSelectedBrand(brand)}
                                >
                                    { brand.name }
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control 
                        placeholder="Введите название устройства"
                        className="mb-3"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control 
                        placeholder="Введите стоимость устройства"
                        className="mb-3"
                        type="number"
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                    />
                    <Form.Control 
                        type="file" 
                        onChange={selectFile}
                    />
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
                                    value={el.title}
                                    onChange={e => changeInfo('title', e.target.value, el.number)}
                                />
                            </Col>
                            <Col md={5}>
                                <Form.Control 
                                    placeholder="Введите описание свойства" 
                                    value={el.description}
                                    onChange={e => changeInfo('description', e.target.value, el.number)}
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
                    onClick={addDevice}
                >
                    Добавить
                </Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;
