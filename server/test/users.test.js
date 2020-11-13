"use strict";

const request = require("supertest");
const app = require("../app");

describe("Test User Register and login feature", () => {
	const userData = {
		username: "test_username",
		firstname: "test_firstname",
		lastname: "test_lastname",
		email: "test_email@email.com",
		password: "test_password",
	};

	test("Register User Successfull", (done) => {
		request(app)
			.post("/register")
			.send(userData)
			.set("Accept", "application/json")
			.then((res) => {
				const { status, body } = res;
				expect(status).toBe(201);
				expect(body).toEqual(
					expect.objectContaining({
						id: expect.any(Number),
						username: userData.lastname,
						firstname: userData.firstname,
						lastname: userData.lastname,
						email: userData.email,
						password: expect.any(String),
					}),
				);
				done();
			});
	});

	test("Register User Failed, no Email", (done) => {
		userData.email = "";
		request(app)
			.post("/register")
			.send(userData)
			.set("Accept", "application/json")
			.then((res) => {
				const { status, body } = res;
				expect(status).toBe(400);
				expect(body).toEqual(
					expect.objectContaining({
						message: "E-mail is Required",
					}),
				);
				done();
			});
	});

	test("Register User Failed, Invalid Email", (done) => {
		userData.email = "InvalidEmail@";
		request(app)
			.post("/register")
			.send(userData)
			.set("Accept", "application/json")
			.then((res) => {
				const { status, body } = res;
				expect(status).toBe(400);
				expect(body).toEqual(
					expect.objectContaining({
						message: "E-mail is Invalid",
					}),
				);
				done();
			});
	});

	test("Register User Failed, Invalid Password", (done) => {
		userData.email = "test_email@email.com";
		userData.password = "";
		request(app)
			.post("/register")
			.send(userData)
			.set("Accept", "application/json")
			.then((res) => {
				const { status, body } = res;
				expect(status).toBe(400);
				expect(body).toEqual(
					expect.objectContaining({
						message: "Password is Required",
					}),
				);
				done();
			});
	});

	test("Register User Failed, Invalid Username", (done) => {
		userData.password = "test_password";
		userData.username = "";
		request(app)
			.post("/register")
			.send(userData)
			.set("Accept", "application/json")
			.then((res) => {
				const { status, body } = res;
				expect(status).toBe(400);
				expect(body).toEqual(
					expect.objectContaining({
						message: "Username is Required",
					}),
				);
				done();
			});
	});

	test("Login is Successfull", (done) => {
		const loginData = {
			username: "test_username",
			password: "test_password",
		};
		request(app)
			.post("/login")
			.send(loginData)
			.set("Accept", "application/json")
			.then((res) => {
				const { status, body } = res;
				expect(status).toBe(201);
				expect(body).toEqual(
					expect.objectContaining({
						token_key: expect.any(String),
					}),
				);
				done();
			});
	});

	test("login is Failed, Wrong username", () => {
		const loginData = {
			username: "wrong_username",
			password: "test_password",
		};

		request(app)
			.post("/login")
			.send(loginData)
			.set("Accept", "application/json")
			.then((res) => {
				const { status, body } = res;
				expect(status).toBe(401);
				expect(body).toEqual(
					expect.objectContaining({
						message: "Wrong Password/Email",
					}),
				);
				done();
			});
	});

	test("login is Failed, Wrong password", () => {
		const loginData = {
			username: "test_username",
			password: "wrong_password",
		};

		request(app)
			.post("/login")
			.send(loginData)
			.set("Accept", "application/json")
			.then((res) => {
				const { status, body } = res;
				expect(status).toBe(401);
				expect(body).toEqual(
					expect.objectContaining({
						message: "Wrong Password/Email",
					}),
				);
				done();
			});
	});
});
