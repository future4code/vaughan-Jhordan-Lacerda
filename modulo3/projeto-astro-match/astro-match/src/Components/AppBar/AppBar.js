import logo from "../../Assets/img/logoAstroMatch.png";
import { AppImage, HeaderApp, RightButton } from "./styled";

export default function AppBar(props) {
  return (
    <HeaderApp>
      <AppImage src={logo} />
      <div>
        <svg
        onClick={props.changePage}
          viewBox="0 0 24 24"
          style={{width: "2.25rem", height: "2.25rem"}}
          role="presentation"
        >
          <path d="M22.59,7.92L23.75,9.33L19,14.08L16.25,11.08L17.41,9.92L19,11.5L22.59,7.92M6,5A3,3 0 0,1 9,8A3,3 0 0,1 6,11A3,3 0 0,1 3,8A3,3 0 0,1 6,5M11,5A3,3 0 0,1 14,8A3,3 0 0,1 11,11C10.68,11 10.37,10.95 10.08,10.85C10.65,10.04 11,9.06 11,8C11,6.94 10.65,5.95 10.08,5.14C10.37,5.05 10.68,5 11,5M6,13C8,13 12,14 12,16V18H0V16C0,14 4,13 6,13M12.62,13.16C14.63,13.5 17,14.46 17,16V18H14V16C14,14.82 13.45,13.88 12.62,13.16Z"></path>
        </svg>
        {/* <button >Ir para página de matches</button> */}
      </div>
    </HeaderApp>
  );
}
