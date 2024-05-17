import styles from "/src/styles/modules/posts/post.module.css";

interface props {
  type: boolean;
}

export default function Post({ type }: props) {
  return (
    <div className={styles.post}>
      {type ? (
        <>
          <div className={styles.post_img}>
            <img src="https://fakeimg.pl/1600x900" alt="" />
          </div>
          <div className={styles.user_img}>
            <img src="https://fakeimg.pl/50x50" alt="" />
          </div>
          <div className={styles.post_text}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </>
      ) : (
        <>
          <div className={styles.user_img}>
            <img src="https://fakeimg.pl/50x50" alt="" />
          </div>
          <div className={styles.post_text}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
              maxime veritatis qui distinctio laboriosam placeat, adipisci
              fugiat eum modi perferendis blanditiis labore reiciendis dolores,
              nemo vel tenetur officiis. Beatae, minus!
            </p>
          </div>
        </>
      )}
    </div>
  );
}
