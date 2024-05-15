import { Link } from "react-router-dom";
import "/src/styles/nav.module.css";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img src="/assets/house.png" />
          </Link>
        </li>
        <li>
          <Link to="/post">
            <img src="/assets/more.png" />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <img src="/assets/user.png" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
