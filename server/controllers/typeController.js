const { Type } = require('../models/models');
const ApiError = require('../error/ApiError');

class TypeController {

    async create(req, res, next) {
        try {
            const { name } = req.body;
            const type = await Type.create({ name });
    
            return res.json(type);
        } catch (error) {
            next(ApiError.badRequest(error.message || 'Непредвиденная ошибка'));
        }
    }

    async getAll(req, res, next) {
        try {
            const types = await Type.findAll();
            return res.json(types);
        } catch (error) {
            next(ApiError.badRequest(error.message || 'Непредвиденная ошибка'));
        }
    }

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const { name } = req.body;
            const updatedType = await Type.update(
                { name },
                { where: { id } }
            );

            if (updatedType) {
                const type = await Type.findOne({ 
                    where: { id } 
                });

                return res.json(type);
            }

            throw new Error('Type not found');
        } catch (error) {
            next(ApiError.badRequest(error.message || 'Непредвиденная ошибка'));
        }
    }

    async removeById(req, res, next) {
        try {
            const { id } = req.params;
            const deletedType = await Type.destroy({
                where: { id }
            });

            if (deletedType) {
                next(ApiError.noContent('Type deleted'));
            }

            throw new Error('Type not found');
        } catch (error) {
            next(ApiError.badRequest(error.message || 'Непредвиденная ошибка'));
        }
    }
}

module.exports = new TypeController();
