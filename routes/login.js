const loginRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const { User } = require('../db/models');

loginRouter.post(
  '/login',
  check('email', 'Введите корректный E-mail').normalizeEmail().isEmail(),
  check('password', 'Введите пароль').exists(),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные при авторизации',
        });
      }

      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(400).json({ message: 'Пользователь с таким e-mail не найден' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Неверный пароль, попробуйте снова' });
      }

      const token = jwt.sign(
        { userId: user.id },
        process.env.JWTSECRET,
        { expiresIn: '1h' },
      );

      res.json({ token, userId: user.id });
    } catch (error) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
  },
);

module.exports = loginRouter;
