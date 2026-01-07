import React from "react";

const StatusPanel = ({
  currentCandidateIndex,
  candidates,
  notaCandidate,
  t,
  getCandidateName,
  currentBgColor,
  votingProgress,
}) => {
  const isVotingCompleted = currentCandidateIndex > candidates.length;
  const isVotingNota = currentCandidateIndex === candidates.length;
  const currentCandidate = isVotingNota
    ? notaCandidate
    : candidates[currentCandidateIndex];

  return (
    <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border-2 border-blue-300 shadow">
      <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2 text-lg">
        <span className="text-2xl">📢</span> {t.currentStatus}
      </h3>

      <div className="space-y-3">
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${votingProgress}%` }}
          ></div>
        </div>

        {/* Status Text */}
        {!isVotingCompleted && (
          <>
            <p className="text-blue-700 font-medium">
              <span className="font-bold">{t.nextToVote}</span>{" "}
              <span className="text-blue-800">
                {getCandidateName(currentCandidate)}
              </span>
            </p>
            <p className="text-sm text-gray-600 bg-blue-100 p-2 rounded">
              {isVotingNota ? t.finalStepDesc : t.clickToVote}
            </p>
          </>
        )}

        {isVotingCompleted && (
          <p className="text-green-700 font-bold text-lg">
            ✅ {t.votingCompleted}
          </p>
        )}

        {/* Color Indicator */}
        <div className="flex items-center gap-3 mt-3 pt-3 border-t border-blue-200">
          <span className="text-sm text-gray-600">
            Current Background Color:
          </span>
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded border-2 border-gray-400 shadow"
              style={{ backgroundColor: currentBgColor }}
            ></div>
            <span className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
              {currentBgColor}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusPanel;
