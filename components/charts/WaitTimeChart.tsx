import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { WaitTimeData } from '../../types';

const data: WaitTimeData[] = [
    { country: 'Switzerland', days: 8 },
    { country: 'Germany', days: 11 },
    { country: 'Netherlands', days: 14 },
    { country: 'France', days: 18 },
    { country: 'Australia', days: 22 },
    { country: 'New Zealand', days: 26 },
    { country: 'UK', days: 38 },
    { country: 'Canada', days: 42 },
    { country: 'Sweden', days: 45 },
];

export const WaitTimeChart: React.FC = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                layout="vertical"
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                <XAxis type="number" hide />
                <YAxis dataKey="country" type="category" width={100} tick={{fontSize: 12}} />
                <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                />
                <Bar dataKey="days" radius={[0, 4, 4, 0]} barSize={20}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.days < 15 ? '#0ea5e9' : entry.days < 30 ? '#0284c7' : '#f59e0b'} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};