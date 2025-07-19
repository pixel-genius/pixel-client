import { IconTrash } from "@tabler/icons-react";

import React from "react";

import Image from "next/image";

import { Typography } from "@repo/ui/components/atoms/typography";
import { Button } from "@repo/ui/components/atoms/button";
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
const Cartitem: React.FC<CartitemProps> = ({
  currency,
  onRemove,
  title,
  price,
}) => {
  return (
    <div className="bg-card p-4 rounded-lg flex flex-wrap md:flex-nowrap gap-3 items-center">
      <CardImage />
      <CardDetails onRemove={onRemove} title={title} />
      <CardPrice price={price} currency={currency} />
    </div>
  );
};

// CardImage Component
const CardImage = () => {
  return (
    <div className="flex-shrink-0">
      <Image
        src="https://img1.wsimg.com/cdnassets/transform/777d2c5b-ef8d-45b1-96be-3e898a8dc94a/Mrq"
        alt="pixel card"
        width={180}
        height={100}
        className="rounded-xl w-20 h-20 object-cover"
      />
    </div>
  );
};

// CardDetails Component
const CardDetails = ({
  onRemove,
  title,
}: {
  onRemove: () => void;
  title: string;
}) => {
  return (
    <div className="flex flex-col gap-2 flex-grow min-w-[200px]">
      <CardTitle title={title} />
      <CardActions onRemove={onRemove} />
    </div>
  );
};

// CardTitle Component
const CardTitle: React.FC<CardTitleProps> = ({ title }) => {
  return (
    <div>
      <Typography variant={"label/lg"} weight={"medium"}>
        {title}
      </Typography>
    </div>
  );
};

// CardActions Component
const CardActions = ({ onRemove }: { onRemove: () => void }) => {
  return (
    <div className="flex items-center gap-2">
      <CardAction
        icon={<IconTrash size={18} />}
        label="Remove"
        onClick={onRemove}
      />
      <div> | </div>
      <CardAction icon={<Hearticon size={18} />} label="Save For later" />
    </div>
  );
};

// CardAction Component
const CardAction: React.FC<CardActionProps & { onClick?: () => void }> = ({
  icon,
  label,
  onClick,
}) => {
  return (
    <div
      className="flex items-center text-muted-foreground gap-2 cursor-pointer py-2"
      onClick={onClick}
    >
      <div>{icon}</div>
      <div>
        <Typography variant="label/sm" weight="medium">
          {label}
        </Typography>
      </div>
    </div>
  );
};

// CardPrice Component
const CardPrice: React.FC<CardPriceProps> = ({ price, currency }) => {
  return (
    <div className="flex-shrink-0">
      <Typography variant={"heading/sm"} weight={"medium"}>
        {currency}
        {price}
      </Typography>
    </div>
  );
};

export default Cartitem;
