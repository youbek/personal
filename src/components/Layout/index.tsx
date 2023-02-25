import { PropsWithChildren } from "react";

import { Sidebar } from "../Sidebar";
import { BackgroundBubbles } from "../BackgroundBubbles";
import { Footer } from "../Footer";

import styles from "./Layout.module.css";

export function Layout(props: PropsWithChildren) {
  return (
    <div className={styles.layout}>
      <div className={styles.backgroundBubblesContainer}>
        <BackgroundBubbles />
      </div>
      <div className={styles.layoutContent}>
        <div className={styles.sidebarContainer}>
          <Sidebar />
        </div>
        <main>{props.children}</main>
      </div>
      <Footer />
    </div>
  );
}
