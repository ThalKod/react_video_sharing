const request = require("supertest");

const Video = require("../../models/Video");
const User = require("../../models/User");

// mock :
const videos = require("../__mock__/videos");
const users = require("../__mock__/users");


let app, id;

beforeAll(async () => {
  app = require("../../index");
});

afterAll(async () => {
  await app.close()
});

beforeEach(async () => {
  await Video.remove({});
  rVideo = await Video.create(videos[0]);
  id = rVideo.id;
  await User.remove();
});

describe("GET /video/basic/:id",  () => {
  it("should get the video basic details", async () => {
    const res = await request(app).get(`/api/v0/video/basic/${id}`);
    expect(res.body.error).toBe(false);
  });
});

describe("PUT /video/:id",  () => {
  it("should update the video", async () => {
    const { body: { token, user: { _id } }} = await request(app).post("/api/v0/signup").send(users[0]); // Create a new User

    //  set new video author as current user and new name
    videos[1].author = _id;

    const newVideo = await Video.create(videos[1]); // create a new video

    const newRes = await request(app).get("/api/v0/token").set('Authorization', token);

    const res = await request(app).put(`/api/v0/video/${newVideo._id}`).set('Authorization', newRes.body.token).send({ name: "name232"});
    expect(res.body.error).toBe(false);

    const updatedVideo = await Video.find({ name: "name232"});
    expect(updatedVideo.length).toBe(1);
  });
});

describe("GET /video/list/recommended/", () => {
  it("should return the list of the most watched videos", async () => {
    // create a second video
    videos[1].viewCount = 1250;
    const newVideos = await Video.create(videos[1]);

    const res = await request(app).get(`/api/v0/video/list/recommended/`);

    expect(res.body.error).toBe(false);
    console.log(newVideos._id);
    expect(res.body.videos[0]._id).toBe(newVideos._id.toString());
  })
});
