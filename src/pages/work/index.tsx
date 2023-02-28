import Link from "next/link";
import { ArrowRight } from "react-feather";

import styles from "@/styles/Work.module.css";
import { Button } from "@/components/Button";
import { WorkCard } from "@/components/WorkCard";
import works from "./works";

function WorkPage() {
  return (
    <div>
      <h1>Work Experience</h1>
      <div className={styles.worksListContainer}>
        {works.map((work) => (
          <WorkCard key={work.companyName} work={work} />
        ))}
      </div>
      <Link href="/projects">
        <Button icon={<ArrowRight />}>Learn more about projects</Button>
      </Link>
    </div>
  );
}

export default WorkPage;
