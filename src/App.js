import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

import Home from "./components/Home";
import store from "./Context/index";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

const routerd = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
const arr = [
  {
    id: 1,
    projectName: "Tasty Kitchens (Swiggy/Zomato Clone)",
    description:
      "Constructed an engaging Online Food Ordering Service akin to Swiggy/Zomato,enabling users to discover top restaurants, obtain in-depth restaurant details,manage their cart, and process payments.",
    link: "https://govindtstkitchn.ccbp.tech/login",
    imgUrl:
      "https://res.cloudinary.com/dvzlfmmcb/image/upload/v1692598150/Rectangle_1456_1_qgstsi.png",
  },
  {
    id: 2,
    projectName: "Nxt Watch",
    description:
      "Developed the Nxt Watch platform, a YouTube-inspired application where users can access various video categories, such as Trending, Gaming, and Saved videos,and search for specific content while customising the visual theme.",
    link: "https://govindnxtwatch.ccbp.tech/login",
    imgUrl:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png",
  },
  {
    id: 3,
    projectName: "Jobby App",
    description: "Developed a comprehensive job search solution, Jobby App.",
    link: "https://govindjobbyapp.ccbp.tech/login",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/logo-img.png",
  },
];

function App() {
  const [projectsArr, setProjects] = useState(arr);
  return (
    <store.Provider value={{ projectsArr, setProjects }}>
      <RouterProvider router={routerd} />
    </store.Provider>
  );
}

export default App;
