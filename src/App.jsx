import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DataSet } from "./screens/DataSet";
import { Homepage } from "./screens/Homepage";
import { TopicNavigatorgrid } from "./screens/TopicNavigatorgrid";
import { TopicNavigatorlist } from "./screens/TopicNavigatorlist";
import { StateProfileNo } from "./screens/StateProfileNo";
import { WebinarPast } from "./screens/WebinarPast";
import { SearchResource } from "./screens/SearchResource";
import { BriefsAndBlogs } from "./screens/BriefsAndBlogs";
import { Resources } from "./screens/Resources";
import { Glossary } from "./screens/Glossary";
import { Contact } from "./screens/Contact";
import { Faq } from "./screens/Faq";
import { ReleaseNotesView } from "./screens/ReleaseNotesView";
import { DataExplorer } from "./screens/DataExplorer";
import { Release } from "./screens/Release";
import { ReleaseNotes } from "./screens/ReleaseNotes";
import { Reports } from "./screens/Reports";
import { ReportsScreen } from "./screens/ReportsScreen";
import { AboutDataSets } from "./screens/AboutDataSets";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Homepage />,
  },
  {
    path: "/02",
    element: <DataSet />,
  },
  {
    path: "/01",
    element: <Homepage />,
  },
  {
    path: "/03",
    element: <TopicNavigatorgrid />,
  },
  {
    path: "/04",
    element: <TopicNavigatorlist />,
  },
  {
    path: "/05",
    element: <StateProfileNo />,
  },
  {
    path: "/06",
    element: <WebinarPast />,
  },
  {
    path: "/07",
    element: <SearchResource />,
  },
  {
    path: "/08",
    element: <BriefsAndBlogs />,
  },
  {
    path: "/09",
    element: <Resources />,
  },
  {
    path: "/10",
    element: <Glossary />,
  },
  {
    path: "/11",
    element: <Contact />,
  },
  {
    path: "/12",
    element: <Faq />,
  },
  {
    path: "/13",
    element: <ReleaseNotesView />,
  },
  {
    path: "/14",
    element: <DataExplorer />,
  },
  {
    path: "/15",
    element: <Release />,
  },
  {
    path: "/16",
    element: <ReleaseNotes />,
  },
  {
    path: "/17",
    element: <Reports />,
  },
  {
    path: "/18",
    element: <ReportsScreen />,
  },
  {
    path: "/19",
    element: <AboutDataSets />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
