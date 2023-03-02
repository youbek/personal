import { ArrowRight } from "react-feather";

import styles from "@/styles/Projects.module.css";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";

import dominoThumbnail from "../../../public/images/domino_thumbnail.png";
import loadistThumbnail from "../../../public/images/loadist_thumbnail.png";
import sozTopThumbnail from "../../../public/images/soz_top_thumbnail.png";
import aralashSozThumbnail from "../../../public/images/aralash_soz_thumbnail.png";

function ProjectsPage() {
  return (
    <div>
      <h1>Projects</h1>
      <div className={styles.container}>
        <div className={styles.projectsRow}>
          <ProjectCard
            project={{
              imageSrc: dominoThumbnail,
              link: "https://github.com",
              title: "Domino - Productivity app",
              usedTechnologies: ["Node", "TS", "React", "GraphQL"],
            }}
          />
          <ProjectCard
            project={{
              imageSrc: loadistThumbnail,
              link: "https://github.com",
              title: "Loadist.io - Relay automation",
              usedTechnologies: [
                "PostgreSQL",
                "AWS",
                "Python",
                "Selenium",
                "Nest",
                "React",
                "TS",
              ],
            }}
          />
        </div>
        <div className={styles.projectsRow}>
          <ProjectCard
            project={{
              imageSrc: sozTopThumbnail,
              link: "https://github.com",
              title: "Soz Top - Word Game",
              usedTechnologies: ["C#", "Unity 3D"],
            }}
          />
          <ProjectCard
            project={{
              imageSrc: aralashSozThumbnail,
              link: "https://github.com",
              title: "Aralash So'z - Relay automation",
              usedTechnologies: ["C#", "Unity 3D"],
            }}
          />
        </div>
      </div>
      <Button icon={<ArrowRight />}>Get in touch</Button>
    </div>
  );
}

export default ProjectsPage;
