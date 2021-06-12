import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [{
            id: 1,
            name: 'Холодильники'
        }, {
            id: 2,
            name: 'Смартфоны'
        }];

        this._brands = [{
            id: 1,
            name: 'Samsung'
        }, {
            id: 2,
            name: 'Apple'
        }];

        this._devices = [{
            "id": 1,
            "name": "12 pro",
            "price": 100000,
            "rating": 0,
            "img": "b6c645e7-8ed8-4c11-bc8f-e5e50b066298.jpg",
            "createdAt": "2021-06-08T22:09:12.956Z",
            "updatedAt": "2021-06-08T22:09:12.956Z",
            "typeId": 2,
            "brandId": 2
        }, {
            "id": 2,
            "name": "11",
            "price": 50590,
            "rating": 0,
            "img": "95cba7dd-4688-4fef-a8f8-94d826a878f9.jpg",
            "createdAt": "2021-06-09T18:16:50.744Z",
            "updatedAt": "2021-06-09T18:16:50.744Z",
            "typeId": 2,
            "brandId": 2
        }, {
            "id": 3,
            "name": "X",
            "price": 44090,
            "rating": 0,
            "img": "992a69f9-9b9e-4ade-8373-129a208dd4a3.jpg",
            "createdAt": "2021-06-09T18:18:46.687Z",
            "updatedAt": "2021-06-09T18:18:46.687Z",
            "typeId": 2,
            "brandId": 2
        }, {
            "id": 4,
            "name": "Xs",
            "price": 62990,
            "rating": 0,
            "img": "9dc7b848-dc81-42a5-8a96-a7a208eada52.jpg",
            "createdAt": "2021-06-09T18:20:33.911Z",
            "updatedAt": "2021-06-09T18:20:33.911Z",
            "typeId": 2,
            "brandId": 2
        }, {
            "id": 5,
            "name": "8 Plus",
            "price": 27990,
            "rating": 0,
            "img": "2556fb0d-851a-4110-a478-66cd09fbc6e8.jpg",
            "createdAt": "2021-06-09T18:21:53.216Z",
            "updatedAt": "2021-06-09T18:21:53.216Z",
            "typeId": 2,
            "brandId": 2
        }, {
            "id": 6,
            "name": "Galaxy S21 Ultra",
            "price": 100990,
            "rating": 0,
            "img": "abad4928-9122-4e93-b1e3-eeeccd6f0421.jpg",
            "createdAt": "2021-06-09T18:24:32.609Z",
            "updatedAt": "2021-06-09T18:24:32.609Z",
            "typeId": 2,
            "brandId": 1
        }, {
            "id": 7,
            "name": "Galaxy S21",
            "price": 75990,
            "rating": 0,
            "img": "f1958866-bfaf-4cfc-aeec-3edf0c19cc96.jpg",
            "createdAt": "2021-06-09T18:25:34.650Z",
            "updatedAt": "2021-06-09T18:25:34.650Z",
            "typeId": 2,
            "brandId": 1
        }, {
            "id": 8,
            "name": "Galaxy S20 FE G780G",
            "price": 45990,
            "rating": 0,
            "img": "3294aed7-fbf2-4562-b6d4-0bdc55d0699b.jpg",
            "createdAt": "2021-06-09T18:26:50.804Z",
            "updatedAt": "2021-06-09T18:26:50.804Z",
            "typeId": 2,
            "brandId": 1
        }, {
            "id": 9,
            "name": "RB38T676FWW",
            "price": 43890,
            "rating": 0,
            "img": "06eecc1a-4474-4676-ad01-0519d8cccd8e.jpg",
            "createdAt": "2021-06-09T18:30:15.179Z",
            "updatedAt": "2021-06-09T18:30:15.179Z",
            "typeId": 1,
            "brandId": 1
        }];
        this._selectedType = {};
        this._selectedBrand = {};

        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    setSelectedType(type) {
        this._selectedType = type;
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }

    get selectedType() {
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }
}