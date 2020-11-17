const request = require("supertest");
const app = require("../app");
const { expect, test } = require("@jest/globals");
const { sequelize } = require("../models/index");
const axios = require("axios");

describe("Test /checkPrice endpoint", () => {
  it("succesfully get data price from bukalapak", async (done) => {
    request(app);
    let input = "ryzen 5";
    await axios({
      url: `http://localhost:3000/bukalapak/checkprice?q=${input}`,
      method: "GET",
    }).then((res) => {
      const result = res.data;
      expect(res.status).toBe(200);
      expect(result).toEqual(
        expect.objectContaining({ result: expect.any(String) })
      );

      done();
    });
  });

  it("succesfully get data price from tokopedia", async (done) => {
    request(app);
    let input = "ryzen 5";
    await axios({
      url: `http://localhost:3000/tokopedia/checkprice?q=${input}`,
      method: "GET",
    }).then((res) => {
      const result = res.data;
      expect(res.status).toBe(200);
      expect(result).toEqual(
        expect.objectContaining({ result: expect.any(String) })
      );

      done();
    });
  });

  it("succesfully get data price from tokopedia & bukalapak", async (done) => {
    request(app);
    let input = "ryzen 5";
    await axios({
      url: `http://localhost:3000/tokopedia/checkprice?q=${input}`,
      method: "GET",
    }).then((res) => {
      const result = res.data;
      expect(res.status).toBe(200);
      expect(result).toEqual(
        expect.objectContaining({ result: expect.any(String) })
      );
    });

    await axios({
      url: `http://localhost:3000/bukalapak/checkprice?q=${input}`,
      method: "GET",
    }).then((res) => {
      const result = res.data;
      expect(res.status).toBe(200);
      expect(result).toEqual(
        expect.objectContaining({ result: expect.any(String) })
      );

      done();
    });
  });

  test("failed get data price from bukalapak network error", (done) => {
    request(app)
      .get("/bukalapak/checkprice")
      .query({ q: "ryzen 5" })
      .set("Accept", "application/json")
      .then((res) => {
        const { status, body } = res;
        expect(status).toBe(500);
        expect(body).toEqual(
          expect.objectContaining({
            message: "Network Error",
          })
        );
        done();
      });
  });

  test("failed get data price from tokopedia network error", (done) => {
    request(app)
      .get("/tokopedia/checkprice")
      .query({ q: "ryzen 5" })
      .set("Accept", "application/json")
      .then((res) => {
        const { status, body } = res;
        expect(status).toBe(500);
        expect(body).toEqual(
          expect.objectContaining({
            message: "Network Error",
          })
        );
        done();
      });
  });

  //   test("success get data price from tokopedia", (done) => {
  //     request(app)
  //       .get("/tokopedia/checkprice")
  //       .query({ q: "ryzen 5" })
  //       .set("Accept", "application/json")
  //       .then((res) => {
  //         const { status, body } = res;
  //         expect(status).toBe(200);
  //         // expect(body).toEqual(
  //         //   expect.objectContaining({
  //         //     message: "Network Error",
  //         //   })
  //         // );
  //         done();
  //       });
  //   });
});
