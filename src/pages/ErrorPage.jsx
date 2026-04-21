import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { useState } from "react";
import "../index.css";

const ErrorPage = () => {
  const error = useRouteError();
  const [showLink, setShowLink] = useState(false);

  function errorMeme() {
    alert("Something went wrong");

    function errorMeme2() {
      alert("Something went wrong again...");
    }
    function errorMeme3() {
      alert("Stop making something go wrong!!");
    }
    function errorMeme4() {
      alert("Okay, now its getting out of hand.");
    }
    function errorMeme5() {
      alert("Now it works!");
    }
    function errorMeme6() {
      alert(
        "Annnnd, it's broken again... Sorry, contact support using the button below."
      );
      setShowLink(true);
    }

    setTimeout(errorMeme2, 1000);
    setTimeout(errorMeme3, 3000);
    setTimeout(errorMeme4, 5000);
    setTimeout(errorMeme5, 7000);
    setTimeout(errorMeme6, 9000);
  }

  let errorMessage;
  let errorDesc;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.status;
    errorDesc = error.statusText;
  } else {
    errorMessage = error.message;
    errorDesc = "Yikes, there was an error!";
  }

  return (
    <div className="error-page">
      <section className="error">
        <p className="error__desc">{errorDesc}</p>
        <img
          src="https://preview.redd.it/feel-old-yet-i-recreated-the-task-failed-successfully-in-v0-pjobpj04hbf91.png?width=213&format=png&auto=webp&s=a532ac505ed03b4e03fee0c52d79c55489a5104c"
          alt=""
          className="error__img"
        />
        <p className="error__title">
          Jk, this is the actual error: {errorMessage}
        </p>
        <button onClick={errorMeme} className="error__button">
          Take me back!
        </button>
        {showLink && (
          <a
            className="errorMemeBtn"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1"
          >
            Contact Support
          </a>
        )}
      </section>
    </div>
  );
};

export default ErrorPage;
