import Games from "./Games";
import styles from "/src/styles/modules/profile/userGames.module.css";
import { Link } from "react-router-dom";

export default function ProfileGames() {
  return (
    <div className={styles.user_games}>
      <div className={styles.games_header}>
        <h3>Users Games</h3>
        <Link to="/profile">32 Games</Link>
      </div>
      <div className={styles.games}>
        <Games />
        <Games />
        <Games />
      </div>
    </div>
  );
}
