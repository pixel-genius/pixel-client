export const CartItemSkeleton = () => {
  return (
    <div className="bg-card p-4 flex gap-2 flex-1 rounded-lg">
      <div>
        <div className="rounded-2xl w-20 h-20 bg-background"></div>
      </div>
      <div className="flex flex-col justify-evenly gap-1">
        <div className="rounded-lg w-[166px] h-[20px] bg-background"></div>
        <div className="rounded-lg w-[47px] h-[20px] bg-background"></div>
      </div>
    </div>
  );
};
