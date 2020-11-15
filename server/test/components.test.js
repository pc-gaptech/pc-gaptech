const request = require("supertest");
const app = require("../app");
const { expect, test } = require("@jest/globals");
const {sequelize, User} = require("../models/index")
const {createToken} = require("../helpers/jwt")

let access_token
beforeAll((done) => {
  const userData = {
    username: "test_username",
    firstname: "test_firstname",
    lastname: "test_lastname",
    email: "test_email@email.com",
    password: "test_password",
    is_admin: true
  }
  User.create(userData)
      .then(data => {
          return User.findOne({where: {id: data.id}})
      })
      .then(data => {
          access_token = createToken({
            id: data.id,
            email: data.email,
            is_admin: data.is_admin
          })
          done()
      })
      .catch(err => {
          done(err)
      })
})

afterAll((done) => {
  User.destroy({truncate: true})
      .then(ok => {
          done()
      })
      .catch(err => {
          done()
      })
})



describe("Test Get all one type of component, (/parts/:component)", () => {
  test("Get All CPU", (done) => {
    request(app)
      .get("/parts/cpu")
      .set('access_token', access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200)
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
      .get("/parts/cpuooler")
      .set('access_token', access_token)
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
      .set('access_token', access_token)
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
      .set('access_token', access_token)
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
      .set('access_token', access_token)
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
      .set('access_token', access_token)
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
      .set('access_token', access_token)
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
      .set('access_token', access_token)
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
      .set('access_token', access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(400);
        console.log(body, "<<<<<<<<<<<<<<<<<<<<<<")
        expect(body).toEqual(
          expect.objectContaining({
            message: "Component type name Invalid"
          })
        );
        done();
      });
  });
});

