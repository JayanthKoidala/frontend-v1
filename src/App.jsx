// src/App.jsx
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout.jsx";
import DashboardPage from "./Pages/DashboardPage";
import DiscoverPage from "./Pages/DiscoverPage";
import DecisionPage from "./Pages/DecisionPage";
import DocumentsPage from "./Pages/DocumentsPage";
import AuthPage from "./Pages/AuthPage";
import DecisionMainPage from "./Pages/DecisionMainPage";
import WorkFlowBuilderLayout from "./Layout/WorkFlowBuilderLayout";
import DocumentsCategory from "./Components/Documents/DocumentsCategory.jsx";
import ErrorPage from "./Pages/ErrorPage";
import "./App.css";

// Define a custom theme for consistency
const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#f6f2f2", // Matching background color
      },
    },
  },
});

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/Discover",
        element: <DiscoverPage />,
      },
      {
        path: "/Decision",
        element: <DecisionPage />,
        children: [
          {
            path: "/Decision",
            element: <DecisionMainPage />,
          },
          {
            path: "/Decision/Workflow",
            element: <WorkFlowBuilderLayout />,
          },
        ],
      },
      {
        path: "/Documents",
        element: <DocumentsPage />,
        children: [
          {
            path: ":category",
            element: <DocumentsCategory />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <RouterProvider router={browserRouter} />
    </ChakraProvider>
  );
}

export default App;
