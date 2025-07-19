import Image from "next/image";

import { Typography } from "@repo/ui/components/atoms/typography";

import BecomeAnAuthorimage from "../../_assets/become-auther.svg";
import { AutherLayout } from "./auther-layout";
import Vector3d from "./vector3d";

const AutherResult = () => {
  return (
    <>
      <AutherLayout>
        <div className="self-center">
          <Typography className="py-2" variant="heading/lg" weight="bold">
            Your Request Will Be Reviewed
          </Typography>
          <Typography
            variant="paragraph/md"
            weight="normal"
            className="text-muted-foreground"
          >
            Thank you for submitting your application to become a part of the
            PixelGenius team.
          </Typography>

          <Typography
            variant="paragraph/md"
            weight="light"
            className="text-muted-foreground pt-6"
          >
            Your application is currently under careful review by our team, and
            we will contact you via email within the next 1-3 business days with
            our decision and the next steps.We appreciate your patience during
            this process.
          </Typography>
        </div>
      </AutherLayout>
    </>
  );
};
export default AutherResult;
