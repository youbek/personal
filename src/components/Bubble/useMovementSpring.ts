import { useSpring } from "react-spring";
import { easings } from "@react-spring/web";

export type MovementSquareBorders = {
  left: number;
  right: number;
  top: number;
  bottom: number;
};

export function useMovementSpring(
  movementSquareBorders: MovementSquareBorders
) {
  const [spring, api] = useSpring(() => ({
    from: {
      x: getRandomInt(movementSquareBorders.left, movementSquareBorders.right),
      y: movementSquareBorders.top,
    },
    to: {
      x: getRandomInt(movementSquareBorders.left, movementSquareBorders.right),
      y: movementSquareBorders.bottom,
    },
    config: {
      duration: 3000,
      mass: 100,
      easing: easings.easeInOutCubic,
    },
    onRest: (_, ctrl) => {
      api.start({
        to: {
          y: ctrl.springs.y.animation.fromValues[0],
          x: getRandomInt(
            movementSquareBorders.left,
            movementSquareBorders.right
          ),
        },
      });
    },
  }));

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return spring;
}
