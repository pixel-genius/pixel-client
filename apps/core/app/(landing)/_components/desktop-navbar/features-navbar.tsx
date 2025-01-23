import Shoppingbagicon from "@repo/icons/shopping-bag";
import FeatureNavbarAuthenticated from "./feature-navbar-authenticated";
import FeatureNavbarGuest from "./feature-navbar-guest";

export interface AuthStatusBarProps {
  islogin: boolean;
}

const FeaturesNavbar = (props: AuthStatusBarProps) => {
  const { islogin } = props;
  return (
    <div className="flex items-center gap-3">
      {islogin && <FeatureNavbarAuthenticated />}
      {!islogin && <FeatureNavbarGuest />}
    </div>
  );
};

export default FeaturesNavbar;
