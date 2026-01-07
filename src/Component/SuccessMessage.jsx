import React from "react";

const SuccessMessage = ({
  showSuccess,
  votes,
  t,
  resetVoting,
  playEndSound,
}) => {
  if (!showSuccess) return null;

  return (
    <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl shadow-xl p-6 border-2 border-green-400 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 flex items-center justify-center bg-green-500 text-white rounded-full text-3xl shadow-lg">
              ✓
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-green-800">
                {t.votingCompleted}
              </h3>
              <p className="text-gray-700 mt-1">{t.thankYou}</p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-green-600 font-semibold">
              🎉 {t.completedMessage}
            </p>
            <p className="text-gray-600 mt-2">
              {t.totalVotes}{" "}
              <strong className="text-2xl text-green-700">{votes}</strong>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 min-w-[200px]">
          <button
            onClick={resetVoting}
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg shadow-lg hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 active:scale-95"
          >
            {t.resetButton}
          </button>
          <button
            onClick={playEndSound}
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg shadow hover:from-blue-600 hover:to-purple-600 transition-all"
          >
            {t.replayMessage}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
