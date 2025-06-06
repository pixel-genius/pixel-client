import { ProductTabContentLayout } from "./product-tab-content-layout";
import { VersionItem, VersionItemProps } from "./version-item";

const VERSION_ITEMS: VersionItemProps[] = [
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
  {
    title: "vesrion",
    description:
      "A freelance graphic and UI/UX designer. I specialise in Web Design , logo and brand development, motion graphics, and offer design services to business of all sizes ....",
    version: "3.2.4",
    checked: false,
  },
];

export const VersionTab = () => {
  return (
    <ProductTabContentLayout title="Version History">
      <div className="bg-card rounded-lg  px-4 ">
        {VERSION_ITEMS.map((data, index) => (
          <VersionItem
            key={`${data.title}-${index}`}
            {...data}
            isLastItem={index + 1 === VERSION_ITEMS.length}
          />
        ))}
      </div>
    </ProductTabContentLayout>
  );
};
