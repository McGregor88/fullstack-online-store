import React from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Card, Image } from 'react-bootstrap';
import { Star } from 'react-bootstrap-icons';

import './DeviceItem.scss';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({ device }) => {
    const history = useHistory();

    return (
        <Col 
            md={3} 
            className="mt-3"
            onClick={() => history.push(`${DEVICE_ROUTE}/${device.id}`)}
        >
            <Card 
                border="light"
                className="device-card"
            >
                <Image
                    width={150}
                    height={150} 
                    src={device.img} 
                />
                <div className="mt-1 d-flex justify-content-between align-items-center text-black-50">
                    <div>Samsung...</div>
                    <div className="d-flex align-items-center">
                        <div >{ device.rating }</div>
                        <Star
                            size={18}
                            color="royalblue"
                            className="ml-1" 
                        />
                    </div>
                </div>
                <div>{ device.name }</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;
