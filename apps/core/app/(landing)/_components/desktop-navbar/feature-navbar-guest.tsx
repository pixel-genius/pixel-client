import Typography from "@repo/ui/components/typography";

const FeatureNavbarGuest = () => {
  return (
    <div className="flex items-center gap-3">
      <Typography
        component="a"
        href="/auth/register"
        variant="label/sm"
        weight="medium"
        className="text-primary-500 flex-shrink-0"
      >
        Sign Up
      </Typography>
      <Typography
        component="a"
        href="/auth/login"
        variant="label/sm"
        weight="medium"
        className="text-primary-500 flex-shrink-0"
      >
        Log in
      </Typography>
    </div>
  );
};

export default FeatureNavbarGuest;
