const request = require("supertest");

const User = require("../../models/User");

let app;
const user = { email: "test@mail.com", username: "test", password: "password" };

beforeAll(async () => {
  app = require("../../index");
});

afterAll(async () => {
  await app.close()
});

beforeEach(async () => {
  await User.remove({});
  await User.create(user);
});

describe("POST /api/v0/check/email",() => {
  it("should return false if email already used to signup", async () => {
    const res = await request(app).post("/api/v0/check/email").send({ email: user.email })
    expect(res.statusCode).toBe(200);
    expect(res.body.valid).toBe(false);
  })
});

describe("POST /api/v0/check/username",() => {
  it("should return false if username already used to signup", async () => {
    const res = await request(app).post("/api/v0/check/username").send({ username: user.username });
    expect(res.statusCode).toBe(200);
    expect(res.body.valid).toBe(false);
  })
});
