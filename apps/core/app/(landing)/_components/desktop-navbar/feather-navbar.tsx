import FecherNavbarAuthenticated from "./feather-navbar-authenticated";
import FecherNavbarGuest from "./feather-navbar-guest";

export interface AuthStatusBarProps {
  islogin: boolean;
}

const Fechernabar = (props: AuthStatusBarProps) => {
  const { islogin } = props;
  return (
    <>
      {islogin && <FecherNavbarAuthenticated />}
      {!islogin && <FecherNavbarGuest />}
    </>
  );
};

export default Fechernabar;
