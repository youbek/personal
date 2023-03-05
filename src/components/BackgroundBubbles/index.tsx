import Bubble from "../Bubble";

import styles from "./BackgroundBubbles.module.css";

export function BackgroundBubbles() {
  return (
    <div className={styles.container}>
      <div>
        <Bubble
          colors={[
            "#BC4E9C",
            "#F80759",
            "#7F7FD5",
            "#86A8E7",
            "#91EAE4",
            "#BFE6BA",
            "#EAAFC8",
          ]}
          movementSquareBorders={{
            left: -7,
            right: 7,
            top: -7,
            bottom: 7,
          }}
        />
      </div>
      <div>
        <Bubble
          colors={[
            "#E5E5BE",
            "#4568DC",
            "#6259AF",
            "#7F4A82",
            "#b92b27",
            "#7b4397",
          ]}
          movementSquareBorders={{
            left: -2,
            right: 2,
            top: -2,
            bottom: 2,
          }}
        />
      </div>
      <div>
        <Bubble
          colors={["#A8FF78", "#78FFD6", "#EF32D9", "#FDB99B"]}
          movementSquareBorders={{
            left: -5,
            right: 5,
            top: -5,
            bottom: 5,
          }}
        />
      </div>
    </div>
  );
}
