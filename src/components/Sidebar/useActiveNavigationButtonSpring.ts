import { useRef } from "react";
import { useSpring } from "react-spring";

export function useActiveNavigationButtonSpring() {
  const activeId = useRef<string | null>(null);
  const [styles, api] = useSpring(() => ({
    from: {
      width: 0,
      height: 0,
      marginLeft: 0,
      marginTop: 0,
    },
    config: {
      duration: 220,
    },
  }));

  function moveTo(
    newActiveNavigationButton: Element,
    options: { force: boolean; immediate: boolean } = {
      force: false,
      immediate: false,
    }
  ) {
    const boundingClientRect =
      newActiveNavigationButton.getBoundingClientRect();

    const isFirstRun = activeId.current === null;

    const buttonId = newActiveNavigationButton.getAttribute("id");

    if (!buttonId)
      throw new Error(`Moving to navigation button should contain unique ID!`);

    const isNavigatingToSameButton = activeId.current === buttonId;
    if (isNavigatingToSameButton && !options?.force) return;

    activeId.current = buttonId;

    const marginLeft = boundingClientRect.x + boundingClientRect.width / 2; // Because origin pivot is center
    const marginTop = boundingClientRect.y + boundingClientRect.height / 2; // Because origin pivot is center

    if (isFirstRun) {
      // If not running in the setTimeout
      // api.start doesn't work first the first time
      // couldn't find reason, I can consider it as a technical debt.

      setTimeout(() => {
        api.set({
          marginLeft,
          marginTop,
        });

        api.start({
          to: {
            width: boundingClientRect.width,
            height: boundingClientRect.height,
          },
          immediate: options?.immediate,
        });
      }, 100);
    } else {
      api.start({
        to: {
          marginLeft,
          marginTop,
          width: boundingClientRect.width,
          height: boundingClientRect.height,
        },
        immediate: options?.immediate,
      });
    }
  }

  return {
    styles,
    moveTo,
  };
}
