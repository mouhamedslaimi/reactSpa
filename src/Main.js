import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Formulaire from "./Formulaire";
import contact from "./contact";
import galerie from "./galerie";
import MapContainer from "./MapContainer";



class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/stuff">Stuff</NavLink>
            </li>
            <li>
              <NavLink to="/Formulaire">Formulaire</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
            <li>
              <NavLink to="/galerie">galerie de photo</NavLink>
            </li>
            <li>
              <NavLink to="/MapContainer">Maps</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/Formulaire" component={Formulaire} />
            <Route path="/contact" component={contact} />
            <Route path="/galerie" component={galerie} />
            <Route path="/MapContainer" component={MapContainer} />

          </div>
        </div>
      </HashRouter>
    );
  }
}
export default Main;
