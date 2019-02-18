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

describe("GET /api/v0/user/me",() => {
  it("should return Unauthorized if don't have an access token ", async () => {
    const res = await request(app).get("/api/v0/user/me");
    expect(res.statusCode).toBe(401);
  });

  it("should return user info for correct access token", async () => {
    // signin and getting an refresh token
    const { body: { token  } } = await request(app).post("/api/v0/signin").send(user);
    const res  = await request(app).get("/api/v0/token").set('Authorization', token);
    const accessToken = res.body.token;

    const result = await request(app).get("/api/v0/user/me").set('Authorization', accessToken);
    expect(result.statusCode).toBe(200);
    expect(result.body.user.email).toBe(user.email);
  })
});


