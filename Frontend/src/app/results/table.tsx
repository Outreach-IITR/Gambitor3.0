// components/ResultTable.tsx

const ResultTable = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <div className="md:w-[60%] bg-blue-900 text-white md:text-2xl p-8 rounded-lg shadow-md">
        <table className="w-full table-auto border-collapse border border-white">
          <thead>
            <tr>
              <th className="border border-white px-4 py-2 text-left">NAME </th>
              <th className="border border-white px-4 py-2 text-right">Sebastian</th>
            </tr>
            <tr>
              <th className="border border-white px-4 py-2 text-left">CATEGORY </th>
              <th className="border border-white px-4 py-2 text-right">Metiox</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-white">
              <td className="border border-white px-4 py-2">RANK</td>
              <td className="border border-white px-4 py-2 text-right">973</td>
            </tr>
            <tr className="border-t border-white">
              <td className="border border-white px-4 py-2">TOTAL MARKS OBTAINED</td>
              <td className="border border-white px-4 py-2 text-right">160</td>
            </tr>
            
          </tbody>
        </table>
        <div className="mt-6 flex justify-center">
          <button className="bg-white text-blue-900 py-2 px-6 rounded-lg shadow-md hover:bg-gray-200">
            DOWNLOAD CERTIFICATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultTable;
