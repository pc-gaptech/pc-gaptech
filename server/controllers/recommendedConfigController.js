"use strict";

const {
	CPU,
	GPU,
	Motherboard,
	CPUCooler,
	RAM,
	Storage,
	Casing,
	PowerSupply,
	RecommendedConfig,
	Game,
} = require("../models");

class RecommendedConfigController {
	static async addOne(req, res, next) {}

	static async getOne(req, res, next) {
		try {
			let gamesId = req.query.gamesId;
			gamesId = gamesId.split(",");

			const highestRating = 0;
			gamesId.forEach(async (id) => {
				try {
					const game = await Game.findByPk(id);
					if (game.rating > highestRating) {
						highestRating = game.rating;
					}
				} catch (err) {
					next(err);
				}
			});

			const result = await RecommendedConfig.findOne({ where: { rating: highestRating } });
			res.status(200).json(result);
		} catch (err) {
			next(err);
		}
	}
}

module.exports = RecommendedConfigController;
