import React from "react";

export default function InteractiveEarth() {
  const earthArt = `            ,,,,,,
        o#'9MMHb':'-,o,
     .oH":HH$' "' ' -*R&o,
    dMMM*""'\`'      .oM"HM\\.
  ,MMM'          "HLbd< ?&H\`
 .:MH ."\          \` MM  MM&b
. "*H    -        &MMMMMMMMMH:
.    dboo        MMMMMMMMMMMM.
.   dMMMMMMb      *MMMMMMMMMP.
.    MMMMMMMP        *MMMMMP .
     \`#MMMMM           MM6P ,
 '    \`MMMP"           HM*',
  '    :MM             .- ,
   '.   \`#?..  .       ..'
      -.   .         .-
        ''-.oo,oo.-''`;

  const renderInteractiveText = (text: string) => {
    return text.split("").map((char, index) => {
      if (char === "\n") {
        return <br key={index} />;
      }

      return (
        <span
          key={index}
          className={`
            transition-all duration-150 ease-in-out hover:text-green-900 hover:z-10 dark:hover:text-green-300
            cursor-default rounded-sm px-0.5
            ${char === " " ? "hover:bg-transparent" : ""}
          `}
          style={{
            transformOrigin: "center",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      );
    });
  };

  return (
    <pre className="text-gray-400 leading-none md:tracking-[-0.25em] tracking-[-0.35em] whitespace-pre text-xs/3 md:text-base/4 font-mono">
      {renderInteractiveText(earthArt)}
    </pre>
  );
}
