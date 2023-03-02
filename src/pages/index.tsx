import Link from "next/link";

import { ArrowRight } from "react-feather";

import { Button } from "@/components/Button";
import { ProfilePicture } from "@/components/ProfilePicture";
import { BouncyBox } from "@/components/BouncyBox";

export default function Home() {
  return (
    <>
      <div>
        <BouncyBox>
          <ProfilePicture />
        </BouncyBox>
        <BouncyBox delay={25}>
          <h1>Yusufbek Alimatov</h1>
        </BouncyBox>
        <div>
          <BouncyBox delay={30}>
            <p>
              Hey 👋, I&apos;m Yusuf. Software engineer living and working
              remotly from Tashkent.
            </p>
          </BouncyBox>
          <BouncyBox delay={100}>
            <p>
              I&apos;ve been coding professionaly for more than 5 years now,
              throughout my software engineering career, I was able to work in
              various companies in various industries, solved different
              problems, and used various tools.
            </p>
          </BouncyBox>
          <BouncyBox delay={140} from={{ y: 50, opacity: 0 }}>
            <p>
              Currently, I&apos;m looking for senior full stack software
              engineering positions.
            </p>
          </BouncyBox>
        </div>
        <BouncyBox delay={150} from={{ y: 50, opacity: 0 }}>
          <Link href="/work">
            <Button icon={<ArrowRight />}>Learn more about work</Button>
          </Link>
        </BouncyBox>
      </div>
    </>
  );
}
