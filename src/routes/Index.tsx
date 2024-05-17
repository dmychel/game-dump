import Post from "../components/Post";
import styles from "/src/styles/modules/index.module.css";

export default function Index() {
  return (
    <section className={styles.home}>
      <Post type={true} />
      <Post type={false} />
      <Post type={true} />
    </section>
  );
}
