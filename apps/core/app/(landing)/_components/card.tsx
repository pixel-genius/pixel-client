import Removeicon from "@repo/icons/remove";
import Typography from "@repo/ui/components/typography";
import Image from "next/image";

interface CardProps {
  id: number;
  onRemove: (id: number) => void;
  title: string;
  price: string;
}

const Card: React.FC<CardProps> = (props) => {
  const { id, onRemove, title, price } = props;

  return (
    <div className="bg-card flex-shrink-0 rounded-lg overflow-hidden">
      <div className="flex">
        <div className="p-4 flex gap-2 flex-1">
          <div className="flex-shrink-0">
            <Image
              src={
                "https://images.unsplash.com/photo-1730292422804-5bbb2bd2d3f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="card"
              width={100}
              height={80}
              className="rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Typography variant="label/sm" component="p" weight="medium">
              {title}
            </Typography>
            <Typography variant="label/sm" component="p" weight="medium">
              {price}
            </Typography>
          </div>
        </div>
        <div
          className="w-9 flex items-center justify-center bg-error cursor-pointer"
          onClick={() => onRemove(id)}
        >
          <Removeicon size={24} />
        </div>
      </div>
    </div>
  );
};

export default Card;
