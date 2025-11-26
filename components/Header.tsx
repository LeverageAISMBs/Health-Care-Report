import React from 'react';
import { ViewState, NavProps } from '../types';
import { Activity, FileText } from 'lucide-react';

export const Header: React.FC<NavProps> = ({ currentView, setView }) => {
  return (
    <header className="bg-gradient-to-r from-sky-900 to-sky-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="py-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 tracking-tight">Global Universal Health Care</h1>
            <h2 className="text-lg md:text-2xl font-light text-sky-100">Performance Index & Comparative Research</h2>
            {currentView === ViewState.SUMMARY && (
              <p className="mt-4 max-w-3xl mx-auto text-sky-50 opacity-90 leading-relaxed text-sm md:text-base hidden md:block">
                  An extensive analysis of 50 nations based on health outcomes, financial efficiency, 
                  provider satisfaction, innovation, and migration patterns.
              </p>
            )}
        </div>
        
        <div className="flex justify-center space-x-1">
            <button 
                onClick={() => setView(ViewState.SUMMARY)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-t-lg transition-colors font-medium ${
                    currentView === ViewState.SUMMARY 
                    ? 'bg-slate-50 text-sky-900' 
                    : 'bg-sky-800 text-sky-200 hover:bg-sky-600'
                }`}
            >
                <Activity size={18} />
                <span>Summary Dashboard</span>
            </button>
            <button 
                onClick={() => setView(ViewState.FULL_REPORT)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-t-lg transition-colors font-medium ${
                    currentView === ViewState.FULL_REPORT 
                    ? 'bg-slate-50 text-sky-900' 
                    : 'bg-sky-800 text-sky-200 hover:bg-sky-600'
                }`}
            >
                <FileText size={18} />
                <span>Full Report</span>
            </button>
        </div>
      </div>
    </header>
  );
};