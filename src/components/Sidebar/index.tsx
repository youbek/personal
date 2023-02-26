import { useCallback } from "react";
import { animated } from "react-spring";
import { ArrowUpRight } from "react-feather";

import { SidebarNavButton } from "./SidebarNavButton";
import styles from "./Sidebar.module.css";
import { useActiveNavigationButtonSpring } from "./useActiveNavigationButtonSpring";
import { Button } from "../Button";

export function Sidebar() {
  const activeNavigationButtonSpring = useActiveNavigationButtonSpring();

  const handleNavigationChange = useCallback(
    (navigatedButton: HTMLButtonElement) => {
      activeNavigationButtonSpring.moveTo(navigatedButton);
    },
    []
  );

  return (
    <div className={styles.container}>
      <ul>
        <animated.div
          style={{ ...activeNavigationButtonSpring.styles }}
          className={styles.activeNavigation}
        />
        <li>
          <SidebarNavButton href="/" onNavigation={handleNavigationChange}>
            about
          </SidebarNavButton>
        </li>
        <li>
          <SidebarNavButton href="/work" onNavigation={handleNavigationChange}>
            work
          </SidebarNavButton>
        </li>
        <li>
          <SidebarNavButton
            href="/projects"
            onNavigation={handleNavigationChange}
          >
            projects
          </SidebarNavButton>
        </li>
      </ul>

      <Button version="secondary" icon={<ArrowUpRight />}>
        resume
      </Button>
    </div>
  );
}
