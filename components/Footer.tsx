import React from 'react';
import { ViewState, NavProps } from '../types';

export const Footer: React.FC<NavProps> = ({ setView }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm border-t border-slate-800">
      <div className="container mx-auto px-4">
          <p className="mb-4">© 2025 Global Health Policy Research Institute. Generated for educational purposes.</p>
          <div className="flex justify-center space-x-6 text-sky-500">
              <button onClick={() => setView(ViewState.FULL_REPORT)} className="hover:text-sky-300 underline">
                  Access Full PDF Report
              </button>
              <span>|</span>
              <a href="#" className="hover:text-sky-300 underline">Methodology Data</a>
              <span>|</span>
              <a href="#" className="hover:text-sky-300 underline">Citation Guide</a>
          </div>
          <p className="mt-6 text-xs text-slate-600">
             Visualize with Recharts. No SVG graphics were used in the generation of this report.
          </p>
      </div>
    </footer>
  );
};