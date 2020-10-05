import React from "react";
import { config } from "../config/config.yml";

export default function Footer() {
  return (
    <div className="footer  py-4  flex justify-center items-center mt-4 text-sm">
      Made with
      <span className="inline ml-2">💢</span>
      <span className="inline mx-2">🔥</span>
      <span className="text-sm inline mr-2 tracking-tighter">
        (╯°□°)╯︵ ┻━┻
      </span>
      &nbsp;by
      {config.author}
    </div>
  );
}
