import {
  GET_RECOMMENDED_VIDEO,
  GET_VIDEOS,
  SEARCH_VIDEOS_SUCCESS,
  SEARCHING_VIDEOS,
  CLEAR_SEARCH
} from "actions/types";
import videoReducer, { defaultState } from "reducers/video";
import videos from "test/__mock__/videos";


describe("Video Reducer", () => {
  it("should set recommended videos state", () => {
    const action = {
      type: GET_RECOMMENDED_VIDEO,
      payload: videos
    };

    const data = videoReducer(undefined, action);
    expect(data.recommended).toEqual(videos);
  });

  it("should set featured videos state and increment offset...", () => {
    const action = {
      type: GET_VIDEOS,
      payload: videos
    };

    const data = videoReducer(undefined, action);
    expect(data.featured.offset).toBe(videos.length);
    expect(data.featured.videos).toEqual(videos);
  });

  it("should set searched videos state and increment offset...", () => {
    const action = {
      type: SEARCH_VIDEOS_SUCCESS,
      payload: { videos: { videos }, found: true }
    };

    const data = videoReducer(undefined, action);
    expect(data.searched.offset).toBe(videos.length);
    expect(data.searched.videos).toEqual(videos);
  });

  it("should set loading videos", () => {
    const action = {
      type: SEARCHING_VIDEOS,
      payload: { query: "test"}
    };

    const data = videoReducer(undefined, action);
    expect(data.searched.loading).toBe(true);
    expect(data.searched.query).toBe(action.payload.query);
  });

  it("should clear videos search", () => {
    const action = {
      type: CLEAR_SEARCH,
    };

    const data = videoReducer(undefined, action);
    expect(data).toEqual(defaultState);
  });
});
