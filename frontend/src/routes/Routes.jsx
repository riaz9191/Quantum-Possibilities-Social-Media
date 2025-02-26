import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Story from "../components/Shared/Story/Story";
import PhotoStory from "../components/Shared/Story/PhotoStory";
import StoryView from "../components/Shared/Story/StoryView";
import ViewAllReactions from "../components/Shared/Newsfeed/ViewReaction";
import TextStory from "../components/Shared/Story/TextStory";
import MyStory from "../components/Shared/Story/MyStory";
import StoryReaction from "../components/Shared/Story/StoryReaction";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/story",
        element: <Story />,
      },
      {
        path: "/create-photo-story",
        element: <PhotoStory />,
      },
      {
        path: "/create-text-story",
        element: <TextStory />,
      },
      // {
      //   path: '/create-text-story',
      //   element: <TextStory />,
      // },
      {
        path: "/view-story/:id",
        element: <StoryView />,
      },
      {
        path: "/view-all-reactions",
        element: <ViewAllReactions />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  
  {
    path: "/my-story",
    element: <MyStory />,
  },
  {
    path: "/story-reaction",
    element: <StoryReaction />,
  },
]);
