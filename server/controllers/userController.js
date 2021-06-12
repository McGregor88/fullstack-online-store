const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { User, Basket } = require('../models/models');
const ApiError = require('../error/ApiError');

const generateJwt = (id, email, role) => {
    return jwt.sign(
        { id, email, role }, 
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    );
};

class UserController {
    async registration(req, res, next) {
        const { email, password, role } = req.body;

        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или пароль'));
        }

        const candidate = await User.findOne({
            where: { email }
        });

        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'));
        }

        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({ email, role, password: hashPassword });
        const userId = user.id;
        const basket = await Basket.create({ userId });
        const token = generateJwt(userId, email, user.role);

        return res.json({ token });
    }

    async login(req, res, next) {
        const { email, password } = req.body;
        const user = await User.findOne({
            where: { email }
        });

        if (!user) {
            return next(ApiError.internalServerError('Пользователь не найден'));
        }

        const comparePassword = bcrypt.compareSync(password, user.password);

        if (!comparePassword) {
            return next(ApiError.internalServerError('Указан неверный пароль'));
        }

        const token = generateJwt(user.id, user.email, user.role);

        return res.json({ token });
    }

    async auth(req, res) {
        const { id, email, role } = req.user;
        const token = generateJwt(id, email, role);

        return res.json({ token });
    }
}

module.exports = new UserController();