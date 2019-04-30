/* const { GET_SUBSCRIBED_CHANNELS } = "actions/types";

const defaultState = { subscribedChannels: { offset: 0, channels: [] } };

export default (state= defaultState, action) => {
  switch (action) {

    case GET_SUBSCRIBED_CHANNELS:
      return {
        ...state,
        subscribedChannels: {
          channels: state.subscribedChannels.channels.concat(action.payload),
          offset: state.subscribedChannels.offset + action.payload.length
        }
      };

    default:
      return state;
  }
} */
