import {
  PropsWithChildren,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
} from "react";
import styles from "./Button.module.css";

export function Button({
  children,
  icon,
  version = "primary",
  ...props
}: PropsWithChildren<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> & { icon: React.ReactNode; version?: "primary" | "secondary" }) {
  return (
    <button {...props} className={styles.button} data-version={version}>
      {children}
      {icon ? <span className={styles.iconContainer}>{icon}</span> : null}
    </button>
  );
}
