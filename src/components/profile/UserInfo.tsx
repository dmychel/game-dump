import styles from "/src/styles/modules/profile/userInfo.module.css";

export default function UserInfo() {
  return (
    <div className={styles.user_info}>
      <div className={styles.bio}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          obcaecati
        </p>
      </div>
      <button>Edit Profile</button>
    </div>
  );
}
