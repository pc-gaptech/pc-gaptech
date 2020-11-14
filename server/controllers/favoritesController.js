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
	SavedConfig,
} = require("../models");

class FavoriteController {
	static async addOne(req, res, next) {
		try {
			const UserId = req.userData.id;
			// ADA CHECKER ATURAN DI SINI
			const {
				CPUId,
				GPUId,
				MotherboardId,
				RAMId,
				CPUCoolerId,
				StorageId,
				CasingId,
				PowerSupplyId,
				name,
			} = req.body;

			const pickedCPU = await CPU.findByPk(CPUId);
			const pickedGPU = await GPU.findByPk(GPUId);

			const configRating =
				pickedGPU.rating >= pickedCPU.rating ? pickedCPU.rating : pickedGPU.rating;

			const config = await SavedConfig.create({
				CPUId,
				GPUId,
				MotherboardId,
				RAMId,
				CPUCoolerId,
				StorageId,
				CasingId,
				PowerSupplyId,
				name,
				rating: configRating,
				UserId,
			});

			const result = await SavedConfig.findByPk(config.id, { include: { all: true } });
			res.status(201).json(result);
		} catch (err) {
			next(err);
		}
	}
	static async getAll(req, res, next) {
		try {
			const UserId = req.userData.id;
			const favorites = await SavedConfig.findAll({
				where: { id: UserId },
				include: { all: true },
			});
			res.status(200).json(favorites);
		} catch (err) {
			next(err);
		}
	}
	static async getOne(req, res, next) {
		try {
			const configId = req.params.id;
			const favorite = await SavedConfig.findByPk(configId, { include: { all: true } });
			res.status(200).json(favorite);
		} catch (err) {
			next(err);
		}
	}
	static async deleteOne(req, res, next) {
		try {
			const configId = req.params.id;
			const result = await SavedConfig.destroy({ where: { id: configId } });
			if (result) {
				res.status(200).json({ message: "Delete Success" });
			} else {
				next({ name: "BadRequest", message: "Delete Failed" });
			}
		} catch (err) {
			next(err);
		}
	}
}

module.exports = FavoriteController;
