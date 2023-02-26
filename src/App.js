import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import Post from "./pages/Post";
import PostSegment from "./pages/PostSegment";
import User from "./pages/user";
import UserChildren from "./pages/user children";

const router = createBrowserRouter([
  {
    path: "/", //최상단 경로
    element: <Main />, //페이지
  },
  {
    path: "/post",
    element: <Post />,
  },
  {
    path: "/post/:id",
    element: <PostSegment />,
  },
  {
    path: "/user",
    element: <User />,
    children: [{ path: ":id", element: <UserChildren /> }],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
