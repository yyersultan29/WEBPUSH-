import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { month: "Jan 2025", kaspi: 150, gov: 5000, b2b: 80 },
  { month: "Jan 2025", kaspi: 150, gov: 5000, b2b: 80 },
  { month: "Feb 2025", kaspi: 400, gov: 8000, b2b: 90 },
  { month: "Mar 2025", kaspi: 700, gov: 9000, b2b: 120 },
  { month: "Apr 2025", kaspi: 1200, gov: 15000, b2b: 150 },
  { month: "May 2025", kaspi: 2500, gov: 18000, b2b: 200 },
  { month: "Jun 2025", kaspi: 4000, gov: 20000, b2b: 250 },
  { month: "Jul 2025", kaspi: 4200, gov: 21000, b2b: 240 },
  { month: "Aug 2025", kaspi: 9000, gov: 25000, b2b: 400 },
  { month: "Sep 2025", kaspi: 11000, gov: 30000, b2b: 500 },
  { month: "Oct 2025", kaspi: 9500, gov: 28000, b2b: 450 },
  { month: "Nov 2025", kaspi: 7000, gov: 27000, b2b: 600 },
  { month: "Dec 2025", kaspi: 15000, gov: 35000, b2b: 900 },
];

export default function CustomLineChart() {
  return (
    <div className="chart-container">
      {/* Header cards */}
      <div className="chart-header">
        <div className="stat-card">
          <div className="title">Kaspi.kz</div>
          <div className="value">10+ шт</div>
        </div>
        <div className="stat-card">
          <div className="title">Госсектор</div>
          <div className="value">1000+ шт</div>
        </div>
        <div className="stat-card">
          <div className="title">B2B Маркетплейсы</div>
          <div className="value">6 шт</div>
        </div>
      </div>

      {/* Chart */}
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid 
              stroke="#e0e0e0" 
              vertical={false}   
              horizontal={true} 
            />
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis scale="log" domain={[10, 100000]} axisLine={false} tickLine={false} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="kaspi" stroke="#3b82f6" strokeWidth={2} dot={false} name="Kaspi.kz" />
            <Line type="monotone" dataKey="gov" stroke="#111" strokeWidth={2} dot={false} name="Госсектор" />
            <Line type="monotone" dataKey="b2b" stroke="#fbbf24" strokeWidth={2} dot={false} name="B2B Маркетплейсы" />
    
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
