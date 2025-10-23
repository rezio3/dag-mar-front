import Media from "react-media";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

export type NavbarProps = {
  burgerActive: boolean;
  setBurgerActive: (value: boolean) => void;
};
const Navbar: React.FC<NavbarProps> = ({ burgerActive, setBurgerActive }) => {
  return (
    <>
      <Media query="(min-width: 992px)">
        {(matches: boolean) => {
          return matches ? (
            <NavbarDesktop />
          ) : (
            <NavbarMobile
              burgerActive={burgerActive}
              setBurgerActive={setBurgerActive}
            />
          );
        }}
      </Media>
    </>
  );
};

export default Navbar;
