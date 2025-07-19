import { IconCopy } from "@tabler/icons-react";

import Image from "next/image";

import { Button } from "@repo/ui/components/atoms/button";

import QRCode from "../../_assets/QRcod.svg";
import TronLinkIcon from "../../_assets/TronLink.svg";
import TrustIcon from "../../_assets/Trus.svg";

type PaymentFormProps = {
  paymentOption: string;
};

const PaymentForm: React.FC<PaymentFormProps> = ({ paymentOption }) => {
  console.log("PaymentForm received paymentOption:", paymentOption); // Debug log

  const renderPaymentForm = () => {
    switch (paymentOption) {
      case "Paypal":
        return (
          <div id="payment-form" className="w-full">
            <Button variant="primary" size="md" className="w-full">
              Pay with PayPal
            </Button>
          </div>
        );
      case "USDT":
        return (
          <div id="CryptoCurrency" className="w-full">
            <div className="flex flex-col lg:flex-row gap-6 w-full rounded-xl p-4 lg:p-6 items-center border">
              {/* QR Code and Wallet Info */}
              <div className="w-full flex flex-col sm:flex-row items-center gap-4 lg:gap-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-2 rounded-lg">
                    <Image
                      src={QRCode}
                      alt="QR Code"
                      width={96}
                      height={96}
                      className="w-20 h-20 sm:w-24 sm:h-24"
                      priority
                    />
                  </div>
                </div>
                {/* Wallet Info */}
                <div className="flex flex-col gap-4 w-full sm:w-auto">
                  <div>
                    <span className="text-white font-semibold text-base">
                      Wallet address
                    </span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-white/80 text-sm truncate max-w-[200px] sm:max-w-[140px]">
                        0xhbbCDhd...jh200cD
                      </span>
                      <IconCopy
                        stroke={2}
                        className="cursor-pointer hover:text-white/80"
                        onClick={() =>
                          navigator.clipboard.writeText("0xhbbCDhd...jh200cD")
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <span className="text-white font-semibold text-base">
                      Network
                    </span>
                    <div className="text-white/80 text-sm mt-1">USDT</div>
                  </div>
                </div>
              </div>

              {/* Connect Wallet Buttons */}
              <div className="flex flex-col gap-3 w-full lg:w-auto lg:min-w-[200px]">
                <div className="flex items-center gap-2 w-full justify-start bg-secondary hover:bg-secondary/80 text-white px-4 py-2 rounded-lg cursor-pointer transition-colors">
                  <Image
                    src={TronLinkIcon}
                    alt="TronLink"
                    width={38}
                    height={41}
                    className="w-8 h-9 sm:w-10 sm:h-11"
                  />
                  <div className="flex flex-col">
                    Connect Wallet
                    <span className="text-xs text-white/60">Tronlink</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 w-full justify-start bg-secondary hover:bg-secondary/80 text-white px-4 py-2 rounded-lg cursor-pointer transition-colors">
                  <Image
                    src={TrustIcon}
                    alt="Trust Wallet"
                    width={36}
                    height={41}
                    className="w-8 h-9 sm:w-10 sm:h-11"
                  />
                  <div className="flex flex-col">
                    Connect Wallet
                    <span className="text-xs text-white/60">Trust Wallet</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div id="payment-form" className="w-full">
            <Button variant="primary" size="md" className="w-full">
              Select a Payment Method
            </Button>
          </div>
        );
    }
  };

  return <>{renderPaymentForm()}</>;
};

export default PaymentForm;
