import React from "react";

import Header from "../Header/Header";
import RegistrationForm from "../Register/RegistrationForm";

export default class RegistrationPage extends React.Component {
  render(){
    return (
        <div>
          <Header/>
          <RegistrationForm />
        </div>
    )
  }
}
