const { decodeToken } = require("../helpers/jwt");
const { User } = require("../models/index");

let id;

const authentication = (req, res, next) => {
  const { access_token } = req.headers;
  if (access_token) {
    const decode = decodeToken(access_token, "rahasia");
    req.userData = decode;
    id = req.userData.id;
    User.findByPk(req.userData.id)
      .then((data) => {
        if (!data) {
          next({
            name: "NotFound",
            message: "Not Found",
          });
        } else {
          res.status(404).json({ message: "Not Found" });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: err.message });
      });
  } else {
    res.status(401).json({ message: "You are not authenticated" });
  }
};

const authorizationAdmin = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: +id,
      },
    });
    if (user && user.role === "admin") {
      next();
    } else {
      res.status(401).json({ message: "Forbidden" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const authorizationClient = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: +id,
      },
    });
    if (user && user.role === "client") {
      next();
    } else {
      res.status(401).json({ message: "Forbidden" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { authentication, authorizationAdmin, authorizationClient };
