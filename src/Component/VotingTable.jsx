import React from "react";
import CandidateRow from "../pages/CandidateRow";

const VotingTable = ({
  candidates,
  notaCandidate,
  currentCandidateIndex,
  votingCompleted,
  isProcessing,
  handleVote,
  t,
  getCandidateName,
  currentBgColor,
}) => {
  // Create table rows (4 candidates + NOTA)
  const tableRows = [
    ...candidates.map((candidate, index) => ({
      ...candidate,
      isCurrent: index === currentCandidateIndex,
    })),
    {
      ...notaCandidate,
      isCurrent: currentCandidateIndex === candidates.length,
    },
  ];

  return (
    <div
      className="mt-6 rounded-2xl border-2 border-[#cccccc] px-3 py-8 md:px-4 md:py-8 relative panel-slide-left shadow-lg"
      style={{ backgroundColor: currentBgColor }}
    >
      <div className="overflow-x-auto rounded-xl">
        <table className="w-full text-xs md:text-sm">
          <thead
            className="font-semibold sticky top-0 z-10"
            style={{ backgroundColor: currentBgColor }}
          >
            <tr>
              {t.tableHeaders.map((header, index) => (
                <th
                  key={index}
                  className={`px-2 py-3 md:px-3 md:py-4 border-b-2 border-gray-300 ${
                    index === 0
                      ? "w-[50px] md:w-[60px] text-left"
                      : index === 2
                      ? "w-[50px] md:w-[60px] text-center"
                      : index === 3
                      ? "w-18 md:w-20 text-center"
                      : index === 4
                      ? "w-[120px] text-center"
                      : "text-left"
                  }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row) => (
              <CandidateRow
                key={row.srNo}
                candidate={row}
                t={t}
                isCurrent={row.isCurrent}
                votingCompleted={votingCompleted}
                isProcessing={isProcessing}
                onVote={handleVote}
                getCandidateName={getCandidateName}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VotingTable;
