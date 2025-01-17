import Removeicon from "@repo/icons/remove";
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
    <div className="bg-card  flex-shrink-0 rounded-lg overflow-hidden">
      <div className="flex">
        <div className="p-4 flex gap-2 flex-1">
          <div>
            <Image
              src={
                "https://images.unsplash.com/photo-1730292422804-5bbb2bd2d3f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="card"
              width={112}
              height={80}
              className="rounded-2xl"
            />
          </div>
          <div>
            <p className="text-lg font-medium">{title}</p>
            <p className="text-lg font-bold">{price}</p>
          </div>
        </div>
        <div
          className="w-9 flex items-center justify-center bg-error-900 cursor-pointer"
          onClick={() => onRemove(id)}
        >
          <Removeicon size={24} />
        </div>
      </div>
    </div>
  );
};

export default Card;
