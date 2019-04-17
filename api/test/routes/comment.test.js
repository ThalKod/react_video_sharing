const request = require("supertest");

const Video = require("../../models/Video");
const User = require("../../models/User");
const Comment = require("../../models/Comment");

// mock :
const videos = require("../__mock__/videos");
const users = require("../__mock__/users");
const comments = require("../__mock__/comments");

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

describe("POST /comment/video/:id", () => {
  it("should create a comment on a video", async () => {
    console.log("in task");
    const { body: { token }} = await request(app).post("/api/v0/signup").send(users[0]); // Create a new User

    const newRes = await request(app).get("/api/v0/token").set('Authorization', token);

    const newComment = await Comment.create(comments[0]);

    const res = await request(app).post(`/api/v0/comment/video/${id}`).set('Authorization', newRes.body.token).send(comments[0]);

    const { text } = await Comment.findById(newComment._id);

    expect(res.body.error).toBe(false);
    expect(text).toBe(comments[0].text);
  })
});

describe("GET /comment/video/:id", () => {
  it("should get most recent comment of the video", async () => {

    for(let i = 0; i < comments.length; i++) {
      comments[i].video = id;
      await Comment.create(comments[i]);
    }

    const res = await request(app).get(`/api/v0/comment/video/${id}?limit=2&offset=0`);
    expect(res.body.comments[0].text).toBe(comments[comments.length - 1].text);
  })
});

describe("GET /comment/count/video/:id", () => {
  it("should return total comments of video", async () => {

    for(let i = 0; i < comments.length; i++) {
      comments[i].video = id;
      await Comment.create(comments[i]);
    }

    const res = await request(app).get(`/api/v0/comment/count/video/${id}`);
    expect(res.body.count).toBe(comments.length);
  })
});
