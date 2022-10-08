import { Logo } from "../../logo/logo";
import { NavigationLinks } from "../navigation_links/navigation_links";
import "./toolbar.css";

export const ToolbarComponent = ({
  toggleFunction,
}: {
  toggleFunction: Function;
}) => (
  <header className="Toolbar">
    <div
      className="DrawerToggle"
      onClick={() => (window.innerWidth <= 500 ? toggleFunction(true) : null)}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
    <Logo isMobileDevice={false} />
    <nav className="disableNavigationForMobile">
      <NavigationLinks />
    </nav>
  </header>
);
