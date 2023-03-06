import { PropsWithChildren, useId, useRef } from "react";
import Link from "next/link";
import { useIsomorphicLayoutEffect } from "@/hooks";

import styles from "./SidebarNavButton.module.css";
import { useRouter } from "next/router";

type Props = PropsWithChildren<{
  href: string;
  onNavigation(buttonElement: HTMLButtonElement): void;
}>;

export function SidebarNavButton({ href, children, onNavigation }: Props) {
  const id = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { pathname, isReady } = useRouter();

  useIsomorphicLayoutEffect(() => {
    // Check if the router fields are updated client-side (https://nextjs.org/docs/api-reference/next/router)
    if (!isReady || !buttonRef.current) return;

    const isNavigatedPathname = pathname === href;

    if (!isNavigatedPathname) return;

    onNavigation(buttonRef.current);
  }, [pathname, isReady, href, onNavigation]);

  return (
    <button ref={buttonRef} id={id} className={styles.sidebarNavButton}>
      <Link href={href}>{children}</Link>
    </button>
  );
}
