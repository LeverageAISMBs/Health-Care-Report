import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { SatisfactionData } from '../../types';

const data: SatisfactionData[] = [
    { metric: 'Patient Quality', switzerland: 95, uk: 80, singapore: 90 },
    { metric: 'Access Speed', switzerland: 90, uk: 50, singapore: 85 },
    { metric: 'Out of Pocket', switzerland: 60, uk: 95, singapore: 80 },
    { metric: 'Doctor Pay', switzerland: 95, uk: 65, singapore: 85 },
    { metric: 'Admin Ease', switzerland: 70, uk: 50, singapore: 80 },
];

export const SatisfactionChart: React.FC = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="metric" tick={{ fill: '#475569', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="Switzerland" dataKey="switzerland" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.3} />
                <Radar name="UK" dataKey="uk" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.3} />
                <Radar name="Singapore" dataKey="singapore" stroke="#0f172a" fill="#0f172a" fillOpacity={0.3} />
                <Legend iconType="circle" />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}/>
            </RadarChart>
        </ResponsiveContainer>
    );
};