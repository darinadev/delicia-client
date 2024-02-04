import React, { useRef, useState } from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import { ReactComponent as CloseNav } from "../../assets/svg/close-nav.svg";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  return (
    <>
      <button className={styles.openNav} onClick={() => setIsOpen(true)}>
        <div className={styles.navIcon}>
          <div className={styles.navIconLine}></div>
        </div>
      </button>
      <nav ref={navRef} className={cn(styles.nav, { [styles.active]: isOpen })}>
        <NavLink
          to="/home"
          style={
            ({isActive}) => (
             isActive 
             ? {
                color: '#888888',
                paddingLeft: '45px',
                transition: 'all 0.5s ease',
               }
             :{}
             )
           }
          onClick={() => setIsOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={
            ({isActive}) => (
             isActive 
             ? {
                color: '#888888',
                paddingLeft: '45px',
                transition: 'all 0.5s ease',
               }
             :{}
             )
           }
          onClick={() => setIsOpen(false)}
        >
          About
        </NavLink>
        <NavLink
          to="/menu"
          style={
            ({isActive}) => (
             isActive 
             ? {
                color: '#888888',
                paddingLeft: '45px',
                transition: 'all 0.5s ease',
               }
             :{}
             )
           }
          onClick={() => setIsOpen(false)}
        >
          Menu
        </NavLink>
        <NavLink
          to="/reservation"
          style={
            ({isActive}) => (
             isActive 
             ? {
                color: '#888888',
                paddingLeft: '45px',
                transition: 'all 0.5s ease',
               }
             :{}
             )
           }
          onClick={() => setIsOpen(false)}
        >
          Reservation
        </NavLink>
        <NavLink
          to="/gallery"
          style={
            ({isActive}) => (
             isActive 
             ? {
                color: '#888888',
                paddingLeft: '45px',
                transition: 'all 0.5s ease',
               }
             :{}
             )
           }
          onClick={() => setIsOpen(false)}
        >
          Gallery
        </NavLink>
        <NavLink
          to="/contact"
          style={
            ({isActive}) => (
             isActive 
             ? {
                color: '#888888',
                paddingLeft: '45px',
                transition: 'all 0.5s ease',
               }
             :{}
             )
           }
          onClick={() => setIsOpen(false)}
        >
          Contact
        </NavLink>
        <button className={styles.closeNav} onClick={() => setIsOpen(false)}>
          <CloseNav />
        </button>
      </nav>
    </>
  );
};
