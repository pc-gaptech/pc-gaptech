const { Game } = require("../models/index");
const { Op } = require("sequelize");

class GamesController {
	static async fetchAllGames(req, res, next) {
		try {
			const dataGames = await Game.findAll({
				attributes: { exclude: ["createdAt", "updatedAt"] },
			});

			if (dataGames) {
				res.status(200).json(dataGames);
			} else {
				next({ name: "NotFound", message: "Data not found!" });
			}
		} catch (err) {
			next(err);
		}
	}

	static async addGame(req, res, next) {
		try {
			const inputGame = {
				name: req.body.name,
				description: req.body.description,
				picture_url: req.body.picture_url,
				rating: +req.body.rating,
			};
			const resultAddGame = await Game.create(inputGame);
			if (resultAddGame) {
				res.status(201).json(resultAddGame);
			}
		} catch (err) {
			next(err);
		}
	}

	static async recommendedGames(req, res, next) {
		try {
			const ratingRecommendedConfig = +req.query.config_rating;
			console.log(ratingRecommendedConfig);

			const resultRecommendedGames = await Game.findAll({
				where: { rating: { [Op.lte]: [ratingRecommendedConfig] } },
				order: [["rating", "DESC"]],
			});

			res.status(200).json(resultRecommendedGames);
		} catch (err) {
			next(err);
		}
	}
}

module.exports = GamesController;
