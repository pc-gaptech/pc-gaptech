const request = require("supertest");
const app = require("../app");
const { expect, test } = require("@jest/globals");
const { sequelize, User, Game } = require("../models/index");
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
      return Game.destroy({ truncate: true });
    })
    .then((ok) => {
      done();
    })
    .catch((err) => {
      done();
    });
});

describe("Test Get all one type of component, (/parts/:component)", () => {
  test("Get All CPU", (done) => {
    request(app)
      .get("/parts/cpu")
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
              socket: expect.any(String),
              chipset: expect.arrayContaining([expect.any(String)]),
              TDP: expect.any(Number),
              manufacturer: expect.any(String),
              power_draw: expect.any(Number),
              core_count: expect.any(Number),
              isIGPU: expect.any(Boolean),
              max_rating: expect.any(Number),
              price: expect.any(Number),
              picture_url: expect.any(String),
            }),
          ])
        );
        done();
      });
  });

  test("Get All CPU_Cooler", (done) => {
    request(app)
      .get("/parts/cpucooler")
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
              socket: expect.arrayContaining([expect.any(String)]),
              TDP: expect.any(Number),
              manufacturer: expect.any(String),
              power_draw: expect.any(Number),
              price: expect.any(Number),
              picture_url: expect.any(String),
            }),
          ])
        );
        done();
      });
  });

  test("Get All Motherboard", (done) => {
    request(app)
      .get("/parts/motherboard")
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
              socket: expect.any(String),
              chipset: expect.any(String),
              form_factor: expect.any(String),
              manufacturer: expect.any(String),
              power_draw: expect.any(Number),
              price: expect.any(Number),
              picture_url: expect.any(String),
            }),
          ])
        );
        done();
      });
  });

  test("Get All Storage", (done) => {
    request(app)
      .get("/parts/storage")
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
              capacity: expect.any(Number),
              manufacturer: expect.any(String),
              power_draw: expect.any(Number),
              storage_type: expect.any(String),
              price: expect.any(Number),
              picture_url: expect.any(String),
            }),
          ])
        );
        done();
      });
  });

  test("Get All RAM", (done) => {
    request(app)
      .get("/parts/ram")
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
              memory_type: expect.any(String),
              chipset: expect.arrayContaining([expect.any(String)]),
              manufacturer: expect.any(String),
              power_draw: expect.any(Number),
              memory_speed: expect.any(Number),
              price: expect.any(Number),
              picture_url: expect.any(String),
            }),
          ])
        );
        done();
      });
  });

  test("Get All GPU", (done) => {
    request(app)
      .get("/parts/gpu")
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
              // memory_type: expect.any(String),
              gpu_chipset: expect.any(String),
              manufacturer: expect.any(String),
              power_draw: expect.any(Number),
              rating: expect.any(Number),
              price: expect.any(Number),
              picture_url: expect.any(String),
            }),
          ])
        );
        done();
      });
  });

  test("Get All Power Supply", (done) => {
    request(app)
      .get("/parts/powerSupply")
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
              efficiency: expect.any(String),
              manufacturer: expect.any(String),
              max_power: expect.any(Number),
              price: expect.any(Number),
              picture_url: expect.any(String),
            }),
          ])
        );
        done();
      });
  });

  test("Get All Casing", (done) => {
    request(app)
      .get("/parts/casing")
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
              form_factor: expect.any(String),
              manufacturer: expect.any(String),
              price: expect.any(Number),
              picture_url: expect.any(String),
            }),
          ])
        );
        done();
      });
  });

  test("Component part name is wrong", (done) => {
    request(app)
      .get("/parts/random")
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(400);
        expect(body).toEqual(
          expect.objectContaining({
            message: "Component type name Invalid",
          })
        );
        done();
      });
  });
});

