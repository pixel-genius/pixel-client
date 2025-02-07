import { Tab } from "./tabs";

export type TabContentProps = {
  className?: string;
  tabs: Tab[];
  activeIndex: number;
};

export const TabContent = (props: TabContentProps) => {
  const {tabs , className , activeIndex} = props;

  const tab = tabs[activeIndex] as Tab


  console.log("tab" , tab)

  return (
    <div className={className}>
          {tab.content}
    </div>
  );
};
