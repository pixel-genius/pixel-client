import Externallinkicon from "@repo/icons/External-link";
import { ProductCard } from "@repo/ui/components/prodoct-card";
import { ProfileCard } from "./profile-card";
import Circlexicon from "@repo/icons/Circle-x";
import Star1icon from "@repo/icons/Star-1";

export const AchievementsMinmal = () => {
  return (
    <div className=" bg-gray-900 rounded-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-bold">Achievements</h2>
        <Externallinkicon size={30} className="cursor-pointer" />
      </div>
      <div className="flex flex-col justify-center items-center gap-2 py-16">
        <Star1icon size={90} />
        <p className="text-sm font-normal text-gray-500 text-center">
          Achievements will appear here once you accomplish you first milestone
        </p>
      </div>
    </div>
  );
};

export const AchievementsModal = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg h-auto">
      <div className="flex justify-between pb-4">
        <div>
          <h2 className="text-xl font-bold">Achievements</h2>
        </div>
        <div>
          <Circlexicon size={30} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export interface AchievementsModalCardProps {
  className?: string;
}

export const AchievementsModalCard = (props: AchievementsModalCardProps) => {
  return (
    <ProfileCard
      id="achievements"
      className={props.className}
      modal={<AchievementsModal />}
    >
      <AchievementsMinmal />
    </ProfileCard>
  );
};
