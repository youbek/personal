import { ArrowUpRight } from "react-feather";
import { TechnologiesList } from "../TechnologiesList";
import styles from "./WorkCard.module.css";

export type WorkProject = {
  title: string;
  achievements: string[];
};

export type Work = {
  startDate: string;
  endDate: string;
  positionTitle: string;
  companyName: string;
  projects: WorkProject[];
  impact: string;
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
        {work.projects.map((project) => (
          <div
            className={styles.workCardProjectContainer}
            key={`project-${project.title}-container`}
          >
            <p className={styles.workCardProject}>{project.title}</p>
            <ul className={styles.workCardAchievementsList}>
              {project.achievements.map((achievement, achievementIndex) => (
                <li
                  key={`project-${project.title}-achievement-${achievementIndex}`}
                >
                  - {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <p className={styles.workCardImpact}>{work.impact}</p>
        <TechnologiesList techs={work.usedTechnologies} />
      </div>
    </div>
  );
}
