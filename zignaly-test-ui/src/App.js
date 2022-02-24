import React, { Component } from "react";
import { BrowserRouter , Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PhoneListContainer from "./components/phone-list.component";
import PhoneDetail from "./components/phone.component";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container mt-3">
          <Switch>
            <Route exact path="/phones" component={PhoneListContainer} />
            <Route exact path="/phone-details" component={PhoneDetail} />
            <Redirect from="/" to="/phones"></Redirect>
            <Redirect to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
