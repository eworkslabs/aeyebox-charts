import React from 'react';

export default function ResultsKpi() {
  return (
    <div className='pl-5 pr-5'>
      <div className="overflow-hidden rounded-t-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#07314a] text-white">
            <tr>
              <th className="px-6 py-3 text-left text-lg font-medium">KPIs</th>
              <th className="px-6 py-3 text-left text-lg font-medium">Count</th>
              <th className="px-6 py-3 text-left text-lg font-medium">Low/s</th>
              <th className="px-6 py-3 text-left text-lg font-medium">High/s</th>
              <th className="px-6 py-3 text-left text-lg font-medium">Stop</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
            <tr className="bg-slate-100">
              <td className="px-6 py-4 text-lg font-medium">Sensor 01</td>
              <td className="px-6 py-4 text-lg font-medium">123</td>
              <td className="px-6 py-4 text-lg font-medium">345</td>
              <td className="px-6 py-4 text-lg font-medium">456</td>
              <td className="px-6 py-4 text-lg font-medium">678</td>
            </tr>
            <tr className="bg-slate-100">
              <td className="px-6 py-4 text-lg font-medium">Sensor 02</td>
              <td className="px-6 py-4 text-lg font-medium">123</td>
              <td className="px-6 py-4 text-lg font-medium">345</td>
              <td className="px-6 py-4 text-lg font-medium">456</td>
              <td className="px-6 py-4 text-lg font-medium">678</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}