import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const CreateDevice = ({ show, onHide }) => {
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
                    <Form.Control 
                        placeholder="Введите название устройства"
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
                    onClick={onHide}
                >
                    Добавить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;
