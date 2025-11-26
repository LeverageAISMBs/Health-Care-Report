import React, { useState } from 'react';
import { ViewState } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { InfoSection } from './components/InfoSection';
import { EfficiencyChart } from './components/charts/EfficiencyChart';
import { WaitTimeChart } from './components/charts/WaitTimeChart';
import { SatisfactionChart } from './components/charts/SatisfactionChart';
import { ImmigrationChart } from './components/charts/ImmigrationChart';
import { RankingTable } from './components/RankingTable';
import { FullReportView } from './components/FullReportView';
import { AudioPlayer } from './components/AudioPlayer';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.SUMMARY);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 pb-20"> {/* pb-20 for Audio Player space */}
      <Header currentView={currentView} setView={setCurrentView} />

      <main className="flex-grow">
        {currentView === ViewState.SUMMARY ? (
          <>
            <InfoSection />
            
            <section className="bg-white py-12 border-y border-gray-200">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-10">
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">The Efficiency Frontier: Cost vs. Outcomes</h2>
                  <p className="text-gray-600 leading-relaxed">
                    A core metric of UHC success is the return on investment. The data below plots 
                    <strong> Health Expenditure per Capita (USD)</strong> against the <strong>Health Outcome Score</strong>. 
                    Countries in the top-left quadrant represent the "Efficiency Frontier".
                  </p>
                </div>
                <div className="h-[400px] w-full max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                   <EfficiencyChart />
                </div>
                <p className="text-center text-sm text-gray-500 mt-4 italic">
                  Bubble size represents population size. Colors indicate efficiency tier.
                </p>
              </div>
            </section>

            <section className="container mx-auto px-4 py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">The Access Bottleneck</h2>
                  <h3 className="text-xl text-sky-600 font-semibold mb-4">Time to See a Specialist</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    While systems like the <strong>UK (NHS)</strong> and <strong>Canada</strong> offer zero cost at the point of service, 
                    they struggle with wait times. Conversely, Multi-payer systems like <strong>Switzerland</strong> maintain high access speeds.
                  </p>
                  <div className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-600">
                    <p className="font-bold text-sky-800 text-sm">KEY INSIGHT</p>
                    <p className="text-sm text-sky-900 mt-1">
                      Systems with a private provision element or "gatekeeper" copayments tend to have 30-50% shorter wait times than purely tax-funded models.
                    </p>
                  </div>
                </div>
                <div className="h-[400px] w-full bg-white p-4 rounded-lg shadow-sm">
                  <WaitTimeChart />
                </div>
              </div>
            </section>

            <section className="bg-slate-50 py-16 border-y border-gray-200">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">The Human Experience: Satisfaction Metrics</h2>
                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
                  Measuring <strong>Patient Satisfaction</strong> against <strong>Provider Satisfaction</strong>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="h-[400px] w-full bg-white p-2 rounded-lg shadow-sm">
                    <SatisfactionChart />
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-amber-500">
                      <h4 className="text-lg font-bold text-slate-800 mb-4">Analysis of Sentiment</h4>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2 text-xl">⚠️</span>
                          <p className="text-sm text-gray-600">
                            <strong>The "Burnout Gap":</strong> Countries like the UK show high patient satisfaction but rapidly declining provider satisfaction.
                          </p>
                        </li>
                        <li className="flex items-start">
                          <span className="text-sky-500 mr-2 text-xl">✅</span>
                          <p className="text-sm text-gray-600">
                            <strong>The Nordic Balance:</strong> Norway and Denmark maintain the highest equilibrium.
                          </p>
                        </li>
                        <li className="flex items-start">
                          <span className="text-sky-500 mr-2 text-xl">💼</span>
                          <p className="text-sm text-gray-600">
                            <strong>Asian Efficiency:</strong> Singapore and Japan score high on outcomes but report lower "perceived friendliness".
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="container mx-auto px-4 py-16">
              <div className="max-w-4xl mx-auto mb-10 text-center">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Economic Vote of Confidence</h2>
                <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                   Tracking the <strong>Net Migration of High-Net-Worth Individuals (HNWI)</strong> into countries with top-tier UHC systems.
                </p>
              </div>
              <div className="h-[400px] w-full max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-sm">
                <ImmigrationChart />
              </div>
            </section>

            <RankingTable />
          </>
        ) : (
          <FullReportView />
        )}
      </main>

      <Footer currentView={currentView} setView={setCurrentView} />
      <AudioPlayer />
    </div>
  );
};

export default App;
