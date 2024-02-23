import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./redux/app/store";

import ProtecterRoutes from "./components/ProtecterRoutes";

import RootLayout from "./layouts/RootLayout";

import { onAuthStateChanged } from "firebase/auth";
import { useGlobalContext } from "./hooks/useGlobalContext";
import { useEffect } from "react";
import { auth } from "./firebase/firebaseConfig";
// pages
import Home from "./pages/Home";
import HeadPhones from "./pages/HeadPhones";
import Speaker from "./pages/Speaker";
import EarPhones from "./pages/EarPhones";
import Mark2 from "./pages/Mark2";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
  const { user, isAuthReady, dispatch } = useGlobalContext();
  const routest = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtecterRoutes user={true}>
          <RootLayout />
        </ProtecterRoutes>
      ),
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
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <Signup />,
    },
  ]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOGIN", payload: user });
      dispatch({ type: "IS_AUTH_READY" });
    });
  }, []);
  return (
    isAuthReady && (
      <Provider store={store}>
        <RouterProvider router={routest} />
      </Provider>
    )
  );
}

export default App;
