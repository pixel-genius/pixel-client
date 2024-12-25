const CardSkeleton = () => {
  return (
    <div className="bg-card p-4 flex gap-2 flex-1">
      <div>
        <div className="rounded-lg w-[112px] h-[80px] bg-background"></div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="rounded-lg w-[166px] h-[18px] bg-background"></div>
        <div className="rounded-lg w-[47px] h-[18px] bg-background"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
