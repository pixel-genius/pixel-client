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
                "https://s3-alpha-sig.figma.com/img/ce79/f737/ea54458a8146c49352213b25ce57f7b6?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qqR8nckdLaYWUmx~ux-Tr2lG85ngiw5DrwWsMWH5AboiB8bmgVFk3ABciKTo4iNrJyyiewFKHqDn2~ggpyk-zxXIWVA9ArjUxExTRKKMkWKqijujvceqMJT7ZStrUC1l4GgigHdTpKaKot0tj0COe0Wzgosy7Hrn~5O8BreZGmvNGtwHyxbQmtF~ykzzv5AWntDMA~k326WShEbbtjrtEsSOX4o74Sx-eW8yBXq334BP7Kupiy9O6uprHsBimZ1iQ554twGyJoTz~~Fa64Brvqp1uqaFv25MDlDG2K7IbrtCmCvlGQkGWdeIg~ZrlOm0KXW1En~AT2vQYOZApk0mjA__"
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
          className="w-9 flex items-center justify-center bg-error cursor-pointer"
          onClick={() => onRemove(id)}
        >
          <Removeicon className="text-error-foreground" size={24} />
        </div>
      </div>
    </div>
  );
};

export default Card;
