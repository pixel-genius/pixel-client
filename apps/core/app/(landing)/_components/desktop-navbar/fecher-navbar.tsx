import { motion } from "framer-motion";
import FecherNavbarAuthenticated from "./fecher-navbar-authenticated";
import FecherNavbarGuest from "./fecher-navbar-guest";

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
