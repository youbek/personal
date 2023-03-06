import { useCallback, useRef } from "react";
import { animated } from "react-spring";
import { ArrowUpRight } from "react-feather";
import { useWindowWidth } from "@react-hook/window-size";
import { useIsomorphicLayoutEffect } from "@/hooks";

import { SidebarNavButton } from "./SidebarNavButton";
import styles from "./Sidebar.module.css";
import { useActiveNavigationButtonSpring } from "./useActiveNavigationButtonSpring";
import { Button } from "../Button";

export function Sidebar() {
  const activeNavigationButtonSpring = useActiveNavigationButtonSpring();
  const activeNavigatedButtonRef = useRef<HTMLButtonElement | null>(null);
  const width = useWindowWidth();

  useIsomorphicLayoutEffect(() => {
    if (!activeNavigatedButtonRef.current) return;

    activeNavigationButtonSpring.moveTo(activeNavigatedButtonRef.current, {
      force: true,
      immediate: true,
    });
  }, [width]);

  const handleNavigationChange = useCallback(
    (navigatedButton: HTMLButtonElement) => {
      activeNavigatedButtonRef.current = navigatedButton;
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

      <a href="/yusufbek-resume-v1.pdf" download>
        <Button version="secondary" icon={<ArrowUpRight />}>
          resume
        </Button>
      </a>
    </div>
  );
}
