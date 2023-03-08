import Title from "../components/Title";
import UserChildren from "./userChildren";
import { Outlet, Link } from "react-router-dom";
import classNames from "classnames";
import "./test.css";

export default function Test() {
  const tabStyle = classNames("tab_wrapper");
  const tabBtnStyle = classNames("tab_btn");
  return (
    <>
      <Title text="test" />
      <div>
        <nav className={tabStyle}>
          <Link className={tabBtnStyle} to="1">
            1
          </Link>
          <Link className={tabBtnStyle} to="2">
            2
          </Link>
          <Link className={tabBtnStyle} to="3">
            3
          </Link>
          <Link className={tabBtnStyle} to="4">
            4
          </Link>
        </nav>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
