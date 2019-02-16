const request = require("supertest");

const User = require("../../models/User");

let app;
const user = { email: "test@mail.com", username: "test", password: "password" };

beforeEach(async () => {
  app = require("../../index");
  await User.remove({});
});

afterEach(async () => {
  await app.close()
});

describe("POST /api/v0/signup", () => {
  it("should signup a user ", async () => {
    const res = await request(app).post("/api/v0/signup").send(user);
    expect(res.statusCode).toBe(200);
    const rUser = await User.find({email: user.email });

    expect(rUser[0].email).toBe(user.email);
    expect(res.body.token).toContain("jwt");
  });
});

describe("POST /api/v0/signin", () =>{
  it("should signin a user", async () => {
    const rUser = await User.create(user);
    const res = await request(app).post("/api/v0/signin").send(user);
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
    const res = await request(app).post("/api/v0/signup").send(user);

    const newRes = await request(app).get("/api/v0/token").set('Authorization', res.body.token);
    expect(res.statusCode).toBe(200);
    expect(newRes.body.token).toContain("jwt");
  });
});

