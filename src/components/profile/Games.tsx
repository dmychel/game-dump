import styles from "/src/styles/modules/profile/userGames.module.css";

interface props {
  title: string;
  cover: string;
}

export default function Games({ title, cover }: props) {
  return (
    <div className={styles.game}>
      <div className={styles.game_image}>
        <img src={cover} alt="" />
      </div>
      <div className={styles.call_action}>
        <button>&gt;</button>
      </div>
    </div>
  );
}
