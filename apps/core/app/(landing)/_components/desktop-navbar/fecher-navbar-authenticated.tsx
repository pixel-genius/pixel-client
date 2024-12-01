import Heart1icon from "@repo/icons/heart1";
import Shoppingbagicon from "@repo/icons/shopping-bag";

const FecherNavbarAuthenticated = () => {
  return (
    <div className="flex  flex-shrink-0 items-center gap-3">
      <Heart1icon size={24} color="white" />
      <Shoppingbagicon size={24} color="white" />
      <img
        src="https://avatar.iran.liara.run/public/26"
        alt="avatar"
        className="w-11 h-11 rounded-full"
      />
    </div>
  );
};

export default FecherNavbarAuthenticated;
