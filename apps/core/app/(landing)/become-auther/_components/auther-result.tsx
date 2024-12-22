import { AutherLayout } from "./auther-layout";

const AutherResult = () => {
  return (
    <>
      <AutherLayout bgSrc="/images/test2.webp">
        <div className="pb-12 pt-12">
          <h1 className="text-4xl font-bold pb-5 ">
            Your Request Will Be Reviewed
          </h1>
          <p className="text-xl font-normal text-gray-500 pb-10">
            Thank you for submitting your application to become a part of the
            PixelGenius team.
          </p>
          <p className="text-xl font-normal text-gray-500 pb-10">
            {" "}
            Your application is currently under careful review by our team, and
            we will contact you via email within the next 1-3 business days with
            our decision and the next steps.We appreciate your patience during
            this process.
          </p>
        </div>
      </AutherLayout>
    </>
  );
};
export default AutherResult;
