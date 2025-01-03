import Shoppingbagicon from "@repo/icons/shopping-bag";
import FecherNavbarAuthenticated from "./feather-navbar-authenticated";
import FecherNavbarGuest from "./feather-navbar-guest";

export interface AuthStatusBarProps {
  islogin: boolean;
}

const Fechernabar = (props: AuthStatusBarProps) => {
  const { islogin } = props;
  return (
    <div className="flex items-center gap-3">
      <Shoppingbagicon size={24} color="white" />
      {islogin && <FecherNavbarAuthenticated />}
      {!islogin && <FecherNavbarGuest />}
    </div>
  );
};

export default Fechernabar;
