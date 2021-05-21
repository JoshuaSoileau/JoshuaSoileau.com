import React from "react";
import tw from "twin.macro";
import H3 from "@components/typography/H3";

const Item = ({ src, title, description, url }) => {
  return (
    <li
      css={[
        tw`py-3 m-0! relative inline-flex  before:hidden  md:(py-8 pl-24!)`,
        /** Styles the "line" on the timeline */
        tw`before:(block absolute   w-auto h-auto  inset-y-0! left-0!  border-l-2 border-solid border-indigo-100   transform -translate-x-1/2)! first-of-type:before:top-36! last-of-type:before:bottom-36!`,
        tw`md:(first-of-type:before:top-1/2! last-of-type:before:bottom-1/2!)`,
        /** Styles the "dot" on the timeline */
        tw`after:(content block absolute top-36 left-0 w-3 h-3 rounded-full bg-indigo-300  transform -translate-x-1/2 -translate-y-1/2)  last-of-type:after:(top-auto bottom-36)`,
        tw`md:(after:(top-1/2) last-of-type:after:(top-1/2 bottom-auto))`,
      ]}
    >
      <article tw="flex items-start flex-col md:(flex-row items-center  w-96)">
        <a
          href={url}
          tw="cursor-pointer block  rounded-4xl shadow-xl  hover:shadow-2xl flex-shrink-0 overflow-hidden transition-all"
          target="_blank"
        >
          <img
            tw="block! w-full h-auto md:(w-40 h-40) object-cover  m-0!"
            src={src}
            alt="Photo of the Holiday Movie Bingo game"
          />
        </a>
        <div tw="mt-6 md:(ml-12 mt-0)">
          <div tw="md:(w-80)">
            <a
              href={url}
              tw="text-2xl! text-black hover:text-indigo-500  cursor-pointer"
              target="_blank"
            >
              {title}
            </a>
            <p tw="text-base">{description}</p>
          </div>
        </div>
      </article>
    </li>
  );
};

export default Item;
