import Removeicon from "@repo/icons/remove";
import Image from "next/image";

interface CardProps {
  id: number;
  onRemove: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ id, onRemove }) => {
  return (
    <div className="bg-gray-700 mb-2 rounded-lg overflow-hidden">
      <div className="flex">
        <div className="p-4 flex gap-2">
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
            <p className="text-lg font-medium">Traveler - Travel Agency</p>
            <p className="text-lg font-bold">$15</p>
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
