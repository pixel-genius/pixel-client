import { Typography } from "@repo/ui/components";
import { AutherLayout } from "./auther-layout";
import Image from "next/image";
import BecomeAnAuthorimage from "../../_assets/become-auther.svg";

const AutherResult = () => {
  return (
    <>
      <AutherLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-44">
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
              Your application is currently under careful review by our team,
              and we will contact you via email within the next 1-3 business
              days with our decision and the next steps.We appreciate your
              patience during this process.
            </Typography>
          </div>
          <div>
            <Image
              className="w-[600px] h-[600px] object-cover hidden md:block"
              width={500}
              height={500}
              src={BecomeAnAuthorimage}
              alt="pixel-genius-logo"
            />
          </div>
        </div>
      </AutherLayout>
    </>
  );
};
export default AutherResult;
