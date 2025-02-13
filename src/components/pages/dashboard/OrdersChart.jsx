"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from "recharts";

const data = [
	{ day: "Day 1", value: 45000 },
	{ day: "Day 2", value: 52000 },
	{ day: "Day 3", value: 61000 },
	{ day: "Day 4", value: 47000 },
	{ day: "Day 5", value: 53000 },
	{ day: "Day 6", value: 68000 },
	{ day: "Day 7", value: 72000 },
	{ day: "Day 8", value: 50000 },
	{ day: "Day 9", value: 62000 },
  ];

export default function OrdersChart() {

  return (
    <div className={"ml-[-20px]"} >

<ResponsiveContainer width="100%" height={300}  >
  <LineChart data={data}>
    {/* Define a soft fading gradient */}
    <defs  >
      <linearGradient id="fadeGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(30, 58, 138, 0.2)" />
        <stop offset="50%" stopColor="rgba(30, 58, 138, 0.1)" />
        <stop offset="100%" stopColor="rgba(30, 58, 138, 0)" />
      </linearGradient>
    </defs>

    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
    {/* <XAxis dataKey="day" tick={{ fill: "#A0AEC0", fontSize: 12  }} tickMargin={15} /> */}
    <YAxis ticks={[0, 20000, 40000, 60000, 80000, 100000]} tickFormatter={(value) => `$${value / 1000}K`} tick={{ fill: "#A0AEC0", fontSize: 12 }} tickMargin={45} />
    <Tooltip   formatter={(value) => [`$${value.toLocaleString()}`, "المبيعات"]} />

    {/* Apply the soft fade effect to the area */}
    <Area
      type="monotone"
      dataKey="value"
      stroke="#1E3A8A"
      strokeWidth={2}
      fill="url(#fadeGradient)" // Use the new gradient here
    />

    <Line type="monotone" dataKey="value" stroke="#1E3A8A" strokeWidth={2} />
  </LineChart>
</ResponsiveContainer>

    </div>
  );
}
