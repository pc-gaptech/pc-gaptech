"use strict";

const request = require("supertest");
const app = require("../app");
const { expect, test } = require("@jest/globals");
const { sequelize, User, RecommendedConfig, Game } = require("../models/index");
const { createToken } = require("../helpers/jwt");

let idGame1;
let idGame2;
let access_token;
beforeAll(async (done) => {
  try {
    const createDota = await Game.create({
      name: "dota",
      description: "gamedota",
      picture_url:
        "https://cdn-5c489073f911c8147449b474.closte.com/wp-content/uploads/2020/02/Dota-2-scaled-1-1600x901.jpg",
      rating: 8,
    });

    idGame1 = createDota.id;

    const createDota2 = await Game.create({
      name: "dota2",
      description: "gamedota2",
      picture_url:
        "https://cdn-5c489073f911c8147449b474.closte.com/wp-content/uploads/2020/02/Dota-2-scaled-1-1600x901.jpg",
      rating: 8,
    });

    idGame2 = createDota2.id;

    const createRecommendedConfig = await RecommendedConfig.create({
      name: "Config Rekomen",
      CPUId: 1,
      CPUCoolerId: 1,
      MotherboardId: 1,
      GPUId: 1,
      RAMId: 1,
      StorageId: 1,
      PowerSupplyId: 1,
      CasingId: 1,
      rating: 8,
    });

    console.log(createRecommendedConfig);

    const userData = {
      username: "test_username",
      firstname: "test_firstname",
      lastname: "test_lastname",
      email: "test_email@email.com",
      password: "test_password",
      is_admin: true,
    };
    const createUser = await User.create(userData);
    if (createUser) {
      await User.findOne({
        where: {
          id: createUser.id,
        },
      });
      access_token = createToken({
        id: createUser.id,
        email: createUser.email,
        is_admin: createUser.is_admin,
      });
    }

    done();
  } catch (err) {
    console.log(err);
    done();
  }
});

afterAll((done) => {
  User.destroy({ truncate: true })
    .then((ok) => {
      //   return RecommendedConfig.destroy({ truncate: true });
      // })
      // .then((ok) => {
      done();
    })
    .catch((err) => {
      done();
    });
});

describe("Test Recommended Config", () => {
  test("Create new Recommended Config successfull", (done) => {
    const configData = {
      name: "Recommend_Config",
      CPUId: 1,
      CPUCoolerId: 1,
      MotherboardId: 1,
      GPUId: 1,
      RAMId: 1,
      StorageId: 1,
      PowerSupplyId: 1,
      CasingId: 1,
      rating: 8,
    };
    request(app)
      .post("/recommendpc")
      .send(configData)
      .set("access_token", access_token)
      .set("Accept", "application/json")
      .then((res) => {
        const { status, body } = res;
        expect(status).toBe(201);
        expect(body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            rating: expect.any(Number),
            CPU: expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
            }),
            CPUCooler: expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
            }),
            Motherboard: expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
            }),
            GPU: expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
            }),
            RAM: expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
            }),
            Storage: expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
            }),
            PowerSupply: expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
            }),
            Casing: expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
            }),
          })
        );
        done();
      });
  });

  test("Create new Recommended Config Failed, Invalid component ID", (done) => {
    const configData = {
      name: "Recommend_Config",
      CPUId: 1,
      CPUCoolerId: 1,
      MotherboardId: 1,
      GPUId: 1,
      RAMId: 1,
      StorageId: 1,
      PowerSupplyId: 1,
      CasingId: "470as",
      rating: 8,
    };
    request(app)
      .post("/recommendpc")
      .send(configData)
      .set("access_token", access_token)
      .set("Accept", "application/json")
      .then((res) => {
        const { status, body } = res;
        expect(status).toBe(400);
        expect(body).toEqual(
          expect.objectContaining({
            message: "Component type name Invalid",
          })
        );
        done();
      });
  });

  test("Create new Recommended Config Failed, Component ID not found", (done) => {
    const configData = {
      name: "Recommend_Config",
      CPUId: 1,
      CPUCoolerId: 1,
      MotherboardId: 1,
      GPUId: 1,
      RAMId: 1,
      StorageId: 1,
      PowerSupplyId: 1,
      CasingId: 213411,
      rating: 8,
    };
    request(app)
      .post("/recommendpc")
      .send(configData)
      .set("access_token", access_token)
      .set("Accept", "application/json")
      .then((res) => {
        const { status, body } = res;
        expect(status).toBe(400);
        expect(body).toEqual(
          expect.objectContaining({
            message: "Invalid Component ID",
          })
        );
        done();
      });
  });

  test("Create new Recommended Config Failed, Component incomplete", (done) => {
    const configData = {
      name: "Recommend_Config",
      CPUId: 1,
      CPUCoolerId: 1,
      MotherboardId: 1,
      GPUId: 1,
      RAMId: 1,
      StorageId: null,
      PowerSupplyId: 1,
      CasingId: 1,
      rating: 8,
    };
    request(app)
      .post("/recommendpc")
      .send(configData)
      .set("access_token", access_token)
      .set("Accept", "application/json")
      .then((res) => {
        const { status, body } = res;
        expect(status).toBe(400);
        expect(body).toEqual(
          expect.objectContaining({
            message: "Invalid Component ID",
          })
        );
        done();
      });
  });

  test("Get recommended config based on games ratings Successfull", (done) => {
    request(app)
      .get("/recommendpc")
      .query({ gamesId: `${idGame1},${idGame2}` })
      .set("access_token", access_token)
      .set("Accept", "application/json")
      .then((res) => {
        const { status, body } = res;
        console.log(body, "zazazazaza");
        expect(status).toBe(200);
        expect(body).toEqual(
          expect.objectContaining({
            // id: expect.any(Number),
            // name: expect.any(String),
            // rating: expect.any(Number),
            CPU: expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
            }),
            CPUCooler: expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
            }),
            Motherboard: expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
            }),
            GPU: expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
            }),
            RAM: expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
            }),
            Storage: expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
            }),
            PowerSupply: expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
            }),
            Casing: expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
            }),
          })
        );
        done();
      });
  });

  test("Get recommended config based on games ratings Failed, no query string", (done) => {
    request(app)
      .get("/recommendpc")
      .set("Accept", "application/json")
      .set("access_token", access_token)
      .then((res) => {
        const { status, body } = res;
        expect(status).toBe(400);
        expect(body).toEqual(
          expect.objectContaining({
            message: "Games is Required",
          })
        );
        done();
      });
  });
});
