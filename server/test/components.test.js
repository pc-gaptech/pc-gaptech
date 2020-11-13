const request = require("supertest");
const app = require("../app");

describe("Test Get all one type of component, (/parts/:component)", () => {
	test("Get All CPU", (done) => {
		request(app)
			.get("/parts/CPU")
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
					]),
				);
				done();
			});
	});

	test("Get All CPU_Cooler", (done) => {
		request(app)
			.get("/parts/CPU_cooler")
			.then((res) => {
				const { body, status } = res;
				expect(status).toBe(200);
				expect(body).toEqual(
					expect.arrayContaining([
						expect.objectContaining({
							id: expect.any(Number),
							name: expect.any(String),
							socket: expect.any(String),
							TDP: expect.any(Number),
							manufacturer: expect.any(String),
							power_draw: expect.any(Number),
							price: expect.any(Number),
							picture_url: expect.any(String),
						}),
					]),
				);
				done();
			});
	});

	test("Get All Motherboard", (done) => {
		request(app)
			.get("/parts/motherboard")
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
					]),
				);
				done();
			});
	});

	test("Get All Storage", (done) => {
		request(app)
			.get("/parts/storage")
			.then((res) => {
				const { body, status } = res;
				expect(status).toBe(200);
				expect(body).toEqual(
					expect.arrayContaining([
						expect.objectContaining({
							id: expect.any(Number),
							name: expect.any(String),
							capacity: expect.any(String),
							manufacturer: expect.any(String),
							power_draw: expect.any(Number),
							storage_type: expect.any(String),
							price: expect.any(Number),
							picture_url: expect.any(String),
						}),
					]),
				);
				done();
			});
	});

	test("Get All RAM", (done) => {
		request(app)
			.get("/parts/RAM")
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
					]),
				);
				done();
			});
	});

	test("Get All GPU", (done) => {
		request(app)
			.get("/parts/GPU")
			.then((res) => {
				const { body, status } = res;
				expect(status).toBe(200);
				expect(body).toEqual(
					expect.arrayContaining([
						expect.objectContaining({
							id: expect.any(Number),
							name: expect.any(String),
							memory_type: expect.any(String),
							GPU_chipset: expect.any(String),
							manufacturer: expect.any(String),
							power_draw: expect.any(Number),
							rating: expect.any(Number),
							price: expect.any(Number),
							picture_url: expect.any(String),
						}),
					]),
				);
				done();
			});
	});

	test("Get All Power Supply", (done) => {
		request(app)
			.get("/parts/power_supply")
			.then((res) => {
				const { body, status } = res;
				expect(status).toBe(200);
				expect(body).toEqual(
					expect.arrayContaining([
						expect.objectContaining({
							id: expect.any(Number),
							name: expect.any(String),
							efficiency: expect.any(Number),
							manufacturer: expect.any(String),
							max_power: expect.any(Number),
							price: expect.any(Number),
							picture_url: expect.any(String),
						}),
					]),
				);
				done();
			});
	});

	test("Get All Casing", (done) => {
		request(app)
			.get("/parts/casing")
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
					]),
				);
				done();
			});
	});

	test("Component part name is wrong", (done) => {
		request(app)
			.get("/parts/random")
			.then((res) => {
				const { body, status } = res;
				expect(status).toBe(404);
				expect(body).toEqual(
					expect.objectContaining({
						status: expect.any("Wrong Component Part"),
					}),
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
			.get("/parts/CPU")
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
					]),
				);
				done();
			});
	});
});
