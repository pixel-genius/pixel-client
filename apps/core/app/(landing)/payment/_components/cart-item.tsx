import React from "react";
import Image from "next/image";
import { Button, Typography } from "@repo/ui/components";
import { IconTrash } from "@tabler/icons-react";
import Hearticon from "@repo/icons/heart";

// Props Types
interface CardTitleProps {
  title: string;
}

interface CardActionProps {
  icon: React.ReactNode;
  label: string;
}

interface CardPriceProps {
  price: number;
  currency: string;
}

interface CartitemProps {
  currency: string;
  onRemove: () => void;
  title: string;
  price: number;
}

// Card Component
const Cartitem: React.FC<CartitemProps> = ({ currency, onRemove, title, price }) => {
  return (
    <div className="bg-card p-4 rounded-lg flex gap-3 items-center">
      <CardImage />
      <CardDetails onRemove={onRemove} title={title} />
      <CardPrice price={price} currency={currency} />
    </div>
  );
};

// CardImage Component
const CardImage = () => {
  return (
    <div>
      <Image
        src="https://img1.wsimg.com/cdnassets/transform/777d2c5b-ef8d-45b1-96be-3e898a8dc94a/Mrq"
        alt="pixel card"
        width={180}
        height={100}
        className="rounded-xl"
      />
    </div>
  );
};

// CardDetails Component
const CardDetails = ({ onRemove, title }: { onRemove: () => void; title: string }) => {
  return (
    <div className="flex flex-col gap-2">
      <CardTitle title={title} />
      <CardActions onRemove={onRemove} />
    </div>
  );
};

// CardTitle Component
const CardTitle: React.FC<CardTitleProps> = ({ title }) => {
  return (
    <div>
      <Typography variant={"heading/sm"} weight={"medium"}>
        {title}
      </Typography>
    </div>
  );
};

// CardActions Component
const CardActions = ({ onRemove }: { onRemove: () => void }) => {
  return (
    <div className="flex items-center gap-2">
      <CardAction icon={<IconTrash size={24} />} label="Remove" onClick={onRemove} />
      <div> | </div>
      <CardAction icon={<Hearticon size={24} />} label="Save For later" />
    </div>
  );
};

// CardAction Component
const CardAction: React.FC<CardActionProps & { onClick?: () => void }> = ({ icon, label, onClick }) => {
  return (
    <div className="flex items-center gap-2">
      <Button iconLeft={icon} className="text-muted-foreground" variant="tertiary" size="sm" onClick={onClick}>
        {label}
      </Button>
    </div>
  );
};

// CardPrice Component
const CardPrice: React.FC<CardPriceProps> = ({ price, currency }) => {
  return (
    <div className="ml-auto">
      <Typography variant={"heading/sm"} weight={"medium"}>
        {currency}{price}
      </Typography>
    </div>
  );
};

export default Cartitem;
