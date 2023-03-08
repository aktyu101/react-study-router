import { Outlet, Link } from "react-router-dom";
import UserChildren from "./userChildren";
import Title from "../components/Title";
import "./user.css";
import classNames from "classnames";

export default function User() {
  const tabClass = classNames("link-tab");
  const tabNav = classNames("tab-nav");
  return (
    <>
      <Title text="user" />
      <div>
        <nav className={tabNav}>
          <Link to="1" className={tabClass}>
            Tab1
          </Link>
          <Link to="2" className={tabClass}>
            Tab2
          </Link>
          <Link to="3" className={tabClass}>
            Tab3
          </Link>
        </nav>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

//Outlet
