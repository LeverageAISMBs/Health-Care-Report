import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ImmigrationData } from '../../types';

const data: ImmigrationData[] = [
    { year: '2015', migrationIndex: 100, policyStrength: 100 },
    { year: '2016', migrationIndex: 105, policyStrength: 101 },
    { year: '2017', migrationIndex: 108, policyStrength: 102 },
    { year: '2018', migrationIndex: 112, policyStrength: 103 },
    { year: '2019', migrationIndex: 115, policyStrength: 104 },
    { year: '2020', migrationIndex: 125, policyStrength: 106 },
    { year: '2021', migrationIndex: 135, policyStrength: 108 },
    { year: '2022', migrationIndex: 142, policyStrength: 109 },
    { year: '2023', migrationIndex: 148, policyStrength: 110 },
    { year: '2024', migrationIndex: 155, policyStrength: 111 },
];

export const ImmigrationChart: React.FC = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="year" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip 
                     contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                />
                <Legend />
                <Line 
                    type="monotone" 
                    dataKey="migrationIndex" 
                    name="Net Migration (HNWI)"
                    stroke="#0284c7" 
                    strokeWidth={3}
                    dot={{ fill: '#0284c7' }}
                />
                <Line 
                    type="monotone" 
                    dataKey="policyStrength" 
                    name="Policy Strength"
                    stroke="#94a3b8" 
                    strokeWidth={2} 
                    strokeDasharray="5 5" 
                />
            </LineChart>
        </ResponsiveContainer>
    );
};