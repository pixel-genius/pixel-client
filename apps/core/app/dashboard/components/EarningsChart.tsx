"use client";

import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

import { ChartContainer } from "@repo/ui/components/atoms/chart";

interface EarningsData {
  name: string;
  earnings: number;
}

interface EarningsChartProps {
  data: EarningsData[];
}

const EarningsChart = ({ data }: EarningsChartProps) => {
  return (
    <ChartContainer
      className="h-[400px] w-full"
      config={{ earnings: { color: "#A1A1AA", label: "Earnings" } }}
    >
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#A1A1AA" />
        <YAxis stroke="#A1A1AA" tickFormatter={(value) => `$${value}`} />
        <Tooltip formatter={(value) => `$${value}`} />
        <Bar dataKey="earnings" fill="#A1A1AA" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ChartContainer>
  );
};

export default EarningsChart;
