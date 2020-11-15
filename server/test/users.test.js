"use strict";

const request = require("supertest");
const app = require("../app");
const {sequelize} = require("../models/index")
const {queryInterface} = sequelize
// const {encryptPassword} = require("../helpers/bcrypt")


afterAll((done) => {
    queryInterface.bulkDelete('Users', null, {})
        .then(() => {
            done()
        })
        .catch(err => {
            //console.log(err)
            done()
        })
})

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
						username: userData.username,
						firstname: userData.firstname,
						lastname: userData.lastname,
						email: userData.email,
						// password: expect.any(String),
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
						message: "Email is Required",
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
						message: "Email is Invalid",
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

	test("Register User Failed, Invalid First Name", (done) => {
		userData.username = "test_username";
		userData.firstname = "";
		request(app)
			.post("/register")
			.send(userData)
			.set("Accept", "application/json")
			.then((res) => {
				const { status, body } = res;
				expect(status).toBe(400);
				expect(body).toEqual(
					expect.objectContaining({
						message: "First Name is Required",
					}),
				);
				done();
			});
	});

	test("Register User Failed, Invalid Last Name", (done) => {
		userData.firstname = "test_firstname";
		userData.lastname = "";
		request(app)
			.post("/register")
			.send(userData)
			.set("Accept", "application/json")
			.then((res) => {
				const { status, body } = res;
				expect(status).toBe(400);
				expect(body).toEqual(
					expect.objectContaining({
						message: "Last Name is Required",
					}),
				);
				done();
			});
	});

	test("Login is Successfull", (done) => {
		const loginData = {
			email: "test_email@email.com",
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
						access_token: expect.any(String),
						is_admin: expect.any(Boolean)
					}),
				);
				done();
			});
	});

	test("login is Failed, Wrong Email", (done) => {
		const loginData = {
			email: "wrong_email@email.com",
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

	test("login is Failed, Wrong password", (done) => {
		const loginData = {
			email: "test_email@email.com",
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


