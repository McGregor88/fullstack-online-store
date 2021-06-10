const { Type } = require('../models/models');
const ApiError = require('../error/ApiError');

class TypeController {

    async create(req, res) {
        const { name } = req.body;
        const type = await Type.create({ name });

        return res.json(type);
    }

    async getAll(req, res) {
        const types = await Type.findAll();
        return res.json(types);
    }

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const { name } = req.body;
            const type = await Type.update(
                { name },
                { where: { id } }
            );

            return res.json(type);
        } catch (error) {
            next(ApiError.badRequest(error.message || 'Непредвиденная ошибка'));
        }
    }

    async removeById(req, res, next) {
        try {
            const { id } = req.params;
            const type = await Type.destroy({
                where: { id }
            });

            return res.json(type);
        } catch (error) {
            next(ApiError.badRequest(error.message || 'Непредвиденная ошибка'));
        }
    }
}

module.exports = new TypeController();
