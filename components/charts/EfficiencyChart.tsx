import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label, Cell } from 'recharts';
import { EfficiencyPoint } from '../../types';

const data: EfficiencyPoint[] = [
    { country: 'Singapore', expenditure: 7000, outcome: 92, population: 10 },
    { country: 'Switzerland', expenditure: 11000, outcome: 94, population: 15 },
    { country: 'Japan', expenditure: 4500, outcome: 88, population: 25 },
    { country: 'South Korea', expenditure: 4200, outcome: 86, population: 18 },
    { country: 'UK', expenditure: 5000, outcome: 84, population: 20 },
    { country: 'Canada', expenditure: 5500, outcome: 85, population: 12 },
    { country: 'Germany', expenditure: 6000, outcome: 87, population: 20 },
    { country: 'Norway', expenditure: 5200, outcome: 89, population: 10 },
    { country: 'France', expenditure: 4800, outcome: 86, population: 18 },
    { country: 'Brazil', expenditure: 3000, outcome: 78, population: 30 },
    { country: 'Thailand', expenditure: 2500, outcome: 76, population: 28 },
    { country: 'USA (Ref)', expenditure: 12000, outcome: 82, population: 50 },
];

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="bg-white p-3 border border-slate-200 shadow-lg rounded text-sm">
                <p className="font-bold text-sky-900">{data.country}</p>
                <p>Outcome Score: <span className="font-semibold">{data.outcome}</span></p>
                <p>Expenditure: <span className="font-semibold">${data.expenditure}</span></p>
            </div>
        );
    }
    return null;
};

export const EfficiencyChart: React.FC = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis 
                    type="number" 
                    dataKey="expenditure" 
                    name="Expenditure" 
                    unit="$" 
                    domain={[0, 13000]}
                >
                    <Label value="Health Expenditure Per Capita (USD)" offset={0} position="insideBottom" style={{ fill: '#64748b' }} />
                </XAxis>
                <YAxis 
                    type="number" 
                    dataKey="outcome" 
                    name="Outcome" 
                    domain={[60, 100]}
                >
                    <Label value="Health Outcome Score" angle={-90} position="insideLeft" style={{ fill: '#64748b' }} />
                </YAxis>
                <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="Countries" data={data} fill="#0ea5e9">
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.outcome > 90 ? '#0ea5e9' : entry.outcome > 80 ? '#0284c7' : '#f59e0b'} />
                    ))}
                </Scatter>
            </ScatterChart>
        </ResponsiveContainer>
    );
};