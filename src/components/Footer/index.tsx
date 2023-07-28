import { useEffect, useState } from "react";
import { GitHub, Linkedin } from "react-feather";

import styles from "./Footer.module.css";

export function Footer() {
  const [speedlifyHash, setSpeedlifyHash] = useState<string>("");

  useEffect(() => {
    const hashFetch = async () => {
      let json = await (
        await fetch("https://speedlify.yusufbek.me/api/urls.json")
      ).json();

      setSpeedlifyHash(json["https://yusufbek.me/"].hash);
    };

    hashFetch();
  }, []);

  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div>
          <p>© Yusufbek Alimatov 2023</p>
          <div className={styles.speedlifyContainer}>
            <a
              href="https://speedlify.yusufbek.me/yusufbek.me/"
              target="_blank"
              rel="noreferrer"
            >
              <speedlify-score
                hash={speedlifyHash}
                url="https://yusufbek.me/"
                speedlify-url="https://speedlify.yusufbek.me"
              ></speedlify-score>
            </a>
          </div>
        </div>
        <div className="flex">
          <div style={{ marginRight: 10 }}>
            <a
              href="https://www.linkedin.com/in/yusufbek/"
              title="Learn more on LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/youbek/personal"
              title="Edit this page on GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
