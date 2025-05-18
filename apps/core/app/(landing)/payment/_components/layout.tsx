import { ReactNode } from "react";

type PixelPaymentLayoutProps = {
  children: ReactNode;
};

const PixelPaymentLayout = ({ children }: PixelPaymentLayoutProps) => {
  return <div className="">{children}</div>;
};

export default PixelPaymentLayout;
