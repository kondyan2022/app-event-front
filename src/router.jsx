import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { EventListPage } from "./pages/EventListPage/EventListPage";
import { EventParticipantsPage } from "./pages/EventParticipantsPage/EventParticipants";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

import { addEventParticipantAction, eventLoader, participantsLoader } from "./api/loaders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <EventListPage />,
        loader: eventLoader,
      },
      {
        path: "event/:event",
        element: <EventParticipantsPage />,
        loader: participantsLoader,
      },
      { path: "registration/:event", element: <RegistrationPage />, action: addEventParticipantAction },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
