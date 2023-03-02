import styles from "./TechnologiesList.module.css";

type Props = {
  techs: string[];
};

export function TechnologiesList({ techs }: Props) {
  return (
    <div className={styles.container}>
      {techs.map(
        (technology, index) =>
          technology + (index === techs.length - 1 ? "" : " • ")
      )}
    </div>
  );
}
