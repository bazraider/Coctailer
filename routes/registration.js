const registrationRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');
const { User } = require('../db/models');

registrationRouter.post(
  '/register',
  check('email', 'Некорректный E-mail').isEmail(),
  check('password', 'Длина пароля должна быть не менее 6 символов').isLength({ min: 6 }),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные при регистрации',
        });
      }

      const { name, email, password } = req.body;
      const candidate = await User.findOne({
        where: { email },
      });
      if (candidate) {
        return res.status(400).json({ message: 'Такой пользователь уже существует' });
      }

      const user = await User.create({
        name,
        email,
        password: await bcrypt.hash(password, 10),
      });

      res.status(201).json({ message: 'Пользователь успешно зарегистрирован!' });
    } catch (error) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
  },
);

module.exports = registrationRouter;
