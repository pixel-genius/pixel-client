import FeatureNavbarAuthenticated from "./feature-navbar-authenticated";
import FeatureNavbarGuest from "./feature-navbar-guest";

export interface AuthStatusBarProps {
  isLogin: boolean;
}

const FeaturesNavbar = (props: AuthStatusBarProps) => {
  const { isLogin } = props;

  // TODO: delete mr-4
  return (
    <div className="flex shrink-0 items-center gap-3  mr-4">
      {isLogin && <FeatureNavbarAuthenticated />}
      {!isLogin && <FeatureNavbarGuest />}
    </div>
  );
};

export default FeaturesNavbar;
