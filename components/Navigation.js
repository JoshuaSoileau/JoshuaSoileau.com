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
      <ul>
        {config.navigation.map((item) => {
          return (
            <li className="mx-2" key={item.link}>
              <Link href={item.link}>
                <a>{item.text}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