describe("Test get detail from components, (/parts/:component/:id/details)", () => {
  test("Get Detail of 1 CPU", (done) => {
    request(app)
      .get("/parts/cpu/1/detail")
      .set('access_token', access_token)
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
      .get("/parts/cpucooler/1/detail")
      .set('access_token', access_token)
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
      .get("/parts/motherboard/1/detail")
      .set('access_token', access_token)
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
      .get("/parts/casing/1/detail")
      .set('access_token', access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        console.log(body)
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
      .get("/parts/powerSupply/1/detail")
      .set('access_token', access_token)
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
      .get("/parts/storage/1/detail")
      .set('access_token', access_token)
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
      .get("/parts/ram/1/detail")
      .set('access_token', access_token)
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
      .get("/parts/gpu/1/detail")
      .set('access_token', access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        console.log(body)
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
      .set('access_token', access_token)
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
      .get("/parts/cpu/random/detail")
      .set('access_token', access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(404);
        console.log(body)
        expect(body).toEqual(
          expect.objectContaining({
            status: expect.any("Wrong ID Part"),
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
      .set('access_token', access_token)
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        console.log(body, "<<<<<<<<<<<<<<<")
        expect(body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(Number),
              title: expect.any(String),
              description: expect.any(String),
              picture_url: expect.any(String),
              rating: expect.any(Number),
            }),
          ])
        );
        done();
      });
  });

  test("Failed fetch games", (done) => {
    request(app)
      .get("/games")
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(404);
        expect(body).toEqual(
          expect.objectContaining({
            status: expect.any("Not Found"),
          })
        );
        done();
      });
  });

  test("Sucuesfully fetch reccommended games based on config rating", (done) => {
    request(app)
      .get("/games/recommend")
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(Number),
              title: expect.any(String),
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
      .then((res) => {
        const { body, status } = res;
        expect(status).toBe(404);
        expect(body).toEqual(
          expect.objectContaining({
            status: expect.any("Not Found"),
          })
        );
        done();
      });
  });

  const newGames = {
    title: "Dota",
    description: "dota game",
    picture_url:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kompasiana.com%2Flukmaman%2F574e1fc783afbd79178cb1e8%2Fdota-2-perang-dua-kubu-dalam-satu-logo&psig=AOvVaw0XjBDmnfZgu9FjLrXSspxz&ust=1605356655198000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODWlNzB_-wCFQAAAAAdAAAAABAD",
    rating: 8,
  };

  test("Successfully Add Games", (done) => {
    request(app)
      .post("/games/add")
      .send(newGames)
      .set("Accept", "application/json")
      .then((response) => {
        const { status, body } = response;
        expect(status).toBe(201);
        expect(body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            title: expect.any(String),
            description: expect.any(String),
            picture_url: expect.any(String),
            rating: expect.any(Number),
          })
        );
        done();
      });
  });

  test("Failed Add Games title is empty", (done) => {
    const newGames = {
      title: "",
      description: "dota game",
      picture_url:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kompasiana.com%2Flukmaman%2F574e1fc783afbd79178cb1e8%2Fdota-2-perang-dua-kubu-dalam-satu-logo&psig=AOvVaw0XjBDmnfZgu9FjLrXSspxz&ust=1605356655198000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODWlNzB_-wCFQAAAAAdAAAAABAD",
      rating: 8,
    };
    request(app)
      .post("/games/add")
      .send(newGames)
      .set("Accept", "application/json")
      .then((response) => {
        const { status, body } = response;
        expect(status).toBe(404);
        expect(body).toEqual(
          expect.objectContaining({
            status: "Title should not empty",
          })
        );
        done();
      });
  });

  test("Failed Add Games description is empty", (done) => {
    const newGames = {
      title: "Dota",
      description: "",
      picture_url:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kompasiana.com%2Flukmaman%2F574e1fc783afbd79178cb1e8%2Fdota-2-perang-dua-kubu-dalam-satu-logo&psig=AOvVaw0XjBDmnfZgu9FjLrXSspxz&ust=1605356655198000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODWlNzB_-wCFQAAAAAdAAAAABAD",
      rating: 8,
    };
    request(app)
      .post("/games/add")
      .send(newGames)
      .set("Accept", "application/json")
      .then((response) => {
        const { status, body } = response;
        expect(status).toBe(404);
        expect(body).toEqual(
          expect.objectContaining({
            status: "Description should not empty",
          })
        );
        done();
      });
  });

  test("Failed Add Games picture_url is empty", (done) => {
    const newGames = {
      title: "Dota",
      description: "dota game",
      picture_url: "",
      rating: 8,
    };
    request(app)
      .post("/games/add")
      .send(newGames)
      .set("Accept", "application/json")
      .then((response) => {
        const { status, body } = response;
        expect(status).toBe(404);
        expect(body).toEqual(
          expect.objectContaining({
            status: "Picture URL should not empty",
          })
        );
        done();
      });
  });

  test("Failed Add Games rating is empty", (done) => {
    const newGames = {
      title: "Dota",
      description: "dota game",
      picture_url:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kompasiana.com%2Flukmaman%2F574e1fc783afbd79178cb1e8%2Fdota-2-perang-dua-kubu-dalam-satu-logo&psig=AOvVaw0XjBDmnfZgu9FjLrXSspxz&ust=1605356655198000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODWlNzB_-wCFQAAAAAdAAAAABAD",
      rating: null,
    };
    request(app)
      .post("/games/add")
      .send(newGames)
      .set("Accept", "application/json")
      .then((response) => {
        const { status, body } = response;
        expect(status).toBe(404);
        expect(body).toEqual(
          expect.objectContaining({
            status: "Rating should not empty",
          })
        );
        done();
      });
  });
});

