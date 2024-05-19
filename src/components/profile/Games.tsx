import styles from "/src/styles/modules/profile/userGames.module.css";

export default function Games() {
  return (
    <div className={styles.game}>
      <div className={styles.game_image}>
        <img src="https://fakeimg.pl/1600x900" alt="" />
      </div>
      <div className={styles.game_title}>
        <h2>Game Title</h2>
      </div>
    </div>
  );
}
