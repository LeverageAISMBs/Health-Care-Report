import React from 'react';
import { ReportSection } from '../types';
import { BookOpen, Globe2, TrendingUp, AlertTriangle, Scale, Table2, Lightbulb } from 'lucide-react';

export const reportSections: ReportSection[] = [
  {
    id: 'exec-summary',
    title: 'Executive Summary',
    excerpt: 'The global landscape of Universal Health Coverage is undergoing a seismic shift. Benchmarks are being redefined by workforce stability and financial sustainability.',
    icon: <BookOpen size={24} />,
    speechContent: `Executive Summary. The global landscape of Universal Health Coverage is undergoing a seismic shift. As nations navigate the post-pandemic era, the traditional benchmarks of health system success—longevity and access—are being redefined by new, volatile variables: workforce stability, financial sustainability in an inflationary environment, and the capacity to integrate rapid technological innovation. This extensive research report provides a comprehensive evaluation of 50 distinct national health systems that have achieved or are on the brink of achieving universal coverage. The findings reveal a bifurcation in global health performance. The historic dominance of Western European, tax-funded systems is eroding under the pressure of demographic aging and "medical brain drain," while agile, hybrid insurance models in the Asia-Pacific region are emerging as the new exemplars. Critically, this report identifies "Provider Satisfaction" not merely as a labor metric, but as the leading indicator of a system’s future viability.`,
    content: (
      <>
        <p className="lead text-lg text-slate-600 mb-6">
          The global landscape of Universal Health Coverage (UHC) is undergoing a seismic shift. As nations navigate the post-pandemic era, the traditional benchmarks of health system success—longevity and access—are being redefined by new, volatile variables: workforce stability, financial sustainability in an inflationary environment, and the capacity to integrate rapid technological innovation.
        </p>
        <p className="mb-4">
          This extensive research report provides a comprehensive evaluation of 50 distinct national health systems that have achieved or are on the brink of achieving universal coverage. The analysis departs from conventional rankings that often privilege raw health outcomes or pure cost-efficiency. Instead, it adopts a multi-dimensional "Value-for-Stakeholder" approach, weighing the experiences of patients (wait times, satisfaction) and providers (burnout, retention) alongside macroeconomic indicators.
        </p>
        <p className="mb-4">
          The findings reveal a bifurcation in global health performance. The historic dominance of Western European, tax-funded systems is eroding under the pressure of demographic aging and "medical brain drain," while agile, hybrid insurance models in the Asia-Pacific region and select European managed-competition systems are emerging as the new exemplars of sustainability.
        </p>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
          <p className="font-bold text-amber-900">Critical Insight</p>
          <p className="text-amber-800">
            This report identifies "Provider Satisfaction" not merely as a labor metric, but as the leading indicator of a system’s future viability. In 2024 and 2025, the correlation between physician retention and system resilience has never been stronger.
          </p>
        </div>
      </>
    )
  },
  {
    id: 'framework',
    title: '1. Conceptual Framework & Methodology',
    excerpt: 'Defining Universal Health Coverage in 2025 and the composite index metrics used for ranking.',
    icon: <Scale size={24} />,
    speechContent: `Section 1. Conceptual Framework and Methodology. For the purposes of this comparative analysis, Universal Health Coverage is defined in accordance with the World Health Organization’s principles but operationalized through strict inclusion criteria. A country is deemed to have UHC if it possesses legislation mandating access to essential health services for at least 99% of its legal residents. The Ranking Metrics are a Composite Index including: Broad Statistical Health Outcomes weighted at 20%; Time to See a Specialist weighted at 15%; Financial Protection weighted at 15%; Provider Satisfaction and Workforce Stability weighted at 15%; Patient Satisfaction at 10%; Innovation at 10%; and the Impact on High-Value Immigration at 15%.`,
    content: (
      <>
        <h4 className="text-xl font-bold mb-3">1.1 Defining Universal Health Coverage in the 2025 Context</h4>
        <p className="mb-4">
          For the purposes of this comparative analysis, Universal Health Coverage (UHC) is defined in accordance with the World Health Organization’s principles but operationalized through strict inclusion criteria. A country is deemed to have UHC if it possesses legislation mandating access to essential health services for at least <strong>99% of its legal residents</strong>, accompanied by a financial protection mechanism that prevents catastrophic expenditure.
        </p>
        <p className="mb-4 text-sm text-slate-500 italic">
          *Note: This definition necessitates the exclusion of the United States from the ranking despite its high innovation, due to lack of universality.
        </p>

        <h4 className="text-xl font-bold mb-3 mt-8">1.2 The Ranking Metrics: A Composite Index</h4>
        <ul className="space-y-4">
          <li className="bg-slate-50 p-4 rounded-lg">
            <strong>Broad Statistical Health Outcomes (20%)</strong>: Aggregates life expectancy, HALE, and amenable mortality.
          </li>
          <li className="bg-slate-50 p-4 rounded-lg">
            <strong>Time to See a Specialist (15%)</strong>: Evaluates system "friction" and wait times for elective surgeries.
          </li>
          <li className="bg-slate-50 p-4 rounded-lg">
            <strong>Financial Protection (15%)</strong>: Examines Out-of-Pocket (OOP) expenditure and catastrophic costs.
          </li>
          <li className="bg-slate-50 p-4 rounded-lg">
            <strong>Provider Satisfaction (15%)</strong>: Synthesizes burnout rates, remuneration, and brain drain/gain.
          </li>
          <li className="bg-slate-50 p-4 rounded-lg">
            <strong>Patient Satisfaction (10%)</strong>: Measures perceived quality and courtesy of care.
          </li>
          <li className="bg-slate-50 p-4 rounded-lg">
            <strong>Innovation (10%)</strong>: Adoption of EHRs, AI, and novel pharmaceuticals.
          </li>
          <li className="bg-slate-50 p-4 rounded-lg">
            <strong>Impact on High-Value Immigration (15%)</strong>: Tracks HNWI migration motivated by "health security".
          </li>
        </ul>
      </>
    )
  },
  {
    id: 'elite-tier',
    title: '2. The Global Vanguard (Rank 1–10)',
    excerpt: 'The elite tier that successfully decouples universal coverage from waiting lists.',
    icon: <Globe2 size={24} />,
    speechContent: `Section 2. The Global Vanguard, Ranks 1 through 10. The top ten health systems in 2025 share a common characteristic: they have successfully decoupled "universal coverage" from "waiting lists." Number 1 is Singapore. Its philosophy of "shared responsibility" prevents moral hazard while ensuring safety. Number 2 is Taiwan, offering arguably the most barrier-free access in the world. Number 3 is Australia, which balances a public safety net with a thriving private sector and is a magnet for global medical talent. Number 4 is The Netherlands, using managed competition. Number 5 is Switzerland, the luxury model of UHC. Rounding out the top 10 are South Korea, Germany, Israel, Japan, and Sweden.`,
    content: (
      <>
        <p className="mb-6">
          The top ten health systems in 2025 share a common characteristic: they have successfully decoupled "universal coverage" from "waiting lists." They utilize sophisticated funding mechanisms to ensure that high demand does not result in access blockages.
        </p>

        <div className="space-y-6">
          <div className="border-b pb-4">
            <h5 className="text-lg font-bold text-sky-700">1. Singapore</h5>
            <p className="text-sm font-semibold text-slate-500">Model: Mixed / Medisave</p>
            <p className="mt-2">The global gold standard for efficiency. Philosophy of "shared responsibility" prevents moral hazard. Top destination for millionaire migration (+3,500 net inflow in 2024).</p>
          </div>
          
          <div className="border-b pb-4">
            <h5 className="text-lg font-bold text-sky-700">2. Taiwan</h5>
            <p className="text-sm font-semibold text-slate-500">Model: NHI (Single-Payer)</p>
            <p className="mt-2">Offers perhaps the most barrier-free access in the world. Patients bypass gatekeepers. Runs on a highly efficient "Smart Card" system.</p>
          </div>

          <div className="border-b pb-4">
            <h5 className="text-lg font-bold text-sky-700">3. Australia</h5>
            <p className="text-sm font-semibold text-slate-500">Model: Mixed (Medicare + Private)</p>
            <p className="mt-2">Balances public safety net with thriving private sector. Primary beneficiary of NHS "brain drain," offering high remuneration to attract talent.</p>
          </div>

          <div className="border-b pb-4">
            <h5 className="text-lg font-bold text-sky-700">4. The Netherlands</h5>
            <p className="text-sm font-semibold text-slate-500">Model: Managed Competition</p>
            <p className="mt-2">Insurers compete on price/quality but must accept all. effectively eliminates distinction between public and private care.</p>
          </div>

          <div className="border-b pb-4">
            <h5 className="text-lg font-bold text-sky-700">5. Switzerland</h5>
            <p className="text-sm font-semibold text-slate-500">Model: Mandatory Private Insurance</p>
            <p className="mt-2">The "luxury" version of UHC. Expensive (~$9,688 per capita) but offers unrivaled quality and choice with zero wait times.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-slate-50 p-3 rounded"><strong>6. South Korea:</strong> Tech-forward, high outcomes, but currently penalized for severe workforce unrest/strikes.</div>
            <div className="bg-slate-50 p-3 rounded"><strong>7. Germany:</strong> The "tank" of healthcare. Heavy, expensive, but robust capacity.</div>
            <div className="bg-slate-50 p-3 rounded"><strong>8. Israel:</strong> High outcomes with modest spending via efficient HMO model.</div>
            <div className="bg-slate-50 p-3 rounded"><strong>9. Japan:</strong> World leader in longevity, low costs via price-setting, but faces demographic crisis.</div>
            <div className="bg-slate-50 p-3 rounded"><strong>10. Sweden:</strong> Clinical excellence and cancer outcomes, but struggles with elective wait times.</div>
          </div>
        </div>
      </>
    )
  },
  {
    id: 'contenders',
    title: '3. High-Performing Contenders (Rank 11–25)',
    excerpt: 'Wealthy nations grappling with structural challenges like workforce shortages and wait times.',
    icon: <AlertTriangle size={24} />,
    speechContent: `Section 3. High-Performing Contenders, Rank 11 through 25. This tier consists of wealthy nations grappling with structural challenges. Scandinavia, including Norway, Denmark, Finland, and Iceland, shows excellence in clinical quality but struggles with elective wait times. The Beveridge Crisis is evident in the UK, Canada, and New Zealand. The UK's NHS is in deep crisis with over 7 million on waiting lists. Canada is culturally cherished but ranks near the bottom for specialist wait times. Conversely, rising stars like the UAE and Ireland are attracting professionals and investment.`,
    content: (
      <>
        <p className="mb-6">
          This tier consists of wealthy nations with robust health systems currently grappling with structural challenges—primarily workforce shortages ("burnout"), rising wait times, or funding sustainability.
        </p>

        <div className="space-y-4">
            <details className="group border border-slate-200 rounded-lg p-4 open:bg-slate-50">
                <summary className="font-bold cursor-pointer text-sky-800">Scandinavia (Norway, Denmark, Finland, Iceland)</summary>
                <div className="mt-2 text-sm">
                    Excellence in clinical quality and social care integration. However, all struggle to varying degrees with elective wait times compared to Bismarck systems. Finland faces specific primary care access issues.
                </div>
            </details>

            <details className="group border border-slate-200 rounded-lg p-4 open:bg-slate-50">
                <summary className="font-bold cursor-pointer text-sky-800">The "Beveridge" Crisis (UK, Canada, New Zealand)</summary>
                <div className="mt-2 text-sm">
                    <p className="mb-2"><strong>UK (Rank 19):</strong> The NHS is in deep crisis. Failing on access with 7M+ wait list. "Free" care is increasingly "delayed" care.</p>
                    <p className="mb-2"><strong>Canada (Rank 20):</strong> Culturally cherished but operationally strained. Ranks near bottom for specialist wait times (57% wait 4+ weeks).</p>
                    <p><strong>New Zealand (Rank 23):</strong> Efficient but under-resourced. Severe specialist shortages.</p>
                </div>
            </details>
            
             <details className="group border border-slate-200 rounded-lg p-4 open:bg-slate-50">
                <summary className="font-bold cursor-pointer text-sky-800">Rising Stars (UAE, Ireland)</summary>
                <div className="mt-2 text-sm">
                    <p className="mb-2"><strong>UAE (Rank 21):</strong> Rising star. Aggressive privatization and infrastructure investment. #1 globally for wealth migration.</p>
                    <p><strong>Ireland (Rank 17):</strong> Disentangling two-tier system. Attracting medical professionals with competitive salaries.</p>
                </div>
            </details>
        </div>
      </>
    )
  },
  {
    id: 'emerging',
    title: '4. Emerging & Transitioning (Rank 26–50)',
    excerpt: 'Nations integrating into EU standards and developing economies enacting UHC.',
    icon: <TrendingUp size={24} />,
    speechContent: `Section 4. Emerging and Transitioning Systems, Rank 26 through 50. In Southern Europe, nations like Italy and Spain have high life expectancy but were severely impacted by austerity and are facing a doctor exodus. Eastern European nations like the Czech Republic and Slovenia are strong performers, while Estonia pioneers e-Health. Developing giants like Thailand have successfully implemented UHC, while India's Ayushman Bharat is the world's largest insurance program, though high out-of-pocket costs remain a risk.`,
    content: (
      <>
        <div className="grid grid-cols-1 gap-6">
            <div>
                <h5 className="font-bold text-slate-800">Southern Europe (Italy, Spain, Portugal, Malta)</h5>
                <p className="text-sm mt-1">
                    Generally high life expectancy due to lifestyle, but systems were severely impacted by post-2008 austerity. Portugal (Rank 25) and Spain (Rank 23) face severe retention crises with doctors moving North.
                </p>
            </div>
            <div>
                <h5 className="font-bold text-slate-800">Eastern Europe (Czech Rep, Slovenia, Estonia, Poland)</h5>
                <p className="text-sm mt-1">
                    <strong>Czech Republic (Rank 27)</strong> and <strong>Slovenia (Rank 28)</strong> are strongest performers. <strong>Estonia (Rank 30)</strong> is a global pioneer in e-Health/blockchain records. Poland and Romania struggle with chronic underfunding and brain drain.
                </p>
            </div>
             <div>
                <h5 className="font-bold text-slate-800">Developing Giants (Malaysia, Thailand, China, India, Brazil)</h5>
                <p className="text-sm mt-1">
                    <strong>Thailand (Rank 32)</strong>: "30 Baht" scheme is a model for developing world UHC.<br/>
                    <strong>China (Rank 45)</strong>: Near universal coverage but shallow depth; high copays.<br/>
                    <strong>India (Rank 50)</strong>: Ayushman Bharat is world's largest insurance program, but high OOP spending (>45%) remains a risk.
                </p>
            </div>
             <div>
                 <h5 className="font-bold text-slate-800">The Middle East & Latin America</h5>
                 <p className="text-sm mt-1">
                    <strong>Saudi Arabia (Rank 38)</strong>: Radical transformation under Vision 2030.<br/>
                    <strong>Argentina (Rank 49)</strong>: Formerly a leader, now in fiscal collapse affecting drug supplies.<br/>
                    <strong>Costa Rica (Rank 33)</strong>: The "Switzerland of Central America", strong public health focus.
                 </p>
             </div>
        </div>
      </>
    )
  },
  {
    id: 'analysis',
    title: '5. Comparative Thematic Analysis',
    excerpt: 'Workforce crisis, access vs. cost trade-offs, and the innovation adoption gap.',
    icon: <Lightbulb size={24} />,
    speechContent: `Section 5. Comparative Thematic Analysis. First, the Workforce Crisis. Health systems are no longer closed loops. Exporters like the UK and India are losing talent to Importers like Australia and the UAE. Second, the Access versus Cost Trade-off. Beveridge systems ration by queue, while Bismarck systems ration by price. Taiwan is the outlier, having neither queues nor high costs, but paying for it in physician burnout. Third, Financial Protection. UHC fails when indirect costs are too high. Nations like India and Mexico are in the danger zone where out of pocket spending exceeds 30%.`,
    content: (
      <>
        <h4 className="text-lg font-bold text-sky-800 mb-2">5.1 The Workforce Crisis</h4>
        <p className="mb-4">
            Health systems are no longer closed loops. <strong>Exporters</strong> (UK, France, India) are losing talent to <strong>Importers</strong> (Australia, UAE, Switzerland). Countries with low provider satisfaction will face accelerating system degradation.
        </p>

        <h4 className="text-lg font-bold text-sky-800 mb-2">5.2 Access vs. Cost Trade-off</h4>
        <ul className="list-disc pl-5 mb-4 space-y-1">
            <li><strong>Rationing by Queue (Beveridge):</strong> Canada/UK use wait times to control costs. Low direct spend, high social cost.</li>
            <li><strong>Rationing by Price (Bismarck):</strong> Switzerland/Singapore use price signals. Zero wait times, requires robust subsidies.</li>
            <li><strong>The Outlier:</strong> Taiwan. No queues, low cost, paid for in physician burnout.</li>
        </ul>

        <h4 className="text-lg font-bold text-sky-800 mb-2">5.3 Financial Protection</h4>
        <p className="mb-4">
            UHC fails when indirect costs are too high. <strong>Danger Zone:</strong> Latvia, India, Mexico (OOP > 30%). Correlates with catastrophic household expenditure.
        </p>
      </>
    )
  },
  {
    id: 'ranking-table',
    title: '6. Summary Ranking Table',
    excerpt: 'Detailed metrics for the Top 50 UHC Systems including OOP spending and 2025 trends.',
    icon: <Table2 size={24} />,
    speechContent: `Section 6 Summary Ranking Table. Top highlights: Singapore is rank 1 with stable trends. Taiwan is rank 2. Australia is rank 3 with an improving trend. The United Kingdom is rank 19 with a declining trend due to workforce issues. Canada is rank 20, also declining. India is rank 50 but showing improvement in scale.`,
    content: (
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
            <thead>
                <tr className="bg-slate-100 text-left">
                    <th className="p-2 border-b">Rank</th>
                    <th className="p-2 border-b">Country</th>
                    <th className="p-2 border-b">System</th>
                    <th className="p-2 border-b">Key Strength</th>
                    <th className="p-2 border-b">Weakness</th>
                    <th className="p-2 border-b">Est. OOP</th>
                    <th className="p-2 border-b">Trend</th>
                </tr>
            </thead>
            <tbody>
                {[
                    {r:1, c:'Singapore', s:'Mixed', k:'Sustainability', w:'Tiered Equity', o:'~30%', t:'Stable'},
                    {r:2, c:'Taiwan', s:'NHI', k:'Access Speed', w:'Burnout', o:'~28%', t:'Stable'},
                    {r:3, c:'Australia', s:'Mixed', k:'Talent Attraction', w:'Public Waits', o:'~15%', t:'Improving'},
                    {r:4, c:'Netherlands', s:'Mgd Comp', k:'Satisfaction', w:'Rising Costs', o:'~10%', t:'Stable'},
                    {r:5, c:'Switzerland', s:'Private', k:'Quality', w:'Premiums', o:'~28%', t:'Stable'},
                    {r:6, c:'South Korea', s:'NHI', k:'Tech', w:'Strikes', o:'~30%', t:'Declining'},
                    {r:7, c:'Germany', s:'Bismarck', k:'Capacity', w:'Bureaucracy', o:'~12%', t:'Stable'},
                    {r:19, c:'UK', s:'Beveridge', k:'Fin. Protection', w:'Waits', o:'~16%', t:'Declining'},
                    {r:20, c:'Canada', s:'NHI', k:'Equity', w:'Waits', o:'~15%', t:'Declining'},
                    {r:21, c:'UAE', s:'Mixed', k:'Infrastructure', w:'Expat Dep.', o:'~18%', t:'Improving'},
                    {r:32, c:'Thailand', s:'NHI', k:'Primary Care', w:'Crowding', o:'~10%', t:'Stable'},
                    {r:45, c:'China', s:'NHI', k:'Innovation', w:'Inequality', o:'~35%', t:'Improving'},
                    {r:50, c:'India', s:'Mixed', k:'Scale', w:'OOP Risk', o:'~45%', t:'Improving'},
                ].map((row) => (
                    <tr key={row.c} className="border-b last:border-0 hover:bg-slate-50">
                        <td className="p-2 font-bold">{row.r}</td>
                        <td className="p-2">{row.c}</td>
                        <td className="p-2 text-xs text-slate-500">{row.s}</td>
                        <td className="p-2 text-green-700">{row.k}</td>
                        <td className="p-2 text-red-700">{row.w}</td>
                        <td className="p-2">{row.o}</td>
                        <td className="p-2 italic">{row.t}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <p className="text-xs text-slate-500 mt-2">* Selection of key entries. Full table in dataset.</p>
      </div>
    )
  },
  {
    id: 'conclusion',
    title: '7. Conclusion & Recommendations',
    excerpt: 'The era of "more spending equals better outcomes" has ended. Future viability depends on provider satisfaction.',
    icon: <BookOpen size={24} />,
    speechContent: `Section 7. Conclusion and Recommendations. The era of "more spending equals better outcomes" has definitively ended. Key findings include the rise of the Asian Tigers of health—Singapore, Taiwan, and South Korea—and the erosion of the NHS model. The workforce is the system. Recommendations for policymakers are: Stabilize the workforce by implementing competitive remuneration; Digitize to de-bureaucratize; and consider hybrid funding models to offer resilience against inflation.`,
    content: (
      <>
        <h4 className="text-lg font-bold mb-3">Key Findings</h4>
        <ol className="list-decimal pl-5 space-y-2 mb-6">
            <li><strong>Rise of "Asian Tigers":</strong> Singapore, Taiwan, S. Korea set new benchmarks by combining Beveridge access with Bismarck efficiency.</li>
            <li><strong>Erosion of NHS Model:</strong> Pure tax-funded models are struggling to compete for talent and control queues.</li>
            <li><strong>Workforce is the System:</strong> The most predictive metric for the next decade is Provider Satisfaction.</li>
        </ol>

        <h4 className="text-lg font-bold mb-3">Recommendations</h4>
        <ul className="space-y-2">
            <li className="bg-sky-50 p-3 rounded border-l-4 border-sky-500">
                <strong>Stabilize Workforce:</strong> Move beyond "clapping". Implement competitive remuneration to stop brain drain.
            </li>
            <li className="bg-sky-50 p-3 rounded border-l-4 border-sky-500">
                <strong>Digitize to De-Bureaucratize:</strong> Emulate Estonia/Taiwan to free up clinical time.
            </li>
            <li className="bg-sky-50 p-3 rounded border-l-4 border-sky-500">
                <strong>Hybrid Funding:</strong> Consider models like Medisave to offer resilience against inflation.
            </li>
        </ul>
      </>
    )
  }
];
