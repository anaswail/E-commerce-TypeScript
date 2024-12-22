import { Container } from "react-bootstrap";
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

const Error = () => {
  // return the error that come from the router dom
  const error = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;

  // to make sure the error is come correctly
  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "Page Not Found";
  }

  return (
    <Container className="notFound">
      {/* show the status number of the error that come from the router component  */}
      <h1>{errorStatus}</h1>

      {/* show the status text of the error that come from the router component  */}
      <p>{errorStatusText}</p>
      <Link to="/" replace={true}>
        {" "}
        How about going back to safety?
      </Link>
    </Container>
  );
};

export default Error;
