import "./navigation_link.css";

export const NavigationLink = ({
  children,
  link,
  active,
}: {
  children: any;
  link: string;
  active: boolean;
}) => (
  <li className="navigationItem">
    <a className={active ? "active" : ""} href={link}>
      {children}
    </a>
  </li>
);
