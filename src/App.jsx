import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
// pages
import Home from "./pages/Home";
import HeadPhones from "./pages/HeadPhones";
import Speaker from "./pages/Speaker";
import EarPhones from "./pages/EarPhones";
import Mark2 from "./pages/Mark2";
function App() {
  const routest = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/headphones",
          element: <HeadPhones />,
        },
        {
          path: "/speakers",
          element: <Speaker />,
        },
        {
          path: "/earphones",
          element: <EarPhones />,
        },
        {
          path: "/mark2/:slug",
          element: <Mark2 />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routest} />
    </>
  );
}

export default App;
