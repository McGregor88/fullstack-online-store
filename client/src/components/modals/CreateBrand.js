import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

import { createBrand } from '../../http/deviceAPI';

const CreateBrand = ({ show, onHide }) => {

    const [ value, setValue ] = useState('');

    const addBrand = () => {
        createBrand({ name: value }).then(response => {
            setValue('');
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
                    Добавить бренд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control 
                        placeholder="Введите название бренда"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
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
                    onClick={addBrand}
                >
                    Добавить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;
