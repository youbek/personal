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
              Hey 👋, my name is Yusuf, and I&apos;m a JavaScript/TypeScript
              software engineer living and working remotely from Tashkent. With
              over 5 years of experience, I have been fortunate to work on
              creating high-quality software using various JavaScript
              technologies, particularly React and Node.
            </p>
          </BouncyBox>
          <BouncyBox delay={100}>
            <p>
              Throughout my career, I have worked on delivering and architecting
              complex CRM systems, internal tools, and micro frontends. I have
              actively participated in decision-making processes and setting
              team goals. Learning new technologies is a passion of mine, and I
              constantly work to improve my skills and workflow.
            </p>
          </BouncyBox>
          <BouncyBox delay={120}>
            <p>
              When I am not working, you can find me with my big family in
              Tashkent, Uzbekistan. I enjoy traveling, playing online games such
              as Dota 2, and having 6 cups of coffee a day.
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
