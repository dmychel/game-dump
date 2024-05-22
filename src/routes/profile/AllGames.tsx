import Games from "../../components/profile/Games";
import styles from "/src/styles/modules/profile/userGames.module.css";

export default function AllGames() {
  const games = [
    {
      id: crypto.randomUUID(),
      title: "Game Title",
      cover: "https://fakeimg.pl/1600x900",
    },
    {
      id: crypto.randomUUID(),
      title: "Game Title",
      cover: "https://fakeimg.pl/1600x900",
    },
    {
      id: crypto.randomUUID(),
      title: "Game Title",
      cover: "https://fakeimg.pl/1600x900",
    },
    {
      id: crypto.randomUUID(),
      title: "Game Title",
      cover: "https://fakeimg.pl/1600x900",
    },
    {
      id: crypto.randomUUID(),
      title: "Game Title",
      cover: "https://fakeimg.pl/1600x900",
    },
    {
      id: crypto.randomUUID(),
      title: "Game Title",
      cover: "https://fakeimg.pl/1600x900",
    },
    {
      id: crypto.randomUUID(),
      title: "Game Title",
      cover: "https://fakeimg.pl/1600x900",
    },
    {
      id: crypto.randomUUID(),
      title: "Game Title",
      cover: "https://fakeimg.pl/1600x900",
    },
    {
      id: crypto.randomUUID(),
      title: "Game Title",
      cover: "https://fakeimg.pl/1600x900",
    },
    {
      id: crypto.randomUUID(),
      title: "Game Title",
      cover: "https://fakeimg.pl/1600x900",
    },
    {
      id: crypto.randomUUID(),
      title: "Game Title",
      cover: "https://fakeimg.pl/1600x900",
    },
  ];

  return (
    <section>
      <div className={styles.user_games}>
        {games.map((game, index) => (
          <Games key={index} title={game.title} cover={game.cover} />
        ))}
      </div>
    </section>
  );
}
