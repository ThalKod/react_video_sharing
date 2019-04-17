import configureMockStore from 'redux-mock-store';
import thunk from "redux-thunk";
import moxios from 'moxios';

import {
  startGetRecommendedVideo,
  startGetVideos,
  startSearchVideos,
  clearVideoSearch
} from "actions";

import {
  GET_RECOMMENDED_VIDEO,
  GET_VIDEOS,
  SEARCH_VIDEOS_SUCCESS,
  SEARCHING_VIDEOS,
  CLEAR_SEARCH
} from "actions/types";

import videos from "test/__mock__/videos";

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({});

describe("Videos actions creators", () => {
  it("`clearVideoSearch` should dispatch CLEAR_SEARCH", () => {
    const action = clearVideoSearch();
    expect(action.type).toBe(CLEAR_SEARCH);
  });

  describe('', () => {
    beforeEach(() => {
      moxios.install();

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: { videos },
        });
      });
    });

    afterEach(() => {
      moxios.uninstall();
    });

    it("`startGetRecommendedVideo` should dispatch GET_RECOMMENDED_VIDEO", () => {
      return store.dispatch(startGetRecommendedVideo())
          .then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toBe(GET_RECOMMENDED_VIDEO);
            expect(actions[0].payload).toEqual(videos);
          })
    });

    it("`startGetVideos` should dispatch GET_VIDEOS", () => {
      return store.dispatch(startGetVideos({ limit: 5, offset: 0}, "iiaos"))
          .then(() => {
            const actions = store.getActions();
            expect(actions[1].type).toBe(GET_VIDEOS);
            expect(actions[1].payload).toEqual(videos);
          })
    });

    it("`startSearchVideos` should dispatch SEARCHING_VIDEOS and SEARCH_VIDEOS_SUCCESS", () => {
      return store.dispatch(startSearchVideos({ limit: 5, offset: 0}, "iiaos"))
          .then(() => {
            const actions = store.getActions();
            console.log(actions);
            expect(actions[2].type).toBe(SEARCHING_VIDEOS);
            expect(actions[3].type).toBe(SEARCH_VIDEOS_SUCCESS);
            expect(actions[3].payload.videos).toEqual(videos);
          })
    });

  })
});
