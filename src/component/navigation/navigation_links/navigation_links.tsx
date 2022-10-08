import { NavigationLink } from "./navigation_link/navigation_link";
import "./navigation_links.css";

export const NavigationLinks = () => (
  <ul className="navigationItems">
    <NavigationLink link="/" active={true}>
      Burger builder
    </NavigationLink>
    <NavigationLink link="/" active={false}>
      Checkout
    </NavigationLink>
  </ul>
);
