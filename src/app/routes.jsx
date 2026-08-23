import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "../features/home/pages/HomePage";
import AboutPage from "../features/about/pages/AboutPage";
import ProjectsPage from "../features/projects/pages/ProjectsPage";
import ArchitecturePage from "../features/architecture/pages/ArchitecturePage";
import ExperiencePage from "../features/experience/pages/ExperiencePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "architecture", element: <ArchitecturePage /> },
      { path: "experience", element: <ExperiencePage /> },
    ],
  },
]);
