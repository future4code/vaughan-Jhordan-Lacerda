import React from "react";
import { CenterDiv } from "./styled";

const ErrorPage = () => {
  return (
    <CenterDiv>
      <iframe
        src="https://giphy.com/embed/Ke8JKfxe83FpLrra71"
        width="480"
        height="480"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/error-404-Ke8JKfxe83FpLrra71">
          via GIPHY
        </a>
      </p>
    </CenterDiv>
  );
};

export default ErrorPage;
