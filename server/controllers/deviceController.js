const uuid = require('uuid');
const path = require('path');

const { Device, DeviceInfo } = require('../models/models');
const ApiError = require('../error/ApiError');

class DeviceController {
    async create(req, res, next) {
        try {
            let { name, price, brandId, typeId, info } = req.body;
            const { img } = req.files;
            const fileName = uuid.v4() + '.jpg';
    
            img.mv(path.resolve(__dirname, '..', 'static', fileName));
            const device = await Device.create({ name, price, brandId, typeId, img: fileName });

            if (info) {
                info = JSON.parse(info);
                info.forEach(i => {
                    const { title, description } = i;

                    DeviceInfo.create({
                        title,
                        description,
                        deviceId: device.id
                    });
                });
            }
    
            return res.json(device);
        } catch (error) {
            next(ApiError.badRequest(error.message || 'Непредвиденная ошибка'));
        }
    }

    async getAll(req, res, next) {
        try {
            let { brandId, typeId, limit, page } = req.body;
            let devices;
            page = page || 1;
            limit = limit || 9;
            let offset = page * limit - limit;
    
            if (!brandId && !typeId) {
                devices = await Device.findAndCountAll({ limit, offset });
            } else if (brandId && !typeId) {
                devices = await Device.findAndCountAll({ 
                    where: { brandId },
                    limit,
                    offset
                });
            } else if (!brandId && typeId) {
                devices = await Device.findAndCountAll({ 
                    where: { typeId },
                    limit,
                    offset
                });
            } else {
                devices = await Device.findAndCountAll({ 
                    where: { brandId, typeId },
                    limit,
                    offset
                });
            }
    
            return res.json(devices);
        } catch (error) {
            next(ApiError.badRequest(error.message  || 'Непредвиденная ошибка'));
        }
    }

    async getById(req, res, next) {
        try {
            const { id } = req.params;
            const device = await Device.findOne({
                where: { id },
                include: [{
                    model: DeviceInfo,
                    as: 'info'
                }]
            });
    
            return res.json(device);
        } catch (error) {
            next(ApiError.badRequest(error.message  || 'Непредвиденная ошибка'));
        }
    }

    async removeById(req, res, next) {
        try {
            const { id } = req.params;
            const deletedDevice = await Device.destroy({
                where: { id }
            });

            if (deletedDevice) {
                next(ApiError.noContent('Device deleted'));
            }

            throw new Error('Device not found');
        } catch (error) {
            next(ApiError.badRequest(error.message || 'Непредвиденная ошибка'));
        }
    }
}

module.exports = new DeviceController();