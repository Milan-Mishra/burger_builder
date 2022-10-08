import logoImage from "../../assets/images/burger-logo.png";
import "./logo.css";

export const Logo = ({ isMobileDevice }: { isMobileDevice: boolean }) => {
  const style = { height: "85%", marginBottom: "0px" };
  if (isMobileDevice) {
    style.marginBottom = "32px";
    style.height = "11%";
  }
  return (
    <div className="logo" style={style}>
      <img src={logoImage} alt="burger" title="Burger" />
    </div>
  );
};
