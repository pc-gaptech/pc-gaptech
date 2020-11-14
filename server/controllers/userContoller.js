const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { User } = require("../models/index");

class UserController {
  static async loginHandler(req, res, next) {
    const obj = {
      email: req.body.email,
      password: req.body.password,
    };
    if (!obj.email || !obj.password) {
      next({
        name: "BadRequest",
        message: "Email and Password can't Empty",
      });
    }
    try {
      const data = await User.findOne({
        where: {
          email: obj.email,
        },
      });
      if (!data || !comparePassword(obj.password, data.password)) {
        next({
          name: "Unauthorized",
          message: "Wrong email/password",
        });
      } else {
        const obj = {
          id: data.id,
          email: data.email,
          is_admin: data.is_admin,
        };
        const access_token = createToken(obj);
        res.status(201).json({
          access_token,
          is_admin: obj.is_admin,
        });
        req.headers = access_token;
      }
    } catch (err) {
      next(err);
    }
  }

  static async registerHandler(req, res, next) {
    try {
      const obj = {
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
      };
      const dataUser = await User.create(obj);

      res.status(201).json({
        id: dataUser.id,
        username: dataUser.username,
        firstname: dataUser.firstname,
        lastname: dataUser.lastname,
        email: dataUser.email,
        password: dataUser.password,
        email: dataUser.email,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
