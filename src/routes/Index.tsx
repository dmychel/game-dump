import Post from "../components/Post";

export default function Index() {
  return (
    <div className="home content">
      <Post type={true} />
      <Post type={false} />
      <Post type={true} />
    </div>
  );
}
