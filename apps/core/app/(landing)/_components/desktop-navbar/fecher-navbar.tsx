import { motion } from "framer-motion";
import FecherNavbarAuthenticated from "./fecher-navbar-authenticated";
import FecherNavbarGuest from "./fecher-navbar-guest";

export interface AuthStatusBarProps {
  islogin: boolean;
}

const Fechernabar = (props: AuthStatusBarProps) => {
  const { islogin } = props;
  return (
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "auto" }}
      exit={{ opacity: 0, width: 0 }}
      transition={{ duration: 1 }}
      className="flex items-center "
    >
      {islogin && <FecherNavbarAuthenticated />}
      {!islogin && <FecherNavbarGuest />}
    </motion.div>
  );
};

export default Fechernabar;
