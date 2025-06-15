/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

declare global {
  interface Window {
    twttr: any;
  }
}

export default function TwitterEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://platform.twitter.com/widgets.js";
    script.charset = "utf-8";
    script.onload = () => {
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load();
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col gap-3 md:flex-row md:gap-8 md:justify-center md:items-start">
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          Jake Paul should be jailed for Elderly abuse. 🦏⚡️🔋{" "}
          <a href="https://twitter.com/search?q=%24POWER&amp;src=ctag&amp;ref_src=twsrc%5Etfw">
            $POWER
          </a>{" "}
          <a href="https://t.co/Wkag7fe5aq">pic.twitter.com/Wkag7fe5aq</a>
        </p>
        &mdash; Power White Rhino CTO (@PowerRhinoCTO){" "}
        <a href="https://twitter.com/PowerRhinoCTO/status/1859328695258972541?ref_src=twsrc%5Etfw">
          November 20, 2024
        </a>
      </blockquote>{" "}
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          Ace Ventura is my half brother 🦏🤔💭
          <a href="https://twitter.com/search?q=%24POWER&amp;src=ctag&amp;ref_src=twsrc%5Etfw">
            $POWER
          </a>{" "}
          <a href="https://t.co/UMy6AIarCC">pic.twitter.com/UMy6AIarCC</a>
        </p>
        &mdash; Power White Rhino CTO (@PowerRhinoCTO){" "}
        <a href="https://twitter.com/PowerRhinoCTO/status/1859327235783893197?ref_src=twsrc%5Etfw">
          November 20, 2024
        </a>
      </blockquote>

      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          First public appearance of Power the baby white rhino at{" "}
          <a href="https://twitter.com/KhaokheowZoo?ref_src=twsrc%5Etfw">
            @KhaokheowZoo
          </a>{" "}
          🦏⚡️<br />
          <br />
          He’s looking powerful already!💪🏼{" "}
          <a href="https://t.co/lHcgQxhYLM">pic.twitter.com/lHcgQxhYLM</a>
        </p>
        &mdash; Power White Rhino CTO (@PowerRhinoCTO){" "}
        <a href="https://twitter.com/PowerRhinoCTO/status/1863876111039406524?ref_src=twsrc%5Etfw">
          December 3, 2024
        </a>
      </blockquote>
    </div>
  );
}
