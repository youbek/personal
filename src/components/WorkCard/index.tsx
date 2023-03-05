import { ArrowUpRight } from "react-feather";
import { TechnologiesList } from "../TechnologiesList";
import styles from "./WorkCard.module.css";

export type Work = {
  startDate: string;
  endDate: string;
  positionTitle: string;
  companyName: string;
  description: string;
  usedTechnologies: string[];
  companyLink?: string;
};

type Props = {
  work: Work;
};

export function WorkCard({ work }: Props) {
  return (
    <div className={styles.workCardContainer}>
      <div>
        <span className={styles.workCardDateText}>
          {work.startDate} - <br />
          {work.endDate}
        </span>
      </div>
      <div>
        <h5 className={styles.workCardHeader}>
          <a href={work.companyLink || ""} target="_blank" rel="noreferrer">
            {work.positionTitle} - {work.companyName}
            {work.companyLink ? (
              <span>
                <ArrowUpRight />
              </span>
            ) : null}
          </a>
        </h5>
        <p className={styles.workCardDescription}>{work.description}</p>
        <TechnologiesList techs={work.usedTechnologies} />
      </div>
    </div>
  );
}
