import Image from "next/image";

const AutherResult = () => {
  return (
    <div>
      <Image
        src="/images/_YourRequestWillBeReviewed.png"
        alt="Description of the image for SEO"
        layout="fill" // Makes the image fill its parent container
        objectFit="cover" // Ensures the image scales nicely
        priority={true} // Preload the image for better performance
        className="z-[-2]"
      />
      <div className="w-1/2 pb-7 ">
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
      </div>
    </div>
  );
};
export default AutherResult;
