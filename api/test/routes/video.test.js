const request = require("supertest");
const path = require("path");


const Video = require("../../models/Video");
const User = require("../../models/User");


let app, id;
const user = { email: "test@mail.com", username: "test", password: "password" };
const video = {
  "name": "testname",
  "handle": "D15RcPMqQhmyL2m4GzmR",
  "mimeType": "video/mp4",
  "defaultCoverPhoto": path.join(__dirname, "../data", "D15RcPMqQhmyL2m4GzmR", "tn.png"),
  "url": "https://cdn.filestackcontent.com/D15RcPMqQhmyL2m4GzmR",
  "size": 10301004
};

beforeAll(async () => {
  app = require("../../index");
});

afterAll(async () => {
  await app.close()
});

beforeEach(async () => {
  await Video.remove({});
  rVideo = await Video.create(video);
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
    const { body: { token }} = await request(app).post("/api/v0/signup").send(user);

    const newRes = await request(app).get("/api/v0/token").set('Authorization', token);
    const res = await request(app).put(`/api/v0/video/${id}`).set('Authorization', newRes.body.token).send({ name: "name232"});
    expect(res.body.error).toBe(false);
    const updatedVideo = await Video.find({ name: "name232"});

    expect(updatedVideo.length).toBe(1);
  });
});
