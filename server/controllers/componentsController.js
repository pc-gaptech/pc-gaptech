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
} = require("../models");

class ComponentsController {
	static async getAll(req, res, next) {
		try {
			const cpuData = await CPU.findAll();
			const gpuData = await GPU.findAll();
			const motherboardData = await Motherboard.findAll();
			const cpuCoolerData = await CPUCooler.findAll();
			const ramData = await RAM.findAll();
			const storageData = await Storage.findAll();
			const casingData = await Casing.findAll();
			const powerSupplyData = await PowerSupply.findAll();

			res.status(200).json({
				CPU: cpuData,
				GPU: gpuData,
				Motherboard: motherboardData,
				CPUCooler: cpuCoolerData,
				RAM: ramData,
				Storage: storageData,
				Casing: casingData,
				PowerSupply: powerSupplyData,
			});
		} catch (err) {
			next(err);
		}
	}

	static async getAllOneType(req, res, next) {
		try {
			let result = [];
			const { component } = req.params;
			switch (component) {
				case "cpu":
					result = await CPU.findAll();
					break;
				case "gpu":
					result = await GPU.findAll();
					break;
				case "motherboard":
					result = await Motherboard.findAll();
					break;
				case "powerSupply":
					result = await PowerSupply.findAll();
					break;
				case "ram":
					result = await RAM.findAll();
					break;
				case "cpucooler":
					result = await CPUCooler.findAll();
					break;
				case "storage":
					result = await Storage.findAll();
					break;
				case "casing":
					result = await Casing.findAll();
					break;
				default:
					next({ name: "BadRequest", message: "Component type name Invalid" });
					break;
			}
			res.status(200).json(result);
		} catch (err) {
			next(err);
		}
	}

	static async getOne(req, res, next) {
		try {
			let result = {};
			const { component, id } = req.params;
			switch (component) {
				case "cpu":
					result = await CPU.findByPk(id);
					break;
				case "gpu":
					result = await GPU.findByPk(id);
					break;
				case "motherboard":
					result = await Motherboard.findByPk(id);
					break;
				case "powerSupply":
					result = await PowerSupply.findByPk(id);
					break;
				case "ram":
					result = await RAM.findByPk(id);
					break;
				case "cpuooler":
					result = await CPUCooler.findByPk(id);
					break;
				case "storage":
					result = await Storage.findByPk(id);
					break;
				case "casing":
					result = await Casing.findByPk(id);
					break;
				default:
					next({ name: "BadRequest", message: "Component type name Invalid" });
					break;
			}
			res.status(200).json(result);
		} catch (err) {
			next(err);
		}
	}

	static async addOne(req, res, next) {
		try {
			const {
				name,
				price,
				manufacturer,
				picture_url,
				socket,
				chipset_cpu,
				TDP,
				core_count,
				isIGPU,
				max_rating,
				power_draw,
				gpu_chipset,
				rating,
				chipset,
				form_factor,
				max_power,
				efficiency,
				memory_type,
				memory_speed,
				chipset_memory,
				socket_cpu_cooler,
				capacity,
				storage_type,
			} = req.body;
			const { component } = req.params;
			let result = {};
			let componentInput = {
				name,
				price,
				manufacturer,
				picture_url,
			};
			switch (component) {
				case "cpu":
					componentInput = {
						...componentInput,
						socket,
						chipset: chipset_cpu,
						TDP,
						core_count,
						isIGPU,
						max_rating,
						power_draw,
					};
					result = await CPU.create(componentInput);
					break;
				case "gpu":
					componentInput = {
						...componentInput,
						gpu_chipset,
						rating,
						power_draw,
					};
					result = await GPU.create(componentInput);
					break;
				case "motherboard":
					componentInput = {
						...componentInput,
						socket,
						chipset,
						form_factor,
						power_draw,
					};
					result = await Motherboard.create(componentInput);
					break;
				case "powerSupply":
					componentInput = {
						...componentInput,
						max_power,
						efficiency,
					};
					result = await PowerSupply.create(componentInput);
					break;
				case "ram":
					componentInput = {
						...componentInput,
						memory_speed,
						memory_type,
						chipset: chipset_memory,
						power_draw,
					};
					result = await RAM.create(componentInput);
					break;
				case "cpucooler":
					componentInput = {
						...componentInput,
						socket: socket_cpu_cooler,
						TDP,
						power_draw,
					};
					result = await CPUCooler.create(componentInput);
					break;
				case "storage":
					componentInput = {
						...componentInput,
						capacity,
						power_draw,
						storage_type,
					};
					result = await Storage.create(componentInput);
					break;
				case "casing":
					componentInput = {
						...componentInput,
						form_factor,
					};
					result = await Casing.create(componentInput);
					break;
				default:
					next({ name: "BadRequest", message: "Component type name Invalid" });
					break;
			}
			res.status(201).json(result);
		} catch (err) {
			next(err);
		}
	}

