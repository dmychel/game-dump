import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Post</Link>
        </li>
        <li>
          <Link to="/">Profile</Link>
        </li>
      </ul>
    </nav>
  );
}
