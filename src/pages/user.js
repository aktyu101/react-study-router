import { Outlet } from "react-router-dom";
import UserChildren from "./user children";
export default function User() {
  return (
    <>
      <div>user parent</div>
      <div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

//Outlet
