import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CandidateRow from "./CandidateRow";
import EmptyRow from "./EmptyRow";

const MunicipalVotingMachine = () => {
  // State variables
  const [votes, setVotes] = useState(2544);
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState(0);
  const [votedCandidates, setVotedCandidates] = useState([]);
  const [votingCompleted, setVotingCompleted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [language, setLanguage] = useState("mr");
  const [currentBgColor, setCurrentBgColor] = useState("#ffffff");

  const buttonBeepRef = useRef(null);
  const successSoundRef = useRef(null);
  const endSoundRef = useRef(null);

  // Your existing translations, candidates data, and helper functions remain the same
  // ... (keep all your existing data and functions)

  // Main table component - much cleaner now
  const VotingTable = () => {
    const rows = [];
    const currentCandidate = getCurrentCandidate();

    // Generate only 4 candidate rows + NOTA row
    for (let i = 1; i <= 4; i++) {
      const candidate = candidates.find((c) => c.srNo === i);

      if (candidate) {
        rows.push({
          ...candidate,
          isCurrent: currentCandidate.srNo === candidate.srNo,
        });
      }
    }

    // Add NOTA row
    rows.push({
      ...notaCandidate,
      isCurrent: currentCandidate.srNo === notaCandidate.srNo,
    });

    return (
      <div
        className="mt-6 rounded-2xl border-2 border-[#cccccc] px-3 py-8 md:px-4 md:py-8 relative panel-slide-left"
        style={{ backgroundColor: currentBgColor }}
      >
        <div className="overflow-x-auto rounded-xl">
          <table className="w-full text-xs md:text-sm">
            <thead
              className="font-semibold"
              style={{ backgroundColor: currentBgColor }}
            >
              <tr>
                {t.tableHeaders.map((header, index) => (
                  <th
                    key={index}
                    className={`px-2 py-2 md:px-3 md:py-3 ${
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
              {rows.map((row) => (
                <CandidateRow
                  key={row.srNo}
                  candidate={row}
                  t={t}
                  isCurrent={row.isCurrent}
                  votingCompleted={votingCompleted}
                  isSpeaking={isSpeaking}
                  handleVote={handleVote}
                  getCandidateName={getCandidateName}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  // Your existing audio refs, functions, and effects remain
  // ... (keep all your existing logic)

  // Format votes to individual digits for display
  const voteDigits = votes.toString().padStart(8, "0").split("");

  return (
    <div className="min-h-screen bg-neutral-100 text-slate-900">
      {/* Hidden audio elements */}
      <audio ref={buttonBeepRef} preload="auto">
        {/* Your audio sources */}
      </audio>

      {/* Header Component */}
      <Header
        t={t}
        language={language}
        handleLanguageChange={handleLanguageChange}
        voteDigits={voteDigits}
        setVotes={setVotes}
        playBeepSound={playBeepSound}
      />

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-3 md:px-8 relative">
        {/* Voice Indicator */}
        {isSpeaking && (
          <div className="fixed top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm animate-pulse z-50">
            🔊 {t.speaking}
          </div>
        )}

        {/* Voting Table */}
        <VotingTable />

        {/* Current Voting Status */}
        <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-300">
          <h3 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
            <span className="text-xl">📢</span> {t.currentStatus}
          </h3>
          {/* Your status display logic */}
        </div>

        {/* Voting Summary */}
        {votedCandidates.length > 0 && (
          <div className="mt-6 bg-green-50 rounded-xl p-4 border border-green-200">
            {/* Your summary display logic */}
          </div>
        )}

        {/* Success Message */}
        {showSuccess && (
          <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl shadow-lg p-6 border-2 border-green-300 animate-fade-in">
            {/* Your success message logic */}
          </div>
        )}

        {/* Footer Component */}
        <Footer t={t} />
      </div>

      {/* Your styles remain the same */}
      <style jsx>{`
        /* Your CSS styles */
      `}</style>
    </div>
  );
};

export default MunicipalVotingMachine;
