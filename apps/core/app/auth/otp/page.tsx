// import components
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { Label } from "@repo/ui/components/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@repo/ui/components/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "@repo/ui/lib/utils";


// import icons
import PixelIcon from "@repo/icons/pxiel";
import GoogleIcon from "../../../../../packages/icons/src/components/google";
import LinkedinIcon from "../../../../../packages/icons/src/components/linkedin";

const Otppage = () => {
  return (
    <div className="flex items-center relative z-10 flex-col gap-4 bg-[#262626] w-[450px] rounded-xl ">
      {/* logo */}
      <div className=" pt-7 flex flex-col items-center gap-4">
        <PixelIcon size={86} color="currentColor" />
        <p className="text-2xl font-bold">Email Verification </p>
        <div className="flex flex-col items-center gap-2">
          <p>
            We've sent the code to{" "}
            <span>
              <a className="underline">example@pixel.design</a>
            </span>
          </p>
          <p>check your email</p>
        </div>
      </div>
      {/* otp input */}
      <div>
        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      

      {/* button */}
      <div className="pb-4">
        <Button
          className="w-96 text-lg font-bold  bg-primary-600 hover:bg-primary-500"
          variant="secondary"
        >
          Verify{" "}
        </Button>
      </div>
      <div className="pb-7">
        <p>
          didnt recieved code yet? <span className="underline">2:32</span>
        </p>
      </div>
    </div>
  );
};

export default Otppage;
