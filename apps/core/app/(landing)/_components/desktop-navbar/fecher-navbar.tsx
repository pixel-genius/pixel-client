import Heart1icon from "@repo/icons/heart1";
import Shoppingbagicon from "@repo/icons/shopping-bag";
import { motion } from "framer-motion";
import Link from "next/link";
import FecherNavbarAuthenticated from "./fecher-navbar-authenticated";
import FecherNavbarGuest from "./fecher-navbar-guest";

export interface AuthStatusBarProps {
  islogin: boolean;
}

const AuthStatusBar = (props: AuthStatusBarProps) => {
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

export default AuthStatusBar;
