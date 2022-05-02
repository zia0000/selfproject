import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="research">Research</Link>
        </li>
        <li>
          <Link to="result">Result</Link>
        </li>
      </ul>
    </>
  );
}
