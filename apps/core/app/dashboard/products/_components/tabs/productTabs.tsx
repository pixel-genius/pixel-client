"use client";
import { Tabs, TabsList, TabsTrigger } from "@repo/ui/components/tabs";
import Typography from "@repo/ui/components/typography";
import { Dispatch, SetStateAction } from "react";

interface ProductTabsProps {
  tabs: { value: string; label: string }[];
  setProductTab: Dispatch<SetStateAction<string>>;
}

const ProductTabs = (props: ProductTabsProps) => {
  const { tabs, setProductTab } = props;
  const handleValueChange = (value: string) => {
    setProductTab(value);
  };

  return (
    <Tabs defaultValue="all" onValueChange={handleValueChange}>
      <TabsList className="bg-transparent">
        {tabs.map((tab, index) => (
          <TabsTrigger
            key={tab.label + "-" + index}
            className="p-4 data-[state=active]:bg-secondary"
            value={tab.value}
          >
            <Typography variant="label/md">{tab.label}</Typography>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export { ProductTabs };
