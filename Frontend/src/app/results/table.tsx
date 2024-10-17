const ResultTable = ({ data }: { data: any }) => {
  // Determine if the congratulatory message should be displayed
  const shouldShowCongratulations =
    (data.rank <= 25 && (data.category === "ARETEOX" || data.category === "METIOX")) ||
    (data.rank <= 20 && (data.category === "APOLLOX" || data.category === "ATHENOX"));

  return (
    <div className="flex justify-center items-center min-h-screen bg-transparent">
      <div className="md:w-[60%] bg-transparent backdrop-blur-xl text-white md:text-2xl p-8 rounded-lg shadow-xl">
        <table className="w-full table-auto border-collapse border border-white">
          <thead>
            <tr>
              <th className="border border-white px-4 py-2 text-left">NAME</th>
              <th className="border border-white px-4 py-2 text-right">{data.name}</th>
            </tr>
            <tr>
              <th className="border border-white px-4 py-2 text-left">CATEGORY</th>
              <th className="border border-white px-4 py-2 text-right">{data.category}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-white">
              <td className="border border-white px-4 py-2">RANK</td>
              <td className="border border-white px-4 py-2 text-right">{data.rank}</td>
            </tr>
            <tr className="border-t border-white">
              <td className="border border-white px-4 py-2">TOTAL MARKS OBTAINED</td>
              <td className="border border-white px-4 py-2 text-right">{data.totalMarks}</td>
            </tr>
          </tbody>
        </table>

        {/* Conditional message for congratulations */}
        {shouldShowCongratulations && (
          <div className="mt-4 text-center text-green-400 font-semibold">
            Congratulations!! You are selected for the interview for round 2.
          </div>
        )}

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
