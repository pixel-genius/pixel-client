"use client";

import { Typography } from "@repo/ui/components/atoms/typography";
import Infocircleicon from "@repo/icons/info-circle";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@repo/ui/components/atoms/card";
import { ChartContainer } from "@repo/ui/components/atoms/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import React from "react";
import { Select } from "@repo/ui/components/molecules/select";

const earningsDataYear = [
  { name: "Jan", earnings: 10 },
  { name: "Feb", earnings: 20 },
  { name: "Mar", earnings: 20 },
  { name: "Apr", earnings: 30 },
  { name: "Mai", earnings: 20 },
  { name: "Jun", earnings: 12 },
  { name: "Jul", earnings: 18 },
  { name: "Aug", earnings: 22 },
  { name: "Sep", earnings: 25 },
  { name: "Oct", earnings: 28 },
  { name: "Nov", earnings: 15 },
  { name: "Dec", earnings: 17 },
];

const earningsDataWeek = [
  { name: "Mon", earnings: 10 },
  { name: "Tue", earnings: 20 },
  { name: "Wed", earnings: 15 },
  { name: "Thu", earnings: 25 },
  { name: "Fri", earnings: 18 },
  { name: "Sat", earnings: 12 },
  { name: "Sun", earnings: 8 },
];

const DashboardPage = () => {
  const [period, setPeriod] = React.useState("year");
  const chartData = period === "year" ? earningsDataYear : earningsDataWeek;
  return (
    <div className="p-8 bg-black min-h-screen">
      <Typography
        variant="heading/md"
        weight="bold"
        className="mb-6 text-white"
      >
        Dashboard
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Card 1 */}
        <Card className="bg-[#18181B] text-white">
          <CardHeader className="flex flex-row justify-between items-start">
            <div>
              <CardTitle className="text-lg">Outstanding owed</CardTitle>
              <CardDescription>View sales</CardDescription>
            </div>
            <Infocircleicon className="w-5 h-5 text-gray-400" />
          </CardHeader>
          <CardContent>
            <span className="text-4xl font-bold">$123.00</span>
          </CardContent>
        </Card>
        {/* Card 2 */}
        <Card className="bg-[#18181B] text-white">
          <CardHeader className="flex flex-row justify-between items-start">
            <div>
              <CardTitle className="text-lg">Total payout</CardTitle>
              <CardDescription>View sales</CardDescription>
            </div>
            <Infocircleicon className="w-5 h-5 text-gray-400" />
          </CardHeader>
          <CardContent>
            <span className="text-4xl font-bold">$125.00</span>
          </CardContent>
        </Card>
        {/* Card 3 */}
        <Card className="bg-[#18181B] text-white">
          <CardHeader className="flex flex-row justify-between items-start">
            <div>
              <CardTitle className="text-lg">Product Count</CardTitle>
              <CardDescription>View Products</CardDescription>
            </div>
            <Infocircleicon className="w-5 h-5 text-gray-400" />
          </CardHeader>
          <CardContent>
            <span className="text-4xl font-bold">314</span>
          </CardContent>
        </Card>
      </div>
      {/* Earnings History Chart */}
      <Card className="bg-[#18181B] text-white">
        <CardHeader className="flex flex-row justify-between items-center">
          <div>
            <CardTitle>Earnings history</CardTitle>
          </div>
          <div>
            <Select
              id="period"
              value={period}
              onValueChange={setPeriod}
              placeholder="Select period"
              options={[
                { label: "This Year", value: "year" },
                { label: "This Week", value: "week" },
              ]}
              className="w-32"
              size="md"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className=" w-full">
            <ChartContainer
              className="h-[400px] w-full"
              config={{ earnings: { color: "#A1A1AA", label: "Earnings" } }}
            >
              <BarChart data={chartData}>
                <XAxis dataKey="name" stroke="#A1A1AA" />
                <YAxis
                  stroke="#A1A1AA"
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip formatter={(value) => `$${value}`} />
                <Bar dataKey="earnings" fill="#A1A1AA" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
