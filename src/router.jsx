import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { EventListPage } from "./pages/EventListPage/EventListPage";
import { EventParticipantsPage } from "./pages/EventParticipantsPage/EventParticipants";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

import { addEventParticipantAction, eventLoader, participantsLoader } from "./api/loaders";

const router = createBrowserRouter(
  [
    {
      // path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          // index: true,
          element: <EventListPage />,
          loader: eventLoader,
          children: [
            {
              path: "/events/:event",
              element: <EventParticipantsPage />,
              loader: participantsLoader,
            },
            { path: "registration/:event", element: <RegistrationPage />, action: addEventParticipantAction },
          ],
        },
      ],
      errorElement: <ErrorPage />,
    },
  ],
  { basename: "/app-event-front" }
);

export default router;