	static async updateOne(req, res, next) {
		try {
			const {
				name,
				price,
				manufacturer,
				picture_url,
				socket,
				chipset_cpu,
				TDP,
				core_count,
				isIGPU,
				max_rating,
				power_draw,
				gpu_chipset,
				rating,
				chipset,
				form_factor,
				max_power,
				efficiency,
				memory_type,
				memory_speed,
				chipset_memory,
				socket_cpu_cooler,
				capacity,
				storage_type,
			} = req.body;
			const { component, id } = req.params;
			let result = {};
			let componentInput = {
				name,
				price,
				manufacturer,
				picture_url,
			};
			switch (component) {
				case "cpu":
					componentInput = {
						...componentInput,
						socket,
						chipset: chipset_cpu,
						TDP,
						core_count,
						isIGPU,
						max_rating,
						power_draw,
					};
					result = await CPU.update(componentInput, { where: { id } });
					break;
				case "gpu":
					componentInput = {
						...componentInput,
						gpu_chipset,
						rating,
						power_draw,
					};
					result = await GPU.update(componentInput, { where: { id } });
					break;
				case "motherboard":
					componentInput = {
						...componentInput,
						socket,
						chipset,
						form_factor,
						power_draw,
					};
					result = await Motherboard.update(componentInput, { where: { id } });
					break;
				case "powerSupply":
					componentInput = {
						...componentInput,
						max_power,
						efficiency,
					};
					result = await PowerSupply.update(componentInput, { where: { id } });
					break;
				case "ram":
					componentInput = {
						...componentInput,
						memory_speed,
						memory_type,
						chipset: chipset_memory,
						power_draw,
					};
					result = await RAM.update(componentInput, { where: { id } });
					break;
				case "cpucooler":
					componentInput = {
						...componentInput,
						socket: socket_cpu_cooler,
						TDP,
						power_draw,
					};
					result = await CPUCooler.update(componentInput, { where: { id } });
					break;
				case "storage":
					componentInput = {
						...componentInput,
						capacity,
						power_draw,
						storage_type,
					};
					result = await Storage.update(componentInput, { where: { id } });
					break;
				case "casing":
					componentInput = {
						...componentInput,
						form_factor,
					};
					result = await Casing.update(componentInput, { where: { id } });
					break;
				default:
					next({ name: "BadRequest", message: "Component type name Invalid" });
					break;
			}
			if (result[0]) {
				res.status(201).json({ message: "Update Success" });
			}
		} catch (err) {
			next(err);
		}
	}

	static async deleteOne(req, res, next) {
		try {
			let result = {};
			const { component, id } = req.params;
			switch (component) {
				case "cpu":
					result = await CPU.destroy({ where: { id } });
					break;
				case "gpu":
					result = await GPU.destroy({ where: { id } });
					break;
				case "motherboard":
					result = await Motherboard.destroy({ where: { id } });
					break;
				case "powerSupply":
					result = await PowerSupply.destroy({ where: { id } });
					break;
				case "ram":
					result = await RAM.destroy({ where: { id } });
					break;
				case "cpucooler":
					result = await CPUCooler.destroy({ where: { id } });
					break;
				case "storage":
					result = await Storage.destroy({ where: { id } });
					break;
				case "casing":
					result = await Casing.destroy({ where: { id } });
					break;
				default:
					next({ name: "BadRequest", message: "Component type name Invalid" });
					break;
			}
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

module.exports = ComponentsController;