describe("Testing of /favorites endpoint", () => {
  let access_token = "aaaa";

  test("Successfully fetch favorite config by the user", (done) => {
    request(app)
      .post("/favorites/add")
      .set(access_token)
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
              User_id: {
                id: expect.any(Number),
                username: expect.any(String),
                firstName: expect.any(String),
                lastName: expect.any(String),
                email: expect.any(String),
                password: expect.any(String),
              },
              CPU_id: {
                id: expect.any(Number),
                name: expect.any(String),
                socket: expect.any(String),
                chipset: [expect.any(String)],
                TDP: expect.any(Number),
                manufacturer: expect.any(String),
                power_draw: expect.any(Number),
                core_count: expect.any(Number),
                is_iGPU: expect.any(Boolean),
                max_rating: expect.any(Number),
                price: expect.any(Number),
                picture_url: expect.any(String),
              },
              CPU_Cooler: {
                id: expect.any(Number),
                name: expect.any(String),
                socket: expect.any(String),
                TDP: expect.any(Number),
                manufacturer: expect.any(String),
                power_draw: expect.any(Number),
                price: expect.any(Number),
                picture_url: expect.any(String),
              },
              Motherboard: {
                id: expect.any(Number),
                name: expect.any(String),
                socket: expect.any(String),
                chipset: expect.any(String),
                form_factor: expect.any(String),
                manufacturer: expect.any(String),
                power_draw: expect.any(Number),
                price: expect.any(Number),
                picture_url: expect.any(String),
              },
              GPU_id: {
                id: expect.any(Number),
                name: expect.any(String),
                power_draw: expect.any(Number),
                manufacturer: expect.any(String),
                GPU_chipset: expect.any(String),
                price: expect.any(Number),
                rating: expect.any(Number),
                picture_url: expect.any(String),
              },
              RAM_id: {
                id: expect.any(Number),
                name: expect.any(String),
                memory_type: expect.any(String),
                chipset: [expect.any(String)],
                manufacturer: expect.any(String),
                power_draw: expect.any(Number),
                memory_speed: expect.any(Number),
                price: expect.any(Number),
                picture_url: expect.any(String),
              },
              Storage_id: {
                id: expect.any(Number),
                name: expect.any(String),
                capacity: expect.any(Number),
                storage_type: expect.any(String),
                power_draw: expect.any(Number),
                manufacturer: expect.any(String),
                price: expect.any(Number),
                picture_url: expect.any(String),
              },
              Power_Supply_id: {
                id: expect.any(Number),
                name: expect.any(String),
                efficiency: expect.any(String),
                max_power: expect.any(Number),
                manufacturer: expect.any(String),
                price: expect.any(Number),
                picture_url: expect.any(String),
              },
              Casing_id: {
                id: expect.any(Number),
                name: expect.any(String),
                form_factor: expect.any(String),
                manufacturer: expect.any(String),
                price: expect.any(Number),
                picture_url: expect.any(String),
              },
            }),
          ])
        );
        done();
      });
  });

  test("Successfully Add Favorites", (done) => {
    let newFavorite = {
      name: "string",
      rating: 1,
      CPU_id: 1,
      CPU_Cooler: 1,
      Motherboard: 1,
      GPU_id: 1,
      RAM_id: 1,
      Storage_id: 1,
      Power_Supply_id: 1,
      Casing_id: 1,
    };
    request(app)
      .post("/favorites/add")
      .send(newFavorite)
      .set(access_token)
      .set("Accept", "application/json")
      .then((response) => {
        const { status, body } = response;
        expect(status).toBe(201);
        expect(body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            rating: expect.any(Number),
            User_id: {
              id: expect.any(Number),
              username: expect.any(String),
              firstName: expect.any(String),
              lastName: expect.any(String),
              email: expect.any(String),
              password: expect.any(String),
            },
            CPU_id: {
              id: expect.any(Number),
              name: expect.any(String),
              socket: expect.any(String),
              chipset: [expect.any(String)],
              TDP: expect.any(Number),
              manufacturer: expect.any(String),
              power_draw: expect.any(Number),
              core_count: expect.any(Number),
              is_iGPU: expect.any(Boolean),
              max_rating: expect.any(Number),
              price: expect.any(Number),
              picture_url: expect.any(String),
            },
            CPU_Cooler: {
              id: expect.any(Number),
              name: expect.any(String),
              socket: expect.any(String),
              TDP: expect.any(Number),
              manufacturer: expect.any(String),
              power_draw: expect.any(Number),
              price: expect.any(Number),
              picture_url: expect.any(String),
            },
            Motherboard: {
              id: expect.any(Number),
              name: expect.any(String),
              socket: expect.any(String),
              chipset: expect.any(String),
              form_factor: expect.any(String),
              manufacturer: expect.any(String),
              power_draw: expect.any(Number),
              price: expect.any(Number),
              picture_url: expect.any(String),
            },
            GPU_id: {
              id: expect.any(Number),
              name: expect.any(String),
              power_draw: expect.any(Number),
              manufacturer: expect.any(String),
              GPU_chipset: expect.any(String),
              price: expect.any(Number),
              rating: expect.any(Number),
              picture_url: expect.any(String),
            },
            RAM_id: {
              id: expect.any(Number),
              name: expect.any(String),
              memory_type: expect.any(String),
              chipset: [expect.any(String)],
              manufacturer: expect.any(String),
              power_draw: expect.any(Number),
              memory_speed: expect.any(Number),
              price: expect.any(Number),
              picture_url: expect.any(String),
            },
            Storage_id: {
              id: expect.any(Number),
              name: expect.any(String),
              capacity: expect.any(Number),
              storage_type: expect.any(String),
              power_draw: expect.any(Number),
              manufacturer: expect.any(String),
              price: expect.any(Number),
              picture_url: expect.any(String),
            },
            Power_Supply_id: {
              id: expect.any(Number),
              name: expect.any(String),
              efficiency: expect.any(String),
              max_power: expect.any(Number),
              manufacturer: expect.any(String),
              price: expect.any(Number),
              picture_url: expect.any(String),
            },
            Casing_id: {
              id: expect.any(Number),
              name: expect.any(String),
              form_factor: expect.any(String),
              manufacturer: expect.any(String),
              price: expect.any(Number),
              picture_url: expect.any(String),
            },
          })
        );
        done();
      });
  });

  test("Successfully get one favorite config by the user", (done) => {
    request(app)
      .post("/favorites/1/detail")
      .set(access_token)
      .set("Accept", "application/json")
      .then((response) => {
        const { status, body } = response;
        expect(status).toBe(200);
        expect(body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            rating: expect.any(Number),
            User_id: {
              id: expect.any(Number),
              username: expect.any(String),
              firstName: expect.any(String),
              lastName: expect.any(String),
              email: expect.any(String),
              password: expect.any(String),
            },
            CPU_id: {
              id: expect.any(Number),
              name: expect.any(String),
              socket: expect.any(String),
              chipset: [expect.any(String)],
              TDP: expect.any(Number),
              manufacturer: expect.any(String),
              power_draw: expect.any(Number),
              core_count: expect.any(Number),
              is_iGPU: expect.any(Boolean),
              max_rating: expect.any(Number),
              price: expect.any(Number),
              picture_url: expect.any(String),
            },
            CPU_Cooler: {
              id: expect.any(Number),
              name: expect.any(String),
              socket: expect.any(String),
              TDP: expect.any(Number),
              manufacturer: expect.any(String),
              power_draw: expect.any(Number),
              price: expect.any(Number),
              picture_url: expect.any(String),
            },
            Motherboard: {
              id: expect.any(Number),
              name: expect.any(String),
              socket: expect.any(String),
              chipset: expect.any(String),
              form_factor: expect.any(String),
              manufacturer: expect.any(String),
              power_draw: expect.any(Number),
              price: expect.any(Number),
              picture_url: expect.any(String),
            },
            GPU_id: {
              id: expect.any(Number),
              name: expect.any(String),
              power_draw: expect.any(Number),
              manufacturer: expect.any(String),
              GPU_chipset: expect.any(String),
              price: expect.any(Number),
              rating: expect.any(Number),
              picture_url: expect.any(String),
            },
            RAM_id: {
              id: expect.any(Number),
              name: expect.any(String),
              memory_type: expect.any(String),
              chipset: [expect.any(String)],
              manufacturer: expect.any(String),
              power_draw: expect.any(Number),
              memory_speed: expect.any(Number),
              price: expect.any(Number),
              picture_url: expect.any(String),
            },
            Storage_id: {
              id: expect.any(Number),
              name: expect.any(String),
              capacity: expect.any(Number),
              storage_type: expect.any(String),
              power_draw: expect.any(Number),
              manufacturer: expect.any(String),
              price: expect.any(Number),
              picture_url: expect.any(String),
            },
            Power_Supply_id: {
              id: expect.any(Number),
              name: expect.any(String),
              efficiency: expect.any(String),
              max_power: expect.any(Number),
              manufacturer: expect.any(String),
              price: expect.any(Number),
              picture_url: expect.any(String),
            },
            Casing_id: {
              id: expect.any(Number),
              name: expect.any(String),
              form_factor: expect.any(String),
              manufacturer: expect.any(String),
              price: expect.any(Number),
              picture_url: expect.any(String),
            },
          })
        );
        done();
      });
  });

  test("Successfully remove one favorite config by the user", (done) => {
    request(app)
      .post("/favorites/1/delete")
      .set("Accept", "application/json")
      .then((response) => {
        const { status, body } = response;
        expect(status).toBe(200);
        expect(body).toEqual(
          expect.objectContaining({
            status: expect.any(String),
          })
        );
        done();
      });
  });
});

describe("Test post new component", () => {
  const newComponent = {
    name: "string",
    picture_url: "string",
    manufacturer: "string",
    price: 0,
    power_draw: 0,
    TDP: 0,
    socket: "string",
    chipset_cpu_cooler: ["string"],
    chipset: "string",
    chipset_cpu: ["string"],
    core_count: 0,
    is_iGPU: true,
    max_rating: 0,
    rating: 0,
    form_factor: "ATX",
    gpu_chipset: "string",
    "memory-speed": 0,
    max_power: 0,
    efficiency: "string",
  };

  test("Create new CPU", (done) => {
    request(app)
      .post("/parts/CPU")
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
              is_iGPU: expect.any(Boolean),
              max_rating: expect.any(Number),
              price: expect.any(Number),
              picture_url: expect.any(String),
            }),
          ])
        );
        done();
      });
  });
  
});
