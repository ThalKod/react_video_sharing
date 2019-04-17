const request = require("supertest");

const User = require("../../models/User");
const users = require("../__mock__/users");

let app;

beforeAll(async () => {
  app = require("../../index");
});

afterAll(async () => {
  await app.close()
});

beforeEach(async () => {
  await User.remove({});
});

describe("POST /api/v0/signup", () => {
  it("should signup a user ", async () => {
    const res = await request(app).post("/api/v0/signup").send(users[0]);
    expect(res.statusCode).toBe(200);
    const rUser = await User.find({email: users[0].email });
    expect(rUser[0].email).toBe(users[0].email);
    expect(res.body.token).toContain("jwt");
  });
});

describe("POST /api/v0/signin", () =>{
  it("should signin a user", async () => {
    await User.create(users[1]);
    const res = await request(app).post("/api/v0/signin").send(users[1]);
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toContain("jwt");
  })
});

describe("GET /api/v0/token", () =>{
  it("should return error code 403 if no refresh token", async () => {
    const res = await request(app).get("/api/v0/token");
    expect(res.statusCode).toBe(403);
  });

  it("should return error code 401 if invalid refresh token", async () => {
    const res = await request(app).get("/api/v0/token").set('Authorization', 'jwt blsl');
    expect(res.statusCode).toBe(401);
  });

  it("should return a new access token if a refresh a valid token provided", async () => {
    const res = await request(app).post("/api/v0/signup").send(users[0]);

    const newRes = await request(app).get("/api/v0/token").set('Authorization', res.body.token);
    expect(res.statusCode).toBe(200);
    expect(newRes.body.token).toContain("jwt");
  });
});

