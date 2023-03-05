import { Link } from "react-router-dom";
import "./Navigation.css";
import classNames from "classnames";
export default function navigation() {
  const headerClass = classNames("header");
  const linkClass = classNames("btn-link");
  const logoClass = classNames("logo");
  const menuClass = classNames("menu-wrapper");
  return (
    <>
      <header className={headerClass}>
        <div>
          <Link to="/" className={logoClass}>
            logo
          </Link>
        </div>
        <nav className={menuClass}>
          <Link to="/post" className={linkClass}>
            post
          </Link>
          <Link to="/user" className={linkClass}>
            user
          </Link>
          <Link to="/test" className={linkClass}>
            test
          </Link>
        </nav>
      </header>
    </>
  );
}
