import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

import CreateType from '../components/modals/CreateType';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';

const Admin = () => {
    const [ typeVisible, setTypeVisible ] = useState(false);
    const [ brandVisible, setBrandVisible ] = useState(false);
    const [ deviceVisible, setDeviceVisible ] = useState(false);

    return (
        <Container className="d-flex flex-column pt-2">
            <Button
                variant="primary"
                className="mb-3"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant="primary"
                className="mb-3"
                onClick={() => setBrandVisible(true)}
            >
                Добавить бренд
            </Button>
            <Button
                variant="primary"
                onClick={() => setDeviceVisible(true)}
            >
                Добавить устройство
            </Button>

            <CreateType 
                show={typeVisible} 
                onHide={() => setTypeVisible(false)} 
            />
            <CreateBrand 
                show={brandVisible} 
                onHide={() => setBrandVisible(false)} 
            />
            <CreateDevice 
                show={deviceVisible} 
                onHide={() => setDeviceVisible(false)} 
            />
        </Container>
    );
};

export default Admin;
