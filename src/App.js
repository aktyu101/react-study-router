import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Post from "./pages/Post";
import Main from "./pages/Main";
import PostSegment from "./pages/PostSegment";
import User from "./pages/user";
import Test from "./pages/Test";
import UserChildren from "./pages/user children";
import Navigation from "./components/Navigation";
import "./App.css";
//react router dom index 또는 app 최상위에 존재해야함
const router = createBrowserRouter([
  {
    path: "/", //최상단 경로
    element: <Layout />, //페이지
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/post",
        element: <Post />,
      },
      {
        path: "/post/:id", //segment
        element: <PostSegment />,
      },
      {
        path: "/user",
        element: <User />,
        children: [{ path: ":id", element: <UserChildren /> }],
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  ); //return을 시켜줘야 실행됨
}

export default App;
