import H2 from "@components/typography/H2";
import "twin.macro";
import React from "react";
import Item from "./Item";

const Timeline = () => {
  return (
    <section>
      <H2>Teeny tiny projects.</H2>
      <p>Little weekend projects I created. For funsies.</p>
      <ul tw="list-none! p-0 pl-2 m-0  flex flex-col justify-center items-start">
        <Item
          url="https://bingo.joshuasoileau.com/"
          src="/static/bingo.png"
          title="Holiday Movie Bingo"
          description="Silly little game to play when you are watching terrible holiday movies."
        />
        <Item
          url="https://favicons.joshuasoileau.com/"
          src="/static/favicons.png"
          title="Emoji Favicon Creator"
          description="Turns emojis into favicons, and gives you the resulting HTML."
        />
        <Item
          url="https://jeopardy.joshuasoileau.com/"
          src="/static/jeopardy.png"
          title="Web Dev Jeopardy"
          description="A silly web-dev version of Jeopardy for running in Zoom meetings."
        />
        <Item
          url="https://rollfind.joshuasoileau.com/"
          src="/static/rollfind.png"
          title="Rollfind"
          description="Quick lookup of D&amp;D rules, stats, and general info."
        />
      </ul>
    </section>
  );
};

export default Timeline;
