import React, { useState } from 'react';
import { reportSections } from '../data/reportSections';
import { Modal } from './ui/Modal';
import { ReportSection } from '../types';
import { ArrowRight, FileText } from 'lucide-react';
import { PlayButton } from './ui/PlayButton';

export const FullReportView: React.FC = () => {
    const [selectedSection, setSelectedSection] = useState<ReportSection | null>(null);

    // Concatenate all speech content for full report
    const fullReportText = reportSections.map(s => s.speechContent).join(' ');

    return (
        <div className="bg-slate-50 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <div className="inline-flex items-center justify-center p-3 bg-sky-100 rounded-full mb-4">
                        <FileText className="text-sky-700" size={32} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Global Health Systems in Transition</h2>
                    <h3 className="text-xl text-sky-600 font-medium mb-6">2025 Comparative Analysis Report</h3>
                    <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
                        A comprehensive evaluation of 50 distinct national health systems. 
                        Click on a section below to access the full analysis, data tables, and strategic recommendations.
                    </p>
                    <PlayButton textToSpeak={fullReportText} title="Full Report" variant="label" className="mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {reportSections.map((section) => (
                        <div 
                            key={section.id}
                            onClick={() => setSelectedSection(section)}
                            className="relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 p-6 cursor-pointer group flex flex-col h-full"
                        >
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                <PlayButton textToSpeak={section.speechContent} title={section.title} />
                            </div>

                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-sky-50 rounded-lg text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                                    {section.icon}
                                </div>
                                <ArrowRight className="text-slate-300 group-hover:text-sky-500 transition-transform group-hover:translate-x-1" size={20} />
                            </div>
                            
                            <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-sky-700 transition-colors pr-8">
                                {section.title}
                            </h3>
                            
                            <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                                {section.excerpt}
                            </p>
                            
                            <div className="mt-4 pt-4 border-t border-slate-50">
                                <span className="text-xs font-bold text-sky-600 uppercase tracking-wide">Read Section</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center border-t border-slate-200 pt-8">
                     <p className="text-sm text-slate-500 mb-2">Works Cited & Methodology Data</p>
                     <p className="text-xs text-slate-400 max-w-3xl mx-auto">
                        Sources include WHO Data (2025), OECD Health at a Glance (2025), Commonwealth Fund Mirror Mirror (2024), and Henley Private Wealth Migration Report (2024).
                     </p>
                </div>
            </div>

            <Modal 
                isOpen={!!selectedSection} 
                onClose={() => setSelectedSection(null)} 
                title={selectedSection?.title || ''}
                speechContent={selectedSection?.speechContent || ''}
            >
                {selectedSection?.content}
            </Modal>
        </div>
    );
};
