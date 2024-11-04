import Link from "next/link";
import { ArrowRight } from "react-feather";

import styles from "@/styles/Work.module.css";
import { Button } from "@/components/Button";
import { WorkCard } from "@/components/WorkCard";
import works from "@/constants/works";
import { BouncyBox } from "@/components/BouncyBox";

function WorkPage() {
  return (
    <div>
      <BouncyBox>
        <h1>Work Experience</h1>
      </BouncyBox>
      <div className={styles.worksListContainer}>
        {works.map((work, i) => (
          <BouncyBox key={i} delay={50 * i}>
            <WorkCard key={work.companyName} work={work} />
          </BouncyBox>
        ))}
      </div>
      <BouncyBox delay={50 * works.length}>
        <Link href="/projects">
          <Button icon={<ArrowRight />}>Learn about side projects</Button>
        </Link>
      </BouncyBox>
    </div>
  );
}

export default WorkPage;
