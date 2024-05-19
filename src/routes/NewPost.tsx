import styles from "/src/styles/modules/newPost.module.css";

export default function NewPost() {
  return (
    <section className={styles.new_post}>
      <button className={styles.cancel}>&#10006;</button>
      <form>
        <input type="text" placeholder="title" className={styles.title} />
        <textarea placeholder="Text here" className={styles.comment} />
        <button className={styles.add_file}>Add file</button>
      </form>
    </section>
  );
}
