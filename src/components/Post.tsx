interface props {
  type: boolean;
}

export default function Post({ type }: props) {
  return (
    <div className="post content">
      <div className="user">
        <h3>Username</h3>
      </div>
      <div className="post-content">
        {type ? (
          <img src="https://placehold.co/600x400" alt="" />
        ) : (
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            dolores maxime recusandae similique earum ipsa facere ratione! Omnis
            provident nostrum dolor dignissimos adipisci! Explicabo, quis?
            Consequuntur ab neque saepe quaerat!
          </p>
        )}
      </div>
      <div className="interactive">
        <ul>
          <li>Like</li>
          <li>save</li>
        </ul>
        <div className="comment">Add a comment</div>
      </div>
    </div>
  );
}
