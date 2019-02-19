import React from "react";

import requireLoggedIn from "./HOC/requireLoggedIn";

const UploadPicker = () => {
    return(
        <div>Hello Picker</div>
    )
};

export default requireLoggedIn(UploadPicker);


