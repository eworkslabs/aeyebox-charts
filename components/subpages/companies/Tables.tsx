export default function TableCompany() {
  return (
    <div className="pl-5 pr-5">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#07314a] text-white">
            <tr>
              <th className="w-1/3 px-2 py-3 text-left xs:text-[13px] text-base md:text-lg font-medium">Name</th>
              <th className="w-1/3 px-2 py-3 text-left xs:text-[13px] text-base md:text-lg font-medium">State</th>
              <th className="w-1/3 px-2 py-3 text-left xs:text-[13px] text-base md:text-lg font-medium">Factory</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
            <tr className="bg-slate-100">
              <td className="px-2 py-4 xs:text-[13px] text-base md:text-lg font-medium">Biffco Enterprises Ltd.</td>
              <td className="px-2 py-4 xs:text-[13px] text-base md:text-lg font-medium">Hyderabad, Telangana, India</td>
              <td className="px-2 py-4 xs:text-[13px] text-base md:text-lg font-medium">3</td>
            </tr>
            <tr>
              <td className="px-2 py-4 xs:text-[13px] text-base md:text-lg font-medium">Big Kahuna Burger Ltd.</td>
              <td className="px-2 py-4 xs:text-[13px] text-base md:text-lg font-medium">Chennai, India</td>
              <td className="px-2 py-4 xs:text-[13px] text-base md:text-lg font-medium">4</td>
            </tr>
            <tr className="bg-slate-100">
              <td className="px-2 py-4 xs:text-[13px] text-base md:text-lg font-medium">Barone LLC.</td>
              <td className="px-2 py-4 xs:text-[13px] text-base md:text-lg font-medium">Bangalore, Karnataka, India</td>
              <td className="px-2 py-4 xs:text-[13px] text-base md:text-lg font-medium">1</td>
            </tr>
            <tr>
              <td className="px-2 py-4 xs:text-[13px] text-base md:text-lg font-medium">Acme Co.</td>
              <td className="px-2 py-4 xs:text-[13px] text-base md:text-lg font-medium">Hyderabad, Telangana, India</td>
              <td className="px-2 py-4 xs:text-[13px] text-base md:text-lg font-medium">0</td>
            </tr>
            <tr className="bg-slate-100">
              <td className="px-2 py-4 xs:text-[13px] text-base md:text-lg font-medium">Abstergo Ltd.</td>
              <td className="px-2 py-4 xs:text-[13px] text-base md:text-lg font-medium">London, England, UK</td>
              <td className="px-2 py-4 xs:text-[13px] text-base md:text-lg font-medium">0</td>
            </tr>
            <tr>
              <td className="px-2 py-4 xs:text-[13px] text-base md:text-lg font-medium">Binford Ltd.</td>
              <td className="px-2 py-4 xs:text-[13px] text-base md:text-lg font-medium">Chicago, Illinois, US</td>
              <td className="px-2 py-4 xs:text-[13px] text-base md:text-lg font-medium">2</td>
            </tr>
            <tr className="bg-slate-100">
              <td className="px-2 py-4 xs:text-[13px] text-base md:text-lg font-medium">Big Kahuna Burger Ltd.</td>
              <td className="px-2 py-4 xs:text-[13px] text-base md:text-lg font-medium">Berlin, Germany</td>
              <td className="px-2 py-4 xs:text-[13px] text-base md:text-lg font-medium">5</td>
            </tr>
            <tr>
              <td className="px-2 py-4 xs:text-[13px] text-base md:text-lg font-medium">Abstergo Ltd.</td>
              <td className="px-2 py-4 xs:text-[13px] text-base md:text-lg font-medium">Algiers, Algeria</td>
              <td className="px-2 py-4 xs:text-[13px] text-base md:text-lg font-medium">0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
