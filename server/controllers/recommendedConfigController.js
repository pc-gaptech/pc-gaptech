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
	static async addOne(req, res, next) {
		try {
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
			const pickedMotherboard = await Motherboard.findByPk(MotherboardId);

			// check cpu and motherboard socket
			if (pickedCPU.socket !== pickedMotherboard.socket) {
				next({ name: "BadRequest", message: "CPU and Motherboard Socket is Incompatable" });
			}

			// check cpu chipset and motherboard chipset
			let isChipsetCompatible = false;
			pickedCPU.chipset.forEach((el) => {
				if (el === pickedMotherboard.chipset) {
					isChipsetCompatible = true;
				}
			});
			if (!isChipsetCompatible) {
				next({ name: "BadRequest", message: "CPU and Motherboard Chipset is Incompatable" });
			}

			// check ram and motherboard
			const pickedRAM = await RAM.findByPk(RAMId);
			isChipsetCompatible = false;
			pickedRAM.chipset.forEach((el) => {
				if (el === pickedMotherboard.chipset) {
					isChipsetCompatible = true;
				}
			});
			if (!isChipsetCompatible) {
				next({ name: "BadRequest", message: "RAM and Motherboard is Incompatable" });
			}

			// check casing and motherboard
			const pickedCasing = await Casing.findByPk(CasingId);
			if (pickedCasing.form_factor !== pickedMotherboard.form_factor) {
				next({ name: "BadRequest", message: "Case and Motherboard is Incompatable" });
			}

			// check cpu cooler and CPU
			let isSocketCompatible = false;
			const pickedCPUCooler = await CPUCooler.findByPk(CPUCoolerId);
			pickedCPUCooler.socket.forEach((el) => {
				if (el === pickedCPU.socket) {
					isSocketCompatible = true;
				}
			});
			if (!isSocketCompatible) {
				next({ name: "BadRequest", message: "CPU and CPU Cooler is Incompatable" });
			}

			// check total power and power supply total power
			const pickedPowerSupply = await PowerSupply.findByPk(PowerSupplyId);
			const pickedStorage = await Storage.findByPk(StorageId);
			const pickedGPU = await GPU.findByPk(GPUId);

			const totalPower =
				pickedCPU.power_draw +
				pickedCPUCooler.power_draw +
				pickedMotherboard.power_draw +
				pickedRAM.power_draw +
				pickedGPU.power_draw +
				pickedStorage.power_draw;

			if (totalPower >= pickedPowerSupply) {
				next({ name: "BadRequest", message: "Power Supply is incefficient" });
			}

			// if Success
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
