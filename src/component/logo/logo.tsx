import logoImage from "../../assets/images/burger-logo.png";
import "./logo.css";

export const Logo = ({ isMobileDevice }: { isMobileDevice: boolean }) => {
  const styleObject = { height: "85%", marginBottom: "0px" };
  if (isMobileDevice) {
    styleObject.marginBottom = "332px";
    styleObject.height = "15%";
  }
  return (
    <div className="logo" style={styleObject}>
      <img src={logoImage} alt="burger" title="Burger" />
    </div>
  );
};
