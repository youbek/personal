import {
  PropsWithChildren,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
} from "react";
import styles from "./Button.module.css";

export function Button({
  children,
  ...props
}: PropsWithChildren<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>) {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
}
