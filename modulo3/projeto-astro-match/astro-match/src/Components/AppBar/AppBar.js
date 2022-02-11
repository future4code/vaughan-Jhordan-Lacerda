import logo from "../../Assets/img/logoAstroMatch.png";
import { AppImage, HeaderApp, RightButton } from "./styled";

export default function AppBar(props) {
  return (
    <HeaderApp>
      <AppImage src={logo} />
      <div>
        <button onClick={props.changePage}>Ir para página de matches</button>
      </div>
    </HeaderApp>
  );
}
