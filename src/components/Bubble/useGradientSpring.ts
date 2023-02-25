import { useSpring } from "react-spring";

function buildSeamlessLinearGradient(colors: string[]) {
  if (colors.length < 2)
    throw new Error(
      `To build seamless gradient need to have at least 2 colors`
    );

  // hard coded last attachments in the array are required to have seamless inifinite scrolling for gradient
  // otherwise flickering occurs
  return `linear-gradient(135deg, ${[
    ...colors,
    colors[0],
    colors[0],
    colors[1],
  ].reduce(
    (gradient, color, index) => `${gradient}${index !== 0 ? "," : ""} ${color}`,
    ""
  )})`;
}

function calculateGradientBackgroundSize(colorsAmount: number) {
  const totalColors = colorsAmount + 2; // + 2 because we attach 2 first colors twice in the end to have seamless gradient

  const size = totalColors * 100;

  return `${size}% ${size}%`;
}

export function useGradientSpring(colors: string[]) {
  const [spring, api] = useSpring(() => ({
    from: {
      backgroundImage: buildSeamlessLinearGradient(colors),
      backgroundSize: calculateGradientBackgroundSize(colors.length),
      backgroundPosition: `0% 0%`,
    },
    to: {
      backgroundPosition: `100% 100%`,
    },
    config: {
      duration: (colors.length / 2) * 5000, // Should transition between two colors within 10s
    },
    // loop: true,
    onRest: (_, ctrl) => {
      // Target next gradient color
      api.set({
        backgroundPosition: `0% 0%`,
      });

      api.start({
        to: {
          backgroundPosition: `100% 100%`,
        },
      });
    },
  }));

  return spring;
}
