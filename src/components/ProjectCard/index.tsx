import Image from "next/image";
import { TechnologiesList } from "../TechnologiesList";
import styles from "./ProjectCard.module.css";

type Project = {
  imageSrc: any;
  title: string;
  usedTechnologies: string[];
};

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.thumbnailContainer}>
        <Image src={project.imageSrc} alt={project.title} />
      </div>
      <div className={styles.bodyContainer}>
        <h5 className={styles.title}>{project.title}</h5>
        <TechnologiesList techs={project.usedTechnologies} />
      </div>
    </div>
  );
}
