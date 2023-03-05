import { useRef } from "react";
import { easings } from "@react-spring/web";
import { animated, useSpring } from "react-spring";

import { useMovementSpring, MovementSquareBorders } from "./useMovementSpring";
import bubbleModuleCss from "./Bubble.module.css";
import { useGradientSpring } from "./useGradientSpring";

export type BubbleConfig = {
  movementSquareBorders: MovementSquareBorders;
  colors: string[];
};

function Bubble({ movementSquareBorders, colors }: BubbleConfig) {
  const movementSpring = useMovementSpring(movementSquareBorders);
  const gradientSpring = useGradientSpring(colors);

  return (
    <animated.div
      className={bubbleModuleCss.container}
      style={{
        ...movementSquareBorders,
        ...movementSpring,
        ...gradientSpring,
      }}
    />
  );
}

export default Bubble;
