import styles from "/src/styles/modules/newPost.module.css";
import { Link } from "react-router-dom";

export default function NewPost() {
  return (
    <section className={styles.new_post}>
      <Link className={styles.cancel} to="/">
        &#10006;
      </Link>
      <form>
        <input type="text" placeholder="title" className={styles.title} />
        <textarea placeholder="Text here" className={styles.comment} />
        <button className={styles.add_file}>Add file</button>
      </form>
    </section>
  );
}
