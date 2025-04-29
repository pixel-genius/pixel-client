import { Typography } from "@repo/ui/components";
import VersionInfo from "./versionInfo";

const Version = () => {
  return (
    <>
      <Typography variant={"heading/sm"} className="font-bold">
        Version History
      </Typography>
      <div className="bg-card rounded-lg mt-4 px-4 pb-6">
        {[
          {
            title: "version",
            description:
              "A freelance graphic and UI/UX designer. I specialise in Web Design , logo and brand development, motion graphics, and offer design services to business of all sizes ....",
            version: "1.2.3",
            checked: true,
          },
          {
            title: "vesrion",
            description:
              "A freelance graphic and UI/UX designer. I specialise in Web Design , logo and brand development, motion graphics, and offer design services to business of all sizes ....",
            version: "2.2.4",
            checked: false,
          },
        ].map((data) => (
          <VersionInfo {...data} />
        ))}
      </div>
    </>
  );
};

export default Version;
