import { Link } from "react-router-dom";
import { LinksContainer } from "./styles";

const MenuItemLink = ({ to, children }) => (
  <Link style={{ color: "#fff" }} to={to}>
    {children}
  </Link>
);

const MenuItem = ({ icon, label, to }) => (
  <LinksContainer>
    {icon}
    <MenuItemLink to={to}>{label}</MenuItemLink>
  </LinksContainer>
);

export default MenuItem;
