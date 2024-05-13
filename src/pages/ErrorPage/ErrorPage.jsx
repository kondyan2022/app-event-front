import { useNavigate, useRouteError } from "react-router-dom";
import { ErrorPageWrapper } from "./ErrorPage.styled";

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);

  return (
    <ErrorPageWrapper id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </ErrorPageWrapper>
  );
}
