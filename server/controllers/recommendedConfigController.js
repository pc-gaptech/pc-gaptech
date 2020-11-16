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
        next({
          name: "BadRequest",
          message: "CPU and Motherboard Socket is Incompatable",
        });
      }

      // check cpu chipset and motherboard chipset
      let isChipsetCompatible = false;
      pickedCPU.chipset.forEach((el) => {
        if (el === pickedMotherboard.chipset) {
          isChipsetCompatible = true;
        }
      });
      if (!isChipsetCompatible) {
        next({
          name: "BadRequest",
          message: "CPU and Motherboard Chipset is Incompatable",
        });
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
        next({
          name: "BadRequest",
          message: "RAM and Motherboard is Incompatable",
        });
      }

      // check casing and motherboard
      const pickedCasing = await Casing.findByPk(CasingId);
      if (!pickedCasing) {
        next({
          name: "BadRequest",
          message: "Invalid Component ID",
        });
      }
      if (pickedCasing.form_factor !== pickedMotherboard.form_factor) {
        next({
          name: "BadRequest",
          message: "Case and Motherboard is Incompatable",
        });
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
        next({
          name: "BadRequest",
          message: "CPU and CPU Cooler is Incompatable",
        });
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
        pickedGPU.rating >= pickedCPU.max_rating
          ? pickedCPU.max_rating
          : pickedGPU.rating;
      const config = await RecommendedConfig.create({
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
      });

      const result = await RecommendedConfig.findByPk(config.id, {
        include: { all: true },
      });

      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  }

  static async getOne(req, res, next) {
    try {
      let gamesId = req.query.gamesId;
      if (!gamesId) {
        res.status(400).json({ message: "Games is Required" });
      }
      gamesId = gamesId.split(",");

      let highestRating = 0;

      for (let i = 0; i < gamesId.length; i++) {
        const game = await Game.findByPk(gamesId[i]);
        if (+game.rating > +highestRating) {
          highestRating = +game.rating;
        }
      }
      console.log(highestRating, "highest");
      const result = await RecommendedConfig.findOne({
        where: { rating: highestRating },
        include: { all: true },
      });
      res.status(200).json(result);
    } catch (err) {
      console.log(err, "masok sini geesss");
      next(err);
    }
  }
}

module.exports = RecommendedConfigController;
