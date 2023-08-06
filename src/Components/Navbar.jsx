import styled from "styled-components";

const Navbar = () => {
  const links = ["Home", "Dashboard", "Learn", "FAQ", "Contact", "About"];
  return (
    <Nav>
      <div className="brand">
        <h2>Coinbase</h2>
      </div>
      <div className="toggle"></div>
    </Nav>
  );
};
const Nav = styled.nav``;
export default Navbar;
