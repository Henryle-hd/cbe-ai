"use client";

import React from "react";
import Typewriter from "typewriter-effect";
type Props = {};

const TypeWriterTitle = (props: Props) => {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter.typeString("CBE AI 🤖 ").pauseFor(1000).deleteAll();
        typewriter
          .typeString("Let us chat!")
          .pauseFor(1000)
          .deleteAll()
          .start();
      }}
    />
  );
};

export default TypeWriterTitle;
