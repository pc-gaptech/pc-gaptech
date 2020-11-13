"use strict";

const request = require("supertest");
const app = require("../app");

describe("Test Recommended Config", () => {
	test("Create new Recommended Config successfull", (done) => {
		const configData = {
			name: "Recommend_Config",
			CPU_id: 1,
			CPU_Cooler_id: 1,
			Motherboard_id: 1,
			GPU_id: 1,
			RAM_id: 1,
			Storage_id: 1,
			Power_Supply_id: 1,
			Casing_id: 1,
		};
		request(app)
			.post("/recommendpc")
			.send(configData)
			.set("Accept", "application/json")
			.then((res) => {
				const { status, body } = res;
				expect(status).toBe(201);
				expect(body).toEqual(
					expect.objectContaining({
						id: expect.any(Number),
						name: expect.any(String),
						rating: expect.any(Number),
						CPU_id: expect.objectContaining({ id: expect.any(Number), name: expect.any(String) }),
						CPU_Cooler_id: expect.objectContaining({
							id: expect.any(Number),
							name: expect.any(String),
						}),
						Motherboard_id: expect.objectContaining({
							id: expect.any(Number),
							name: expect.any(String),
						}),
						GPU_id: expect.objectContaining({ id: expect.any(Number), name: expect.any(String) }),
						RAM_id: expect.objectContaining({ id: expect.any(Number), name: expect.any(String) }),
						Storage_id: expect.objectContaining({
							id: expect.any(Number),
							name: expect.any(String),
						}),
						Power_Supply_id: expect.objectContaining({
							id: expect.any(Number),
							name: expect.any(String),
						}),
						Casing_id: expect.objectContaining({
							id: expect.any(Number),
							name: expect.any(String),
						}),
					}),
				);
				done();
			});
	});

	test("Create new Recommended Config Failed, Invalid component ID", (done) => {
		const configData = {
			name: "Recommend_Config",
			CPU_id: 1,
			CPU_Cooler_id: 1,
			Motherboard_id: 1,
			GPU_id: 1,
			RAM_id: 1,
			Storage_id: 1,
			Power_Supply_id: 1,
			Casing_id: "7684as",
		};
		request(app)
			.post("/recommendpc")
			.send(configData)
			.set("Accept", "application/json")
			.then((res) => {
				const { status, body } = res;
				expect(status).toBe(400);
				expect(body).toEqual(
					expect.objectContaining({
						message: "Invalid Component ID",
					}),
				);
				done();
			});
	});

	test("Create new Recommended Config Failed, Component ID not found", (done) => {
		const configData = {
			name: "Recommend_Config",
			CPU_id: 1,
			CPU_Cooler_id: 1,
			Motherboard_id: 1,
			GPU_id: 1,
			RAM_id: 1,
			Storage_id: 1,
			Power_Supply_id: 1,
			Casing_id: 123456789,
		};
		request(app)
			.post("/recommendpc")
			.send(configData)
			.set("Accept", "application/json")
			.then((res) => {
				const { status, body } = res;
				expect(status).toBe(400);
				expect(body).toEqual(
					expect.objectContaining({
						message: "Invalid Component ID",
					}),
				);
				done();
			});
	});

	test("Create new Recommended Config Failed, Component incomplete", (done) => {
		const configData = {
			name: "Recommend_Config",
			CPU_id: 1,
			CPU_Cooler_id: 1,
			Motherboard_id: 1,
			GPU_id: 1,
			RAM_id: 1,
			Storage_id: 1,
		};
		request(app)
			.post("/recommendpc")
			.send(configData)
			.set("Accept", "application/json")
			.then((res) => {
				const { status, body } = res;
				expect(status).toBe(400);
				expect(body).toEqual(
					expect.objectContaining({
						message: "Invalid Component ID",
					}),
				);
				done();
			});
	});

	test("Get recommended config based on games ratings Successfull", (done) => {
		request(app)
			.get("/recommendpc")
			.query({ gamesId: "1,3,4,5" })
			.set("Accept", "application/json")
			.then((res) => {
				const { status, body } = res;
				expect(status).toBe(200);
				expect(body).toEqual(
					expect.objectContaining({
						id: expect.any(Number),
						name: expect.any(String),
						rating: expect.any(Number),
						CPU_id: expect.objectContaining({ id: expect.any(Number), name: expect.any(String) }),
						CPU_Cooler_id: expect.objectContaining({
							id: expect.any(Number),
							name: expect.any(String),
						}),
						Motherboard_id: expect.objectContaining({
							id: expect.any(Number),
							name: expect.any(String),
						}),
						GPU_id: expect.objectContaining({ id: expect.any(Number), name: expect.any(String) }),
						RAM_id: expect.objectContaining({ id: expect.any(Number), name: expect.any(String) }),
						Storage_id: expect.objectContaining({
							id: expect.any(Number),
							name: expect.any(String),
						}),
						Power_Supply_id: expect.objectContaining({
							id: expect.any(Number),
							name: expect.any(String),
						}),
						Casing_id: expect.objectContaining({
							id: expect.any(Number),
							name: expect.any(String),
						}),
					}),
				);
				done();
			});
	});

	test("Get recommended config based on games ratings Failed, no query string", (done) => {
		request(app)
			.get("/recommendpc")
			.set("Accept", "application/json")
			.then((res) => {
				const { status, body } = res;
				expect(status).toBe(400);
				expect(body).toEqual(
					expect.objectContaining({
						message: "Games is Required",
					}),
				);
				done();
			});
	});
});
