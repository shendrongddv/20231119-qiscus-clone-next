"use client";

import { TypeAnimation } from "react-type-animation";

export const TypingText = () => {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      sequence={[500, "Marketing", 1000, "Support", 1000, "Sales", 1000]}
      speed={50}
      // style={{ fontSize: '2em' }}
      repeat={Infinity}
    />
  );
};
