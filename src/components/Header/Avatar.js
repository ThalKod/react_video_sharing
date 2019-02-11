import React from "react";

export default () => {
  const style = {
    avatar:{
      backgroundColor: "#a2aec1",
      width: 50,
      height: 50,
      borderRadius: 50/2,
      textAlign: "center",

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
            TM
          </div>
        </div>
  )
};
