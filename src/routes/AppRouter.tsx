import { MainLayout } from "@layouts/index";
import Home from "@pages/Home";
import AboutUs from "@pages/AboutUs";
import Categories from "@pages/Categories";
import Products from "@pages/Products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "@pages/Login";
import Register from "@pages/Register";
import Error from "@pages/Error";

const router = createBrowserRouter([
  {
    // the main component that showen when the page is load on the start
    path: "/",
    element: <MainLayout />,
    // error component that show when the url is wrong or not found
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "products/:prefix",
        element: <Products />,
        // to make when the url writed as a number or contain a number it return error and don't send request to the backend
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Bad Request", {
              statusText: "Category Not Found",
              status: 400,
            });
          }
          return true;
        },
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

// export the component to main.tsx component

export default AppRouter;
