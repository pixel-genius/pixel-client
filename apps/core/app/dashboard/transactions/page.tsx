"use client";

import {
  IconChevronRight,
  IconCornerLeftDown,
  IconCornerLeftUp,
  IconSearch,
} from "@tabler/icons-react";

import { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui/components/atoms/table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/atoms/card";
import { Typography } from "@repo/ui/components/atoms/typography";
import { Input } from "@repo/ui/components/molecules/input";
import { Button } from "@repo/ui/components/atoms/button";
import { Chip } from "@repo/ui/components/atoms/chip";

const summary = [
  {
    title: "Net Balance",
    value: "$250.00",
    subtitle: "≈ 250.00 USDT",
    actions: [
      { label: "Deposit", color: "info" },
      { label: "Withdraw", color: "secondary" },
    ],
  },
  {
    title: "Total Income",
    value: "$2,500",
    subtitle: "≈ 250.00 USDT",
    color: "success",
  },
  {
    title: "Total Expenses",
    value: "$123.00",
    subtitle: "≈ 250.00 USDT",
    color: "danger",
  },
];

const transactions = [
  {
    id: "23456778",
    date: "25 Jun 2025",
    category: "Product Sale",
    amount: "+$24.00",
    note: "Commission 10%",
    payment: "Paypal",
    status: "Padding",
    type: "Income",
  },
  {
    id: "23456778",
    date: "25 Jun 2025",
    category: "Deposit",
    amount: "+$150.00",
    payment: "Paypal",
    status: "Paid",
    type: "Income",
  },
  {
    id: "49284707",
    date: "25 Jun 2025",
    category: "Withdrawal",
    amount: "-$150.00",
    payment: "Paypal",
    status: "Paid",
    type: "Expense",
  },
];

const TransactionsPage = () => {
  const [search, setSearch] = useState("");
  const filteredTransactions = transactions.filter((t) =>
    t.category.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <Typography variant="heading/lg" weight="bold" className="mb-6">
        Transactions
      </Typography>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Card className="flex-[2] bg-zinc-900 border-none">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <Typography variant="paragraph/md" weight="bold">
                Net Balance
              </Typography>
              <Typography variant="heading/xl" className="text-cyan-400">
                $250.00
              </Typography>
              <Typography variant="paragraph/sm" className="text-zinc-400">
                ≈ 250.00 USDT
              </Typography>
            </div>
            <div className="flex flex-col gap-2">
              <Button
                variant="secondary"
                iconRight={<IconCornerLeftUp />}
                size="sm"
              >
                Deposit
              </Button>
              <Button
                variant="secondary"
                iconRight={<IconCornerLeftDown />}
                size="sm"
              >
                Withdraw
              </Button>
            </div>
          </CardHeader>
        </Card>
        <Card className="flex-1 bg-zinc-900 border-none">
          <CardHeader>
            <Typography variant="paragraph/md" weight="bold">
              Total Income
            </Typography>
            <Typography variant="heading/xl" className="text-green-500">
              $2,500
            </Typography>
            <Typography variant="paragraph/sm" className="text-zinc-400">
              ≈ 250.00 USDT
            </Typography>
          </CardHeader>
        </Card>
        <Card className="flex-1 bg-zinc-900 border-none">
          <CardHeader>
            <Typography variant="paragraph/md" weight="bold">
              Total Expenses
            </Typography>
            <Typography variant="heading/xl" className="text-rose-500">
              $123.00
            </Typography>
            <Typography variant="paragraph/sm" className="text-zinc-400">
              ≈ 250.00 USDT
            </Typography>
          </CardHeader>
        </Card>
      </div>
      <Typography variant="heading/md" weight="bold" className="mb-4">
        All Transactions
      </Typography>
      <div className="flex justify-end mb-4">
        <Input
          placeholder="Search Category"
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          iconRight={<IconSearch size={20} color="#fff" />}
        />
      </div>
      <Card className="bg-zinc-900 border-none">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Category / Source</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Payment Met...</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTransactions.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="text-center py-8 text-zinc-400"
                  >
                    No transactions found
                  </TableCell>
                </TableRow>
              ) : (
                filteredTransactions.map((t, i) => (
                  <TableRow key={i}>
                    <TableCell>{t.id}</TableCell>
                    <TableCell>{t.date}</TableCell>
                    <TableCell>{t.category}</TableCell>
                    <TableCell>
                      <span
                        className={
                          t.amount.startsWith("-")
                            ? "text-rose-500"
                            : "text-green-400"
                        }
                      >
                        {t.amount}
                      </span>
                      {t.note && (
                        <div className="text-xs text-zinc-400">{t.note}</div>
                      )}
                    </TableCell>
                    <TableCell>{t.payment}</TableCell>
                    <TableCell>{t.status}</TableCell>
                    <TableCell>
                      <Chip
                        variant={t.type === "Income" ? "success" : "danger"}
                      >
                        {t.type}
                      </Chip>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransactionsPage;
