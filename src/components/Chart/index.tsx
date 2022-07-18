import { Container, ChartTitle } from './styles'
import {
    AreaChart,
    Area,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "January",
    total: 1200,
  },
  {
    name: "February",
    total: 2100,
  },
  {
    name: "March",
    total: 800,
  },
  {
    name: "April",
    total: 1600,
  },
  {
    name: "May",
    total: 900,
  },
  {
    name: "June",
    total: 1700,
  },
];

const Chart = ({ aspect, title }: any) => {
  return (
    <Container>
      <ChartTitle>{title}</ChartTitle>
      <ResponsiveContainer aspect={aspect}>
        <AreaChart data={data}>
            <defs>
                <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  )
}

export default Chart