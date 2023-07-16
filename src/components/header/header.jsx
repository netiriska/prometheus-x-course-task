import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="container-fluid">
          <Link to="/">BookList</Link>
          <Link to="/specificbook">SpecificBook</Link>
          <Link to="/signin">Signin</Link>
        </div>
      </nav>
      <Outlet />
    </header>
  );
}
