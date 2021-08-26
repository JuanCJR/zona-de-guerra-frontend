import "./App.scss";
import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import { Home } from "./pages/Home";
import { Tarifas } from "./pages/Tarifas";
import { Galeria } from "./pages/Galeria";
import { Reservar } from "./pages/Reservar";
import { Contacto } from "./pages/Contacto";
import { Admin } from "./pages/Admin";
import { Login } from "./pages/Login";
import { Users } from "./pages/Users";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tarifas" component={Tarifas} />
          <Route path="/galeria" component={Galeria} />
          <Route path="/reservar" component={Reservar} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/admin" component={Admin} />
          <Route path="/login" component={Login} />
          <Route path="/usuarios" component={Users} />
        </Switch>
      </div>
    );
  }
}
