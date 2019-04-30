/* import { GET_SUBSCRIBED_CHANNELS } from "actions/types";

import { request } from "utils";


export const startGetSubscribedChannel = ({ limit = 16, offset = 0 }) => (dispatch) => {
  return request("get", `/user/:id/subscriber?limit=${limit}&offset=${offset}`)
      .then(res => {
        if(res.data.error) return { error: true, msg: res.data.msg};
        dispatch({ type: GET_SUBSCRIBED_CHANNELS, payload: res.data.channels });
        return { error: false };
      })
      .catch(err => ({ error: false, msg: err }))
}; */
