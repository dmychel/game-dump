import Games from "./Games";
import styles from "/src/styles/modules/profile/userGames.module.css";
import { Link } from "react-router-dom";

export default function ProfileGames() {
  return (
    <div className={styles.user_games}>
      <div className={styles.games_header}>
        <h3>Users Games</h3>
        <Link to="/all-games">32 Games</Link>
      </div>
      <div className={styles.games}>
        <Games title={"Game Title"} cover={"https://fakeimg.pl/1600x900"} />
        <Games title={"Game Title"} cover={"https://fakeimg.pl/1600x900"} />
        <Games title={"Game Title"} cover={"https://fakeimg.pl/1600x900"} />
      </div>
    </div>
  );
}
