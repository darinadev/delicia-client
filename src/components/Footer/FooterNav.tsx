import React from "react";
import styles from "./Footer.module.scss";
import { NavLink } from "react-router-dom";

const FooterNav = () => {
  return (
    <div>
      <h3>Navigation</h3>
      <nav>
        <ul className={styles.footerNav}>
          <li>
            <NavLink
              to="/home"
              style={
                ({isActive}) => (isActive ? { color: '#f1b814' } : {})
               }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={
                ({isActive}) => (isActive ? { color: '#f1b814' } : {})
               }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              style={
                ({isActive}) => (isActive ? { color: '#f1b814' } : {})
               }
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reservation"
              style={
                ({isActive}) => (isActive ? { color: '#f1b814' } : {})
               }
            >
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              style={
                ({isActive}) => (isActive ? { color: '#f1b814' } : {})
               }
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={
                ({isActive}) => (isActive ? { color: '#f1b814' } : {})
               }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FooterNav;
