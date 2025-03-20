import Typography from "@repo/ui/components/typography";
import Link from "next/link";

const FeatureNavbarGuest = () => {
  return (
    <div className="flex items-center gap-3">
      <Link href="/auth/register" className="text-primary-500 flex-shrink-0">
        <Typography variant="label/sm" weight="medium">
          Sign Up
        </Typography>
      </Link>

      <Link href="/auth/login" className="text-primary-500 flex-shrink-0">
        <Typography variant="label/sm" weight="medium">
          Log in
        </Typography>
      </Link>
    </div>
  );
};

export default FeatureNavbarGuest;
