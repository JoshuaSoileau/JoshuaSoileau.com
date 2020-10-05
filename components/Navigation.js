import React, { Component } from "react";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { config } from "../config/config.yml";

export default class Navigation extends Component {
  state = { navOpen: false };

  handleToggleNav = () => {
    this.props.toggleNavigation();
  };

  render() {
    // there is a click handler on div.backdrop to close the
    // nav if the user clicks outside of the navigation component
    return (
      <div className="absolute inset-x-0 container flex flex-row justify-between items-center">
        <Link href="/">
          <a className="block p-4  text-bold text-3xl">JS</a>
        </Link>
        <ul className="flex flex-row align-center">
          {config.navigation.map((item) => {
            return (
              <li key={item.link}>
                <Link href={item.link}>
                  <a className="block p-4">{item.text}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
