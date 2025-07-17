"use client";
import { Button } from "@repo/ui/components/atoms/button";
import { Typography } from "@repo/ui/components/atoms/typography";
import { Chip } from "@repo/ui/components/atoms/chip";
import { Select } from "@repo/ui/components/molecules/select";
import { Input } from "@repo/ui/components/molecules/input";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@repo/ui/components/atoms/dialog";
import {
  Trash2Icon,
  WalletIcon,
  ShieldCheck,
  ShieldAlert,
  PlusIcon,
} from "lucide-react";
import { IconBrandTether } from "@tabler/icons-react";
import { useState } from "react";

function getCurrencyIcon(currency: string) {
  if (currency === "tether") return IconBrandTether;
  if (currency === "tron") return WalletIcon; // Replace with your Tron icon if available
  return WalletIcon;
}

const CURRENCY_OPTIONS = [
  { label: "USDT", value: "tether" },
  { label: "TRON", value: "tron" },
];
const NETWORK_OPTIONS = [
  { label: "ERC20", value: "erc20" },
  { label: "TRC20", value: "trc20" },
];

export const AddWallet = () => {
  const [wallets, setWallets] = useState([
    {
      currency: "usdt",
      network: "erc20",
      address: "0x1234abcd...5678",
      status: "pending",
    },
    {
      currency: "tron",
      network: "erc20",
      address: "1A1zP1...abc",
      status: "confirmed",
    },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ currency: "", network: "", address: "" });

  const handleAddWallet = () => {
    setWallets([
      ...wallets,
      {
        currency: form.currency,
        network: form.network,
        address: form.address,
        status: "pending",
      },
    ]);
    setForm({ currency: "", network: "", address: "" });
    setModalOpen(false);
  };

  const handleDelete = (idx: number) => {
    setWallets(wallets.filter((_, i) => i !== idx));
  };

  return (
    <div className="text-left">
      <Typography variant="label/md" weight="medium" className="py-4">
        Crypto Currency Payment Config
      </Typography>
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            className="w-full"
            iconLeft={<PlusIcon />}
          >
            Add Wallet
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add a new wallet</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-2">
            <Select
              id="currency"
              label="Type of currency"
              placeholder="Select currency"
              options={CURRENCY_OPTIONS}
              value={form.currency}
              onValueChange={(v) => setForm((f) => ({ ...f, currency: v }))}
            />
            <Select
              id="network"
              label="Network"
              placeholder="Select network"
              options={NETWORK_OPTIONS}
              value={form.network}
              onValueChange={(v) => setForm((f) => ({ ...f, network: v }))}
            />
            <Input
              label="Wallet address"
              placeholder="Enter wallet address"
              value={form.address}
              onChange={(e) =>
                setForm((f) => ({ ...f, address: e.target.value }))
              }
            />
          </div>
          <DialogFooter>
            <Button
              onClick={handleAddWallet}
              disabled={!form.currency || !form.network || !form.address}
            >
              Add
            </Button>
            <DialogClose asChild>
              <Button variant="secondary">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="flex flex-col gap-3 mt-6">
        {wallets.length === 0 ? (
          <div className="flex flex-col items-center justify-center bg-[#18181b] rounded-lg px-4 py-8 text-center">
            <WalletIcon className="w-12 h-12 text-muted-foreground mb-3" />
            <Typography variant="label/md" className="text-muted-foreground">
              No wallets added yet
            </Typography>
            <Typography
              variant="label/sm"
              className="text-muted-foreground mt-1"
            >
              Add your first wallet to start accepting crypto payments
            </Typography>
          </div>
        ) : (
          wallets.map((wallet, idx) => {
            const currencyOption = CURRENCY_OPTIONS.find(
              (c) => c.value === wallet.currency,
            );
            const CurrencyIcon = getCurrencyIcon(wallet.currency);
            return (
              <div
                key={idx}
                className="flex items-center justify-between bg-[#18181b] rounded-lg px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <CurrencyIcon className="w-6 h-6" />
                  <Typography variant="label/md" className="font-bold">
                    {currencyOption?.label} (
                    {
                      NETWORK_OPTIONS.find((n) => n.value === wallet.network)
                        ?.label
                    }
                    )
                  </Typography>
                  <Typography
                    variant="label/sm"
                    className="text-muted-foreground"
                  >
                    - {wallet.address}
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <Chip
                    variant={
                      wallet.status === "confirmed" ? "success" : "secondary"
                    }
                    size="sm"
                  >
                    {wallet.status === "confirmed" ? "Confirm" : "Pend Confirm"}
                  </Chip>
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={() => handleDelete(idx)}
                  >
                    <Trash2Icon className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
