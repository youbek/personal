import { ArrowRight } from "react-feather";

import styles from "@/styles/Projects.module.css";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";

import dominoThumbnail from "../../../public/images/domino_thumbnail.png";
import loadistThumbnail from "../../../public/images/loadist_thumbnail.png";
import sozTopThumbnail from "../../../public/images/soz_top_thumbnail.png";
import aralashSozThumbnail from "../../../public/images/aralash_soz_thumbnail.png";
import { BouncyBox } from "@/components/BouncyBox";

function ProjectsPage() {
  return (
    <div>
      <BouncyBox>
        <h1>Side Projects</h1>
      </BouncyBox>
      <div className={styles.container}>
        <div className={styles.projectsRow}>
          <BouncyBox delay={50}>
            <ProjectCard
              project={{
                imageSrc: dominoThumbnail,
                title: "Domino - Productivity app",
                usedTechnologies: ["Node", "TS", "React", "GraphQL"],
              }}
            />
          </BouncyBox>
          <BouncyBox delay={150}>
            <ProjectCard
              project={{
                imageSrc: loadistThumbnail,
                title: "Loadist - Amazon relay automation",
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
          </BouncyBox>
        </div>
        <div className={styles.projectsRow}>
          <BouncyBox delay={250}>
            <ProjectCard
              project={{
                imageSrc: sozTopThumbnail,
                title: "Soz Top - Word Game",
                usedTechnologies: ["C#", "Unity 3D"],
              }}
            />
          </BouncyBox>
          <BouncyBox delay={350}>
            <ProjectCard
              project={{
                imageSrc: aralashSozThumbnail,
                title: "Aralash So'z - Word Game",
                usedTechnologies: ["C#", "Unity 3D"],
              }}
            />
          </BouncyBox>
        </div>
      </div>
      <BouncyBox delay={400}>
        <a href="mailto:yusufbek.a@outlook.com">
          <Button icon={<ArrowRight />}>Get in touch</Button>
        </a>
      </BouncyBox>
    </div>
  );
}

export default ProjectsPage;
