import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Quizes</Link>
        </li>
        <li>
          <Link to="/Quiz">Quiz</Link>
        </li>
      </ul>
    </nav>
  );
}
