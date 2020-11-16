const request = require("supertest");
const app = require("../app");
const { expect, test } = require("@jest/globals");
const { sequelize, User } = require("../models/index");
const { createToken } = require("../helpers/jwt");

let idAdminLoggedIn;
let access_token;
beforeAll((done) => {
  const userData = {
    username: "test_username",
    firstname: "test_firstname",
    lastname: "test_lastname",
    email: "test_email@email.com",
    password: "test_password",
    is_admin: true,
  };
  User.create(userData)
    .then((data) => {
      idAdminLoggedIn = data.id;
      return User.findOne({ where: { id: data.id } });
    })
    .then((data) => {
      access_token = createToken({
        id: data.id,
        email: data.email,
        is_admin: data.is_admin,
      });
      done();
    })
    .catch((err) => {
      done(err);
    });
});

afterAll((done) => {
  User.destroy({ truncate: true })
    .then((ok) => {
      done();
    })
    .catch((err) => {
      done();
    });
});

describe("Test post,put, delete component", () => {
  let idCPU;
  let idCPUCooler;
  let idMotherboard;
  let idCasing;
  let idPowerSupply;
  let idStorage;
  let idRAM;
  let idGPU;

  test("Create new CPU", (done) => {
    const newCPU = {
      name: "dasdas",
      socket: "AM4",
      chipset_cpu: ["A350", "B350", "B450"],
      TDP: 324,
      manufacturer: "AMD",
      power_draw: 321,
      core_count: 321,
      isIGPU: false,
      max_rating: 342,
      price: 342323,
      picture_url:
        "https://cdna.pcpartpicker.com/static/forever/images/product/09a31f32abb3daaf5ed9b849bd60e675.256p.jpg",
    };
    request(app)
      .post("/parts/cpu/add")
      .send(newCPU)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        idCPU = +body.id;
        expect(status).toBe(201);
        expect(body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            price: expect.any(Number),
            manufacturer: expect.any(String),
            picture_url: expect.any(String),
            socket: expect.any(String),
            chipset: expect.arrayContaining([expect.any(String)]),
            TDP: expect.any(Number),
            core_count: expect.any(Number),
            isIGPU: expect.any(Boolean),
            max_rating: expect.any(Number),
            power_draw: expect.any(Number),
          })
        );
        done();
      });
  });

  test("update one CPU", (done) => {
    const newCPU = {
      name: "test update kang",
      socket: "AM4",
      chipset_cpu: ["A350", "B350", "B450"],
      TDP: 324,
      manufacturer: "AMD",
      power_draw: 321,
      core_count: 321,
      isIGPU: false,
      max_rating: 342,
      price: 342323,
      picture_url:
        "https://cdna.pcpartpicker.com/static/forever/images/product/09a31f32abb3daaf5ed9b849bd60e675.256p.jpg",
    };
    request(app)
      .put(`/parts/cpu/${idCPU}/update`)
      .send(newCPU)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(201);
        expect(body).toEqual(
          expect.objectContaining({
            message: "Update Success",
          })
        );
        done();
      });
  });

  test("delete one CPU", (done) => {
    request(app)
      .delete(`/parts/cpu/${idCPU}/delete`)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body).toEqual(
          expect.objectContaining({
            message: "Delete Success",
          })
        );
        done();
      });
  });

  test("Create new CPU Cooler", (done) => {
    const newCPUCooler = {
      name: "dasdas",
      socket: ["AM4"],
      TDP: 324,
      manufacturer: "AMD",
      price: 342323,
      picture_url:
        "https://cdna.pcpartpicker.com/static/forever/images/product/09a31f32abb3daaf5ed9b849bd60e675.256p.jpg",
    };
    request(app)
      .post("/parts/cpucooler/add")
      .send(newCPUCooler)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        idCPUCooler = +body.id;
        expect(status).toBe(201);
        expect(body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
          })
        );
        done();
      });
  });

  test("update one CPU Cooler", (done) => {
    const newCPUCooler = {
      name: "update kang",
      socket: ["AM4"],
      TDP: 324,
      manufacturer: "AMD",
      price: 342323,
      picture_url:
        "https://cdna.pcpartpicker.com/static/forever/images/product/09a31f32abb3daaf5ed9b849bd60e675.256p.jpg",
    };
    request(app)
      .put(`/parts/cpucooler/${idCPUCooler}/update`)
      .send(newCPUCooler)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(201);
        expect(body).toEqual(
          expect.objectContaining({
            message: "Update Success",
          })
        );
        done();
      });
  });

  test("delete one CPU Cooler", (done) => {
    request(app)
      .delete(`/parts/cpucooler/${idCPUCooler}/delete`)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body).toEqual(
          expect.objectContaining({
            message: "Delete Success",
          })
        );
        done();
      });
  });

  test("Create new Motherboard", (done) => {
    const newMotherboard = {
      name: "AMD test",
      socket: "AM4",
      chipset: "A320",
      form_factor: "ATX",
      manufacturer: "AMD",
      power_draw: 100,
      price: 10000,
      picture_url:
        "https://cdna.pcpartpicker.com/static/forever/images/product/09a31f32abb3daaf5ed9b849bd60e675.256p.jpg",
    };
    request(app)
      .post("/parts/motherboard/add")
      .send(newMotherboard)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        idMotherboard = +body.id;
        expect(status).toBe(201);
        expect(body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
          })
        );
        done();
      });
  });

  test("update one Motherboard", (done) => {
    const newMotherboard = {
      name: "update mang",
      socket: "AM4",
      chipset: "A320",
      form_factor: "ATX",
      manufacturer: "AMD",
      power_draw: 100,
      price: 10000,
      picture_url:
        "https://cdna.pcpartpicker.com/static/forever/images/product/09a31f32abb3daaf5ed9b849bd60e675.256p.jpg",
    };
    request(app)
      .put(`/parts/motherboard/${idMotherboard}/update`)
      .send(newMotherboard)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(201);
        expect(body).toEqual(
          expect.objectContaining({
            message: "Update Success",
          })
        );
        done();
      });
  });

  test("delete one Motherboard", (done) => {
    request(app)
      .delete(`/parts/motherboard/${idMotherboard}/delete`)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body).toEqual(
          expect.objectContaining({
            message: "Delete Success",
          })
        );
        done();
      });
  });

  test("Create new Casing", (done) => {
    const newCasing = {
      name: "String",
      form_factor: "ATX",
      manufacturer: "String",
      price: 120000,
      picture_url:
        "https://cdna.pcpartpicker.com/static/forever/images/product/09a31f32abb3daaf5ed9b849bd60e675.256p.jpg",
    };
    request(app)
      .post("/parts/casing/add")
      .send(newCasing)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        idCasing = +body.id;
        expect(status).toBe(201);
        expect(body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
          })
        );
        done();
      });
  });

  test("update one Casing", (done) => {
    const newCasing = {
      name: "update test",
      form_factor: "ATX",
      manufacturer: "String",
      price: 120000,
      picture_url:
        "https://cdna.pcpartpicker.com/static/forever/images/product/09a31f32abb3daaf5ed9b849bd60e675.256p.jpg",
    };
    request(app)
      .put(`/parts/casing/${idCasing}/update`)
      .send(newCasing)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(201);
        expect(body).toEqual(
          expect.objectContaining({
            message: "Update Success",
          })
        );
        done();
      });
  });

  test("delete one Casing", (done) => {
    request(app)
      .delete(`/parts/casing/${idCasing}/delete`)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body).toEqual(
          expect.objectContaining({
            message: "Delete Success",
          })
        );
        done();
      });
  });

  test("Create new PowerSupply", (done) => {
    const newPowerSupply = {
      name: "String",
      efficiency: "String",
      max_power: 12,
      manufacturer: "AMD",
      price: 12000,
      picture_url:
        "https://cdna.pcpartpicker.com/static/forever/images/product/09a31f32abb3daaf5ed9b849bd60e675.256p.jpg",
    };
    request(app)
      .post("/parts/powerSupply/add")
      .send(newPowerSupply)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        idPowerSupply = +body.id;
        expect(status).toBe(201);
        expect(body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
          })
        );
        done();
      });
  });

  test("update PowerSupply", (done) => {
    const newPowerSupply = {
      name: "udate power supply",
      efficiency: "String",
      max_power: 12,
      manufacturer: "AMD",
      price: 12000,
      picture_url:
        "https://cdna.pcpartpicker.com/static/forever/images/product/09a31f32abb3daaf5ed9b849bd60e675.256p.jpg",
    };
    request(app)
      .put(`/parts/powerSupply/${idPowerSupply}/update`)
      .send(newPowerSupply)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(201);
        expect(body).toEqual(
          expect.objectContaining({
            message: "Update Success",
          })
        );
        done();
      });
  });

  test("delete PowerSupply", (done) => {
    request(app)
      .delete(`/parts/powersupply/${idPowerSupply}/delete`)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body).toEqual(
          expect.objectContaining({
            message: "Delete Success",
          })
        );
        done();
      });
  });

  test("Create new Storage", (done) => {
    const newStorage = {
      name: "String",
      capacity: 128,
      storage_type: "SATA_HDDs",
      power_draw: 12000,
      manufacturer: "dsdsdsdkdsksdksd",
      price: 1200000,
      picture_url:
        "https://cdna.pcpartpicker.com/static/forever/images/product/09a31f32abb3daaf5ed9b849bd60e675.256p.jpg",
    };
    request(app)
      .post("/parts/storage/add")
      .send(newStorage)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        idStorage = +body.id;
        expect(status).toBe(201);
        expect(body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
          })
        );
        done();
      });
  });

  test("update Storage", (done) => {
    const newStorage = {
      name: "update storage",
      capacity: 128,
      storage_type: "SATA_HDDs",
      power_draw: 12000,
      manufacturer: "dsdsdsdkdsksdksd",
      price: 1200000,
      picture_url:
        "https://cdna.pcpartpicker.com/static/forever/images/product/09a31f32abb3daaf5ed9b849bd60e675.256p.jpg",
    };
    request(app)
      .put(`/parts/storage/${idStorage}/update`)
      .send(newStorage)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(201);
        expect(body).toEqual(
          expect.objectContaining({
            message: "Update Success",
          })
        );
        done();
      });
  });

  test("update Storage", (done) => {
    const newStorage = {
      name: "update storage",
      capacity: 128,
      storage_type: "SATA_HDDs",
      power_draw: 12000,
      manufacturer: "dsdsdsdkdsksdksd",
      price: 1200000,
      picture_url:
        "https://cdna.pcpartpicker.com/static/forever/images/product/09a31f32abb3daaf5ed9b849bd60e675.256p.jpg",
    };
    request(app)
      .put(`/parts/storage/${idStorage}/update`)
      .send(newStorage)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(201);
        expect(body).toEqual(
          expect.objectContaining({
            message: "Update Success",
          })
        );
        done();
      });
  });

  test("delete Storage", (done) => {
    request(app)
      .delete(`/parts/storage/${idStorage}/delete`)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body).toEqual(
          expect.objectContaining({
            message: "Delete Success",
          })
        );
        done();
      });
  });

  test("Create new RAM", (done) => {
    const newRAM = {
      name: "aldam",
      memory_type: "DDR3",
      chipset: ["A350"],
      manufacturer: "sdsdsddds",
      power_draw: 121233,
      memory_speed: 12,
      price: 122222,
      picture_url:
        "https://cdna.pcpartpicker.com/static/forever/images/product/09a31f32abb3daaf5ed9b849bd60e675.256p.jpg",
    };
    request(app)
      .post("/parts/ram/add")
      .send(newRAM)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        idRAM = +body.id;
        expect(status).toBe(201);
        expect(body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
          })
        );
        done();
      });
  });

  test("update one RAM", (done) => {
    const newRAM = {
      name: "aldam",
      memory_type: "DDR3",
      chipset: ["A350"],
      manufacturer: "sdsdsddds",
      power_draw: 121233,
      memory_speed: 12,
      price: 122222,
      picture_url:
        "https://cdna.pcpartpicker.com/static/forever/images/product/09a31f32abb3daaf5ed9b849bd60e675.256p.jpg",
    };
    request(app)
      .put(`/parts/ram/${idRAM}/update`)
      .send(newRAM)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(201);
        expect(body).toEqual(
          expect.objectContaining({
            message: "Update Success",
          })
        );
        done();
      });
  });

  test("delete one RAM", (done) => {
    request(app)
      .delete(`/parts/ram/${idRAM}/delete`)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body).toEqual(
          expect.objectContaining({
            message: "Delete Success",
          })
        );
        done();
      });
  });

  test("Create new GPU", (done) => {
    const newGPU = {
      name: "String",
      power_draw: 200,
      manufacturer: "String",
      gpu_chipset: "gpu chipset",
      price: 120000,
      rating: 10,
      picture_url:
        "https://cdna.pcpartpicker.com/static/forever/images/product/09a31f32abb3daaf5ed9b849bd60e675.256p.jpg",
    };
    request(app)
      .post("/parts/gpu/add")
      .send(newGPU)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        idGPU = +body.id;
        expect(status).toBe(201);
        expect(body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
          })
        );
        done();
      });
  });

  test("update one GPU", (done) => {
    const newGPU = {
      name: "update GPU",
      power_draw: 200,
      manufacturer: "String",
      gpu_chipset: "gpu chipset",
      price: 120000,
      rating: 10,
      picture_url:
        "https://cdna.pcpartpicker.com/static/forever/images/product/09a31f32abb3daaf5ed9b849bd60e675.256p.jpg",
    };
    request(app)
      .put(`/parts/gpu/${idGPU}/update`)
      .send(newGPU)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(201);
        expect(body).toEqual(
          expect.objectContaining({
            message: "Update Success",
          })
        );
        done();
      });
  });

  test("delete one GPU", (done) => {
    request(app)
      .delete(`/parts/gpu/${idGPU}/delete`)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body).toEqual(
          expect.objectContaining({
            message: "Delete Success",
          })
        );
        done();
      });
  });
});
