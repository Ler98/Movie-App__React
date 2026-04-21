import "./index.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import WatchlistPage from "./pages/watchlistPage/WatchlistPage.jsx";
// import WatchlistPage from "./pages/watchlistPage";
import SearchResultPage from "./pages/searchResultPage/SearchResultPage";
import SinglePage from "./pages/singlePage/SinglePage.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "watchlist",
          element: <WatchlistPage />,
        },
        {
          path: "search",
          element: <SearchResultPage />,
        },
        {
          path: "movie/:id",
          element: <SinglePage />,
        },
        {
          path: "error",
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  return (
    <MantineProvider>
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </MantineProvider>
  );
}

export default App;
