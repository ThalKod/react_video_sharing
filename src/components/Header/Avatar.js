import React from "react";

import { getInitial } from "../../utils/username";

export default ({ username }) => {

  const style = {
    avatar:{
      backgroundColor: "#a2aec1",
      width: 50,
      height: 50,
      borderRadius: 50/2,
      textAlign: "center",
      marginTop: 10,
      marginRight:  15
    },
    text: {
      color: "white",
      fontSize: 15,
      marginTop: 5,
    }
  };
  return (
        <div style={style.avatar} className="avatar pull-left">
          <div style={style.text}>
            {getInitial(username)}
          </div>
        </div>
  )
};
