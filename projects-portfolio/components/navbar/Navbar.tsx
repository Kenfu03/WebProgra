import Link from "next/link";
import "./navbar.css";

const Menu = () => (
  <ul className="navbar-container">
    <li>
      <Link className="local-link" href="/">Home</Link>
    </li>
    <li>
      <Link className="local-link" href="/frontEnd-mentor">FrontEnd Mentor</Link>
    </li>
    <li>
      <Link className="local-link" href="/react-projects">React Practicing</Link>
    </li>
    <li>
      <Link className="local-link" href="/personal-projects">Personal Projects</Link>
    </li>
    <li>
      <Link className="local-link" href="/about">About</Link>
    </li>
  </ul>
);

const Navbar = () => {
  return (
    <div>
      <div className="logo"></div>
      <Menu />
    </div>
  );
};

export default Navbar;
