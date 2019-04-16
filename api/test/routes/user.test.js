const request = require("supertest");

const User = require("../../models/User");
const Video = require("../../models/Video");

const users = require("../__mock__/users");
const videos = require("../__mock__/videos");

let app;

beforeAll(async () => {
  app = require("../../index");
});

afterAll(async () => {
  await app.close()
});

beforeEach(async () => {
  await User.remove({});
  await Video.remove({});
  await User.create(users[0]);
});

describe("GET /api/v0/user/me",() => {
  it("should return Unauthorized if don't have an access token ", async () => {
    const res = await request(app).get("/api/v0/user/me");
    expect(res.statusCode).toBe(401);
  });

  it("should return user info for correct access token", async () => {
    // signin and getting an refresh token
    const { body: { token  } } = await request(app).post("/api/v0/signin").send(users[0]);
    const res  = await request(app).get("/api/v0/token").set('Authorization', token);
    const accessToken = res.body.token;

    const result = await request(app).get("/api/v0/user/me").set('Authorization', accessToken);
    expect(result.statusCode).toBe(200);
    expect(result.body.user.email).toBe(users[0].email);
  });
});

describe("GET /user/:id/video/count", () => {
  it("should return the numbers of video uploaded by the users", async () => {
    const { body: { user } } = await request(app).post("/api/v0/signin").send(users[0]);
    videos[0].author = user._id;

    await Video.create(videos[0]);

    const res = await request(app).get(`/api/v0/user/${user._id}/video/count`);
    expect(res.body.videosCount).toBe(1);
  })
});

describe("GET /user/:id/subscribers/count", () => {
  it("should return the number of subscribers count of the current user", async () => {
    const { body: { user } } = await request(app).post("/api/v0/signin").send(users[0]);

    const res = await request(app).get(`/api/v0/user/${user._id}/subscribers/count`);
    expect(res.body.subscribersCount).toBe(0); // User just created, so default subcribers is 0
  })
});

describe("GET /user/:id/name",  () => {
  it("should return user name", async () => {
    const { body: { user } } = await request(app).post("/api/v0/signin").send(users[0]);
    const res = await request(app).get(`/api/v0/user/${user._id}/name`);
    expect(res.body.name).toBe(users[0].name);
  })
});

