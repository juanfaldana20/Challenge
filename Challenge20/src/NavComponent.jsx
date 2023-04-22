import React from "react";
import { NavLink } from "react-router-dom";
import "./NavComponent.css";

function NavComponent() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/acerca-de" activeClassName="active">
            Acerca de
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacto" activeClassName="active">
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavComponent;
