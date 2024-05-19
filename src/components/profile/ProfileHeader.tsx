import styles from "/src/styles/modules/profile/profileHeader.module.css";

export default function ProfileHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.profile_background}>
        <img src="https://fakeimg.pl/1600x900" alt="" />
      </div>
      <div className={styles.user_image}>
        <img src="https://fakeimg.pl/75x75" alt="" />
      </div>
    </div>
  );
}
