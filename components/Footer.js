import React from "react";
import { config } from "../config/config.yml";

export default function Footer() {
  return (
    <div className="footer  py-4">
      Made with 🤦‍♂️ by
      {config.author}
      <style jsx>{`
        .footer {
          position: static;
          font-size: 1.3rem;
        }
      `}</style>
    </div>
  );
}
