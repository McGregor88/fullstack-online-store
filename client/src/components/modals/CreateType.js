import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

import { createType } from '../../http/deviceAPI';

const CreateType = ({ show, onHide }) => {

    const [ value, setValue ] = useState('');

    const addType = () => {
        createType({ name: value }).then(response => {
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
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control 
                        placeholder="Введите название типа"
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
                    onClick={addType}
                >
                    Добавить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;
