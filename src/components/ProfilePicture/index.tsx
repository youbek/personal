import Image from "next/image";
import profilePic from "../../../public/images/profile_picture.jpg";
import styles from "./ProfilePicture.module.css";

export function ProfilePicture() {
  return (
    <div className={styles.profilePictureContainer}>
      <Image src={profilePic} alt="yusufbek" width={96} />
    </div>
  );
}
