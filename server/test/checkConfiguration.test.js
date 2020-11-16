const request = require("supertest");
const app = require("../app");
const { expect, test } = require("@jest/globals");
const { sequelize, User } = require("../models/index");

describe("Test /checkconfig endpoint", () => {
  test("successfully check compatibility", (done) => {
    const dataConfig = {
      CPUId: 1,
      GPUId: 1,
      MotherboardId: 1,
      RAMId: 1,
      CPUCoolerId: 1,
      StorageId: 1,
      CasingId: 1,
      PowerSupplyId: 1,
    };
    request(app)
      .post("/checkconfig")
      .send(dataConfig)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body).toEqual(
          expect.objectContaining({
            CPUId: expect.any(Number),
            GPUId: expect.any(Number),
            MotherboardId: expect.any(Number),
            RAMId: expect.any(Number),
            CPUCoolerId: expect.any(Number),
            StorageId: expect.any(Number),
            CasingId: expect.any(Number),
            PowerSupplyId: expect.any(Number),
          })
        );
        done();
      });
  });

  test("failed check compatibility CPU and Motherboard Socket is Incompatable", (done) => {
    const dataConfig = {
      CPUId: 1,
      GPUId: 1,
      MotherboardId: 4,
      RAMId: 1,
      CPUCoolerId: 1,
      StorageId: 1,
      CasingId: 1,
      PowerSupplyId: 1,
    };
    request(app)
      .post("/checkconfig")
      .send(dataConfig)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(400);
        expect(body).toEqual(
          expect.objectContaining({
            message: "CPU and Motherboard Socket is Incompatable",
          })
        );
        done();
      });
  });

  test("failed check compatibility RAM and Motherboard is Incompatable", (done) => {
    const dataConfig = {
      CPUId: 1,
      GPUId: 1,
      MotherboardId: 2,
      RAMId: 1,
      CPUCoolerId: 1,
      StorageId: 1,
      CasingId: 1,
      PowerSupplyId: 1,
    };
    request(app)
      .post("/checkconfig")
      .send(dataConfig)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(400);
        expect(body).toEqual(
          expect.objectContaining({
            message: "RAM and Motherboard is Incompatable",
          })
        );
        done();
      });
  });
});
