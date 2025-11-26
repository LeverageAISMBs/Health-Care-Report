import React from 'react';
import { RankingData } from '../types';

const rankings: RankingData[] = [
    { r: 1, c: "Singapore", s: 94.2, l: 83.6, w: "High", e: "Very High", m: "Hybrid/Savings" },
    { r: 2, c: "Japan", s: 93.5, l: 84.4, w: "High", e: "High", m: "Social Insurance" },
    { r: 3, c: "Switzerland", s: 92.8, l: 83.8, w: "Very High", e: "Med", m: "Mandatory Private" },
    { r: 4, c: "South Korea", s: 91.5, l: 83.0, w: "High", e: "High", m: "Single Payer" },
    { r: 5, c: "Norway", s: 90.9, l: 82.9, w: "Med", e: "High", m: "Single Payer" },
    { r: 6, c: "Taiwan", s: 90.1, l: 80.9, w: "High", e: "High", m: "Single Payer" },
    { r: 7, c: "Israel", s: 89.5, l: 82.9, w: "Med", e: "High", m: "Social Insurance" },
    { r: 8, c: "Netherlands", s: 89.2, l: 82.0, w: "High", e: "Med", m: "Managed Competition" },
    { r: 9, c: "Luxembourg", s: 88.8, l: 82.2, w: "High", e: "Med", m: "Social Insurance" },
    { r: 10, c: "Germany", s: 88.4, l: 81.3, w: "High", e: "Med", m: "Social Insurance" },
    { r: 11, c: "Australia", s: 87.9, l: 82.8, w: "Med", e: "Med", m: "Hybrid/Medicare" },
    { r: 12, c: "Iceland", s: 87.5, l: 83.0, w: "Low", e: "High", m: "Single Payer" },
    { r: 13, c: "Sweden", s: 87.2, l: 82.8, w: "Low", e: "High", m: "Single Payer" },
    { r: 14, c: "France", s: 86.9, l: 82.7, w: "Med", e: "Med", m: "Social Insurance" },
    { r: 15, c: "Denmark", s: 86.5, l: 80.9, w: "Med", e: "High", m: "Single Payer" },
    { r: 16, c: "Finland", s: 86.1, l: 81.9, w: "Low", e: "High", m: "Single Payer" },
    { r: 17, c: "New Zealand", s: 85.8, l: 81.7, w: "Med", e: "Med", m: "Single Payer" },
    { r: 18, c: "Ireland", s: 85.3, l: 82.3, w: "Low", e: "Med", m: "Single Payer" },
    { r: 19, c: "Belgium", s: 84.9, l: 81.6, w: "Med", e: "Med", m: "Social Insurance" },
    { r: 20, c: "Austria", s: 84.5, l: 81.5, w: "High", e: "Med", m: "Social Insurance" },
    { r: 21, c: "United Kingdom", s: 83.2, l: 81.2, w: "Very Low", e: "High", m: "Beveridge (NHS)" },
    { r: 22, c: "Canada", s: 82.8, l: 82.4, w: "Very Low", e: "High", m: "Single Payer" },
    { r: 23, c: "Spain", s: 82.5, l: 83.6, w: "Low", e: "High", m: "National Health" },
    { r: 24, c: "Italy", s: 82.1, l: 83.5, w: "Low", e: "High", m: "National Health" },
    { r: 25, c: "Malta", s: 81.4, l: 82.5, w: "Med", e: "Med", m: "National Health" },
    { r: 30, c: "Portugal", s: 78.5, l: 81.9, w: "Low", e: "High", m: "National Health" },
    { r: 35, c: "Chile", s: 74.2, l: 80.1, w: "Med", e: "Med", m: "Hybrid" },
    { r: 40, c: "Costa Rica", s: 71.5, l: 80.2, w: "Low", e: "High", m: "Social Security" },
    { r: 45, c: "Thailand", s: 68.8, l: 77.1, w: "Low", e: "Very High", m: "Universal Coverage" },
    { r: 50, c: "Brazil", s: 65.2, l: 75.8, w: "Very Low", e: "Med", m: "Unified Health (SUS)" }
];

const getRankBadgeClass = (rank: number) => {
    if (rank === 1) return 'bg-amber-500 text-white shadow-lg shadow-amber-500/50';
    if (rank === 2) return 'bg-slate-400 text-white';
    if (rank === 3) return 'bg-orange-700 text-white';
    return 'bg-slate-200 text-slate-600';
};

export const RankingTable: React.FC = () => {
  return (
    <section className="bg-white py-16 border-t border-gray-200">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-800 mb-2 text-center">The UHC Performance Index (UHCPI)</h2>
            <h3 className="text-xl text-sky-600 font-medium mb-8 text-center">Top 50 Country Ranking</h3>
            
            <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
                <table className="w-full border-collapse font-sm">
                    <thead>
                        <tr className="bg-sky-600 text-white">
                            <th className="p-4 text-center w-20">Rank</th>
                            <th className="p-4 text-left">Country</th>
                            <th className="p-4 text-left">UHCPI Score</th>
                            <th className="p-4 text-left hidden md:table-cell">Life Exp.</th>
                            <th className="p-4 text-left hidden md:table-cell">Wait Time Score</th>
                            <th className="p-4 text-left hidden sm:table-cell">Cost Efficiency</th>
                            <th className="p-4 text-left">Model Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rankings.map((row) => (
                            <tr key={row.c} className="hover:bg-sky-50 border-b border-gray-100 last:border-0 odd:bg-slate-50">
                                <td className="p-3 text-center">
                                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${getRankBadgeClass(row.r)}`}>
                                        {row.r}
                                    </span>
                                </td>
                                <td className="p-3 font-medium text-sky-900">{row.c}</td>
                                <td className="p-3 font-bold">{row.s}</td>
                                <td className="p-3 hidden md:table-cell text-gray-600">{row.l} yrs</td>
                                <td className="p-3 hidden md:table-cell text-sm">{row.w}</td>
                                <td className="p-3 hidden sm:table-cell text-sm">{row.e}</td>
                                <td className="p-3 text-xs text-gray-500 italic">{row.m}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <div className="mt-8 bg-sky-50 p-6 rounded-lg">
                <h4 className="font-bold text-sky-800 mb-2">Gaps in Data & Further Research</h4>
                <p className="text-sm text-gray-700">
                    <strong>1. Mental Health Parity:</strong> Most global datasets heavily weigh physical health outcomes. Future research must better integrate mental health access wait times. <br />
                    <strong>2. Rural vs. Urban:</strong> Aggregated national data hides disparities. A "France" score obscures the difference between Paris and rural Normandy. <br />
                    <strong>3. Innovation Metrics:</strong> Measuring medical innovation is difficult; current metrics rely on patent filings, which favors large pharmaceutical hubs over process innovators.
                </p>
            </div>
        </div>
    </section>
  );
};