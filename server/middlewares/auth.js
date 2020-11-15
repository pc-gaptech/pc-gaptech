const { decodeToken } = require("../helpers/jwt");
const { User, SavedConfig } = require("../models/index");

const authentication = (req, res, next) => {
	const { access_token } = req.headers;
	if (access_token) {
		req.userData = decodeToken(access_token, "rahasia");

		User.findByPk(req.userData.id)
			.then((data) => {
				if (!data) {
					res.status(404).json({ message: "Not Found" });
				} else {
					next();
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
				id: +req.userData.id,
			},
		});
		if (user && user.is_admin) {
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
		const config = await SavedConfig.findByPk(req.params.id);
		if (config && config.UserId === req.userData.id) {
			next();
		} else {
			res.status(401).json({ message: "You do not have access" });
		}
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

module.exports = { authentication, authorizationAdmin, authorizationClient };
