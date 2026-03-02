import Image from "next/image";
import profilePic from "../../../public/images/profile_picture.png";
import styles from "./ProfilePicture.module.css";

export function ProfilePicture() {
  return (
    <div className={styles.profilePictureContainer}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={profilePic.src} alt="yusufbek" width={96} />
    </div>
  );
}
