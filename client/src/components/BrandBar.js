import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Row, Card } from 'react-bootstrap';

import './BrandBar.scss';
import { Context } from '..';

const BrandBar = observer(() => {
    const { device } = useContext(Context);

    return (
        <Row className="d-flex">
            {device.brands.map(brand =>
                <Card 
                    key={brand.id}
                    className="p-3 brand-card"
                    border={brand.id === device.selectedBrand.id ? 'primary' : 'light'}
                    onClick={() => device.setSelectedBrand(brand)}
                >
                    { brand.name }
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;
