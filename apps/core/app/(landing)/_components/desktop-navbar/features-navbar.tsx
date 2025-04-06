import FeatureNavbarAuthenticated from "./feature-navbar-authenticated";
import FeatureNavbarGuest from "./feature-navbar-guest";

export interface AuthStatusBarProps {
  islogin: boolean;
}

const FeaturesNavbar = (props: AuthStatusBarProps) => {
  const { islogin } = props;

  // TODO: delete mr-4
  return (
    <div className="flex shrink-0 items-center gap-3  mr-4">
      {islogin && <FeatureNavbarAuthenticated />}
      {!islogin && <FeatureNavbarGuest />}
    </div>
  );
};

export default FeaturesNavbar;
