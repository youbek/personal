import { useRef } from "react";
import { easings } from "@react-spring/web";
import { animated, useSpring } from "react-spring";

import { useMovementSpring, MovementSquareBorders } from "./useMovementSpring";
import bubbleModuleCss from "./Bubble.module.css";
import { useGradientSpring } from "./useGradientSpring";

type Props = {
  radius: number;
  movementSquareBorders: MovementSquareBorders;
  colors: string[];
};

function Bubble({ radius, movementSquareBorders, colors }: Props) {
  const movementSpring = useMovementSpring(movementSquareBorders);
  const gradientSpring = useGradientSpring(colors);

  return (
    <animated.div
      className={bubbleModuleCss.container}
      style={{
        width: radius * 2,
        height: radius * 2,
        ...movementSquareBorders,
        ...movementSpring,
        ...gradientSpring,
      }}
    />
  );
}

export default Bubble;
