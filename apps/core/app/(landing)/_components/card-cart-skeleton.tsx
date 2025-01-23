const CardSkeleton = () => {
  return (
    <div className="bg-background p-4 flex gap-2 flex-1 rounded-lg">
      <div>
        <div className="rounded-lg w-[112px] h-[80px] bg-card"></div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="rounded-lg w-[166px] h-[18px] bg-card"></div>
        <div className="rounded-lg w-[47px] h-[18px] bg-card"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