describe("Test get detail from components, (/parts/:component/:id/details)", () => {
  let id = 1;
  test("Get Detail of 1 CPU", (done) => {
    request(app)
      .get(`/parts/cpu/${id}/detail`)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            socket: expect.any(String),
            chipset: expect.arrayContaining([expect.any(String)]),
            TDP: expect.any(Number),
            manufacturer: expect.any(String),
            power_draw: expect.any(Number),
            core_count: expect.any(Number),
            isIGPU: expect.any(Boolean),
            max_rating: expect.any(Number),
            price: expect.any(Number),
            picture_url: expect.any(String),
          })
        );
        done();
      });
  });

  test("Get Detail of 1 CPU_Cooler", (done) => {
    request(app)
      .get(`/parts/cpucooler/${id}/detail`)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            socket: expect.arrayContaining([expect.any(String)]),
            TDP: expect.any(Number),
            manufacturer: expect.any(String),
            power_draw: expect.any(Number),
            price: expect.any(Number),
            picture_url: expect.any(String),
          })
        );
        done();
      });
  });

  test("Get Detail of 1 Motherboard", (done) => {
    request(app)
      .get(`/parts/motherboard/${id}/detail`)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            socket: expect.any(String),
            chipset: expect.any(String),
            form_factor: expect.any(String),
            manufacturer: expect.any(String),
            power_draw: expect.any(Number),
            price: expect.any(Number),
            picture_url: expect.any(String),
          })
        );
        done();
      });
  });

  test("Get Detail of 1 Casing", (done) => {
    request(app)
      .get(`/parts/casing/${id}/detail`)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        console.log(body);
        expect(body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            form_factor: expect.any(String),
            manufacturer: expect.any(String),
            price: expect.any(Number),
            picture_url: expect.any(String),
          })
        );
        done();
      });
  });

  test("Get Detail of 1 Power Supply", (done) => {
    request(app)
      .get(`/parts/powerSupply/${id}/detail`)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            efficiency: expect.any(String),
            max_power: expect.any(Number),
            manufacturer: expect.any(String),
            price: expect.any(Number),
            picture_url: expect.any(String),
          })
        );
        done();
      });
  });

  test("Get Detail of 1 Storage", (done) => {
    request(app)
      .get(`/parts/storage/${id}/detail`)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            capacity: expect.any(Number),
            storage_type: expect.any(String),
            power_draw: expect.any(Number),
            manufacturer: expect.any(String),
            price: expect.any(Number),
            picture_url: expect.any(String),
          })
        );
        done();
      });
  });

  test("Get Detail of 1 RAM", (done) => {
    request(app)
      .get(`/parts/ram/${id}/detail`)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            memory_type: expect.any(String),
            chipset: expect.arrayContaining([expect.any(String)]),
            manufacturer: expect.any(String),
            power_draw: expect.any(Number),
            memory_speed: expect.any(Number),
            price: expect.any(Number),
            picture_url: expect.any(String),
          })
        );
        done();
      });
  });

  test("Get Detail of 1 GPU", (done) => {
    request(app)
      .get(`/parts/gpu/${id}/detail`)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        console.log(body);
        expect(body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            price: expect.any(Number),
            manufacturer: expect.any(String),
            gpu_chipset: expect.any(String),
            price: expect.any(Number),
            picture_url: expect.any(String),
          })
        );
        done();
      });
  });

  test("Component part name is wrong", (done) => {
    request(app)
      .get("/parts/random/1/detail")
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(400);
        expect(body).toEqual(
          expect.objectContaining({
            message: "Component type name Invalid",
          })
        );
        done();
      });
  });

  //?
  test("Component part id is wrong", (done) => {
    request(app)
      .get(`/parts/cpu/random/detail`)
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(400);
        console.log(body);
        expect(body).toEqual(
          expect.objectContaining({
            message: "Component type name Invalid",
          })
        );
        done();
      });
  });
});

