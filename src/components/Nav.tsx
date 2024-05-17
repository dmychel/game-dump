import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/">
        <img src="/assets/house.png" />
      </Link>

      <Link to="/post">
        <img src="/assets/more.png" />
      </Link>

      <Link to="/profile">
        <img src="/assets/user.png" />
      </Link>
    </nav>
  );
}
