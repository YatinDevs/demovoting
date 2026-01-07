import React from "react";

const CandidateRow = ({
  candidate,
  t,
  isCurrent,
  votingCompleted,
  isProcessing,
  onVote,
  getCandidateName,
}) => {
  const isNota = candidate.srNo === 16;

  return (
    <tr
      className="border-t transition-all duration-200"
      style={{ backgroundColor: candidate.bgColor }}
    >
      <td className="px-1 py-4 md:px-2 md:py-2 text-center font-semibold">
        {candidate.srNo}
      </td>
      <td className="px-1 py-4 md:px-2 md:py-2 font-semibold">
        {getCandidateName(candidate)}
      </td>
      <td className="px-1 py-4 md:px-2 md:py-2 text-center">
        <div className="flex justify-center">
          {candidate.photo && !isNota ? (
            <img
              alt={getCandidateName(candidate)}
              className="h-8 w-8 md:h-10 md:w-10 object-cover rounded-full border-2 border-gray-300"
              src={candidate.photo}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://via.placeholder.com/80/cccccc/000000?text=${candidate.code}`;
              }}
            />
          ) : (
            <span className="text-neutral-300">&nbsp;</span>
          )}
        </div>
      </td>
      <td className="px-1 py-4 md:px-2 md:py-2 border-r border-l">
        <div className="flex justify-center items-center">
          {candidate.symbol && !isNota ? (
            <img
              alt={getCandidateName(candidate)}
              className="h-8 md:h-10 w-auto object-contain"
              src={candidate.symbol}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://via.placeholder.com/60/cccccc/000000?text=${candidate.symbolText}`;
              }}
            />
          ) : isNota ? (
            <span className="inline-flex items-center justify-center bg-black text-white rounded text-[10px] font-semibold px-2 py-1">
              {t.nota}
            </span>
          ) : (
            <span className="text-neutral-300">&nbsp;</span>
          )}
        </div>
      </td>
      <td className="px-1 py-4 md:px-2 md:py-2">
        <div className="flex items-center justify-center gap-2">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            version="1.1"
            viewBox="0 0 16 16"
            className="text-[#6a0000] text-xl md:text-2xl"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.5 8l7.5 7.5v-4.5h8v-6h-8v-4.5z"></path>
          </svg>
          {isCurrent && !votingCompleted ? (
            <button
              onClick={onVote}
              className={`text-xs md:text-sm tracking-tight rounded-full px-3 py-2 bg-[#003399] text-white shadow cursor-pointer transition-all duration-200 ${
                isProcessing
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-800 hover:shadow-lg transform hover:scale-105"
              } ${isProcessing ? "" : "animate-pulse"}`}
              disabled={isProcessing}
            >
              {isProcessing ? t.processing : t.pressButton}
            </button>
          ) : (
            <button
              disabled
              className="text-xs md:text-sm tracking-tight rounded-full px-3 py-2 bg-[#003399] cursor-not-allowed text-transparent"
            >
              {t.pressButton}
            </button>
          )}
        </div>
      </td>
    </tr>
  );
};

export default CandidateRow;
