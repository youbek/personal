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
        <h1>Projects</h1>
      </BouncyBox>
      <div className={styles.container}>
        <div className={styles.projectsRow}>
          <BouncyBox delay={50}>
            <ProjectCard
              project={{
                imageSrc: dominoThumbnail,
                link: "https://github.com/youbek/domino-mvp",
                title: "Domino - Productivity app",
                usedTechnologies: ["Node", "TS", "React", "GraphQL"],
              }}
            />
          </BouncyBox>
          <BouncyBox delay={150}>
            <ProjectCard
              project={{
                imageSrc: loadistThumbnail,
                link: "https://qa.loadist.io/sign-in",
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
          </BouncyBox>
        </div>
        <div className={styles.projectsRow}>
          <BouncyBox delay={250}>
            <ProjectCard
              project={{
                imageSrc: sozTopThumbnail,
                link: "https://play.google.com/store/apps/details?id=com.OyyuGames.WordGame",
                title: "Soz Top - Word Game",
                usedTechnologies: ["C#", "Unity 3D"],
              }}
            />
          </BouncyBox>
          <BouncyBox delay={350}>
            <ProjectCard
              project={{
                imageSrc: aralashSozThumbnail,
                link: "https://apps.apple.com/us/app/aralash-soz-soz-oyini/id1465774649",
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
