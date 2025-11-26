import React from 'react';
import { Scale, BarChart3, Globe } from 'lucide-react';
import { PlayButton } from './ui/PlayButton';

export const InfoSection: React.FC = () => {
  const definitionsText = "Universal Health Care is defined here as a system where at least 95% of citizens have access to essential health services without financial hardship.";
  const methodologyText = "Our UHC Performance Index aggregates Health Outcomes at 30%, Access Speed at 20%, Cost Efficiency at 15%, Satisfaction at 15%, and Innovation at 10%.";
  const scopeText = "We analyzed data from 50 countries meeting the UHC definition. Data synthesis combines OECD stats, WHO reports, and proprietary migration indices.";

  return (
    <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
            <div className="relative group bg-white p-6 rounded-lg shadow-md border-t-4 border-sky-500 hover:-translate-y-1 transition-transform duration-200">
                 <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayButton textToSpeak={definitionsText} title="Definitions" />
                 </div>
                <div className="text-sky-600 mb-4"><Scale size={40} /></div>
                <h3 className="text-xl font-bold mb-2">Defining UHC</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    "Universal Health Care" is defined here as a system where at least <strong>95% of citizens</strong> have access to essential health services without financial hardship.
                </p>
            </div>
            <div className="relative group bg-white p-6 rounded-lg shadow-md border-t-4 border-sky-500 hover:-translate-y-1 transition-transform duration-200">
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayButton textToSpeak={methodologyText} title="Methodology" />
                 </div>
                <div className="text-sky-600 mb-4"><BarChart3 size={40} /></div>
                <h3 className="text-xl font-bold mb-2">The Methodology</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    Our <strong>UHC Performance Index (UHCPI)</strong> aggregates: Health Outcomes (30%), Access Speed (20%), Cost Efficiency (15%), Satisfaction (15%), and Innovation (10%).
                </p>
            </div>
            <div className="relative group bg-white p-6 rounded-lg shadow-md border-t-4 border-sky-500 hover:-translate-y-1 transition-transform duration-200">
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayButton textToSpeak={scopeText} title="Scope" />
                 </div>
                <div className="text-sky-600 mb-4"><Globe size={40} /></div>
                <h3 className="text-xl font-bold mb-2">Scope of Research</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    We analyzed data from <strong>50 countries</strong> meeting the UHC definition. Data synthesis combines OECD stats, WHO reports, and proprietary migration indices.
                </p>
            </div>
        </div>
    </section>
  );
};
