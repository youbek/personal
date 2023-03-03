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
              Hey 👋, I&apos;m Yusuf. JavaScript/TypeScript software engineer
              living and working remotly from Tashkent.
            </p>
          </BouncyBox>
          <BouncyBox delay={100}>
            <p>
              Over the course of my 5+ years of experience I’ve been fortunate
              to work on creating high-quality software with all things
              JavaScript especially React and Node.
            </p>
          </BouncyBox>
          <BouncyBox delay={120}>
            <p>
              I worked on delivering and architecting complex CRM systems,
              internal tools, micro frontends. I actively participated on
              decision making, as well as team’s goal setting. I enjoy learning
              new technologies and constantly work on improving my skills and
              workflow.
            </p>
          </BouncyBox>
          <BouncyBox delay={140} from={{ y: 50, opacity: 0 }}>
            <p>
              When not working, you can find me in Tashkent, Uzbekistan with my
              big family. I enjoy traveling, playing online games such as Dota
              2, and I enjoy having 6 cups of coffee a day)
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