describe("Test of /games endpoint", () => {
  test("Succesfully fetch games", (done) => {
    request(app)
      .get("/games")
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              description: expect.any(String),
              id: expect.any(Number),
              name: expect.any(String),
              picture_url: expect.any(String),
              rating: expect.any(Number),
            }),
          ])
        );
        done();
      });
  });

  test("Sucuesfully fetch reccommended games based on config rating", (done) => {
    request(app)
      .get("/games/recommend")
      .query({ config_rating: 8 })
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
              description: expect.any(String),
              picture_url: expect.any(String),
              rating: expect.any(Number),
            }),
          ])
        );
        done();
      });
  });

  test("Failed fetch reccommended games based on config rating", (done) => {
    request(app)
      .get("/games/recommend")
      .query({ config_rating: 0 })
      .set("access_token", access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(404);
        expect(body).toEqual(
          expect.objectContaining({
            message: "Not Found",
          })
        );
        done();
      });
  });

  const newGames = {
    name: "Dota2",
    description: "dota game",
    picture_url:
      "https://dypdvfcjkqkg2.cloudfront.net/original/5860280-9251.png",
    rating: 5,
  };

  test("Successfully Add Games", (done) => {
    request(app)
      .post("/games/add")
      .send(newGames)
      .set("access_token", access_token)
      .set("Accept", "application/json")
      .then((response) => {
        const { status, body } = response;
        expect(status).toBe(201);
        expect(body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            description: expect.any(String),
            picture_url: expect.any(String),
            rating: expect.any(Number),
          })
        );
        done();
      });
  });

  test("Failed Add Games name is empty", (done) => {
    const newGames = {
      name: "",
      description: "dota game",
      picture_url:
        "https://dypdvfcjkqkg2.cloudfront.net/original/5860280-9251.png",
      rating: 5,
    };
    request(app)
      .post("/games/add")
      .send(newGames)
      .set("access_token", access_token)
      .set("Accept", "application/json")
      .then((response) => {
        const { status, body } = response;
        expect(status).toBe(400);
        expect(body).toEqual(
          expect.objectContaining({
            message: "Game name is Required",
          })
        );
        done();
      });
  });

  test("Failed Add Games description is empty", (done) => {
    const newGames = {
      name: "Dota2",
      description: "",
      picture_url:
        "https://dypdvfcjkqkg2.cloudfront.net/original/5860280-9251.png",
      rating: 5,
    };
    request(app)
      .post("/games/add")
      .send(newGames)
      .set("access_token", access_token)
      .set("Accept", "application/json")
      .then((response) => {
        const { status, body } = response;
        expect(status).toBe(400);
        expect(body).toEqual(
          expect.objectContaining({
            message: "Game Description is Required",
          })
        );
        done();
      });
  });

  test("Failed Add Games picture_url is empty", (done) => {
    const newGames = {
      name: "Dota",
      description: "dota game",
      picture_url: "",
      rating: 8,
    };
    request(app)
      .post("/games/add")
      .send(newGames)
      .set("access_token", access_token)
      .set("Accept", "application/json")
      .then((response) => {
        const { status, body } = response;
        expect(status).toBe(400);
        expect(body).toEqual(
          expect.objectContaining({
            message: "Game Picture URL is Required",
          })
        );
        done();
      });
  });

  test("Failed Add Games rating is empty", (done) => {
    const newGames = {
      name: "Dota2",
      description: "dota2",
      picture_url:
        "https://dypdvfcjkqkg2.cloudfront.net/original/5860280-9251.png",
      rating: null,
    };
    request(app)
      .post("/games/add")
      .send(newGames)
      .set("access_token", access_token)
      .set("Accept", "application/json")
      .then((response) => {
        const { status, body } = response;
        expect(status).toBe(400);
        expect(body).toEqual(
          expect.objectContaining({
            message: "Rating is Invalid",
          })
        );
        done();
      });
  });
});

describe("Testing of /favorites endpoint", () => {
  let idSavedConfig;
  test("Successfully Add Favorites", (done) => {
    let newFavorite = {
      name: "Ryzen boss",
      UserId: +idAdminLoggedIn,
      rating: 1,
      CPUId: 1,
      CPUCoolerId: 1,
      MotherboardId: 1,
      GPUId: 1,
      RAMId: 1,
      StorageId: 1,
      PowerSupplyId: 1,
      CasingId: 1,
    };
    request(app)
      .post("/favorites/add")
      .send(newFavorite)
      .set("access_token", access_token)
      .set("Accept", "application/json")
      .then((response) => {
        const { status, body } = response;
        idSavedConfig = +body.id;
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
            User: expect.objectContaining({
              id: expect.any(Number),
              firstname: expect.any(String),
            }),
          })
        );
        done();
      });
  });

  test("Successfully fetch favorite config by the user", (done) => {
    request(app)
      .get("/favorites")
      .set("access_token", access_token)
      .set("Accept", "application/json")
      .then((response) => {
        const { status, body } = response;
        expect(status).toBe(200);
        expect(body).toEqual(
          expect.arrayContaining([
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
              User: expect.objectContaining({
                id: expect.any(Number),
                firstname: expect.any(String),
              }),
            }),
          ])
        );
        done();
      });
  });

  test("Successfully get one favorite config by the user", (done) => {
    request(app)
      .get(`/favorites/${idSavedConfig}/detail`)
      .set("access_token", access_token)
      .set("Accept", "application/json")
      .then((response) => {
        const { status, body } = response;
        expect(status).toBe(200);
        console.log(body, "<<<<<<<<");
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
            User: expect.objectContaining({
              id: expect.any(Number),
              firstname: expect.any(String),
            }),
          })
        );
        done();
      });
  });

  test("Successfully remove one favorite config by the user", (done) => {
    request(app)
      .delete(`/favorites/${idSavedConfig}/delete`)
      .set("access_token", access_token)
      .set("Accept", "application/json")
      .then((response) => {
        const { status, body } = response;
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
