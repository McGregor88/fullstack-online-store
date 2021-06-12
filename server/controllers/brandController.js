const { Brand } = require('../models/models');
const ApiError = require('../error/ApiError');

class BrandController {
    async create(req, res, next) {
        try {
            const { name } = req.body;
            const brand = await Brand.create({ name });
    
            return res.json(brand);
        } catch (error) {
            next(ApiError.badRequest(error.message || 'Непредвиденная ошибка'));
        }

    }

    async getAll(req, res, next) {
        try {
            const brands = await Brand.findAll();
            return res.json(brands);
        } catch (error) {
            next(ApiError.badRequest(error.message || 'Непредвиденная ошибка'));
        }
    }

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const { name } = req.body;
            const updatedBrand = await Brand.update(
                { name },
                { where: { id } }
            );

            if (updatedBrand) {
                const brand = await Brand.findOne({ 
                    where: { id } 
                });

                return res.json(brand);
            }

            throw new Error('Brand not found');
        } catch (error) {
            next(ApiError.badRequest(error.message || 'Непредвиденная ошибка'));
        }
    }

    async removeById(req, res, next) {
        try {
            const { id } = req.params;
            const deletedBrand = await Brand.destroy({
                where: { id }
            });

            if (deletedBrand) {
                next(ApiError.noContent('Brand deleted'));
            }

            throw new Error('Brand not found');
        } catch (error) {
            next(ApiError.badRequest(error.message || 'Непредвиденная ошибка'));
        }
    }
}

module.exports = new BrandController();