import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import classNames from "classnames";
import "./Layout.css";

export default function Layout() {
  return (
    <>
      <Navigation />
      <Content>
        <Outlet />
      </Content>
    </>
  );
}

function Content({ children }) {
  // const contentClass = classNames({
  //   "content-wrapper": true, //조건에 의한 클래스 활성, 비활성
  // });
  const contentClass = classNames("content-wrapper");
  return <div className={contentClass}>{children}</div>;
}
