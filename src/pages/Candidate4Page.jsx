import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import VotingTable from "../components/VotingTable";

const Candidate4Page = ({
  votes,
  setVotes,
  language,
  handleLanguageChange,
  testBeepSound,
  t,
  getCandidateName,
  handleVote,
  votingCompleted,
  isProcessing,
  candidate,
  playBeepSound,
}) => {
  const navigate = useNavigate();
  const [localVoteDone, setLocalVoteDone] = useState(false);
  const voteDigits = votes.toString().padStart(8, "0").split("");
  const currentBgColor = candidate.bgColor;

  const handleLocalVote = () => {
    if (votingCompleted || isProcessing) return;

    // Play beep sound immediately on button click
    playBeepSound();

    // Call parent handle vote
    handleVote(candidate);

    // Mark local vote done
    setLocalVoteDone(true);

    // Navigate to NOTA after delay
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Header
        title={`${t.title} - Candidate 4`}
        language={language}
        handleLanguageChange={handleLanguageChange}
        voteDigits={voteDigits}
        setVotes={setVotes}
        testBeepSound={testBeepSound}
        t={t}
        showCounter={true}
        showLanguageSelector={true}
      />

      <hr className="border-t max-w-xl mx-auto border-neutral-400 my-4" />

      <div className="max-w-2xl mx-auto px-3 md:px-8 relative">
        {/* Current Status */}
        {/* <div className="mt-4 bg-white/80 backdrop-blur-sm rounded-xl p-4 border-2 border-red-400 shadow-lg">
          <h3 className="font-bold text-red-800 mb-2 flex items-center gap-2 text-lg">
            <span className="text-xl">🗳️</span> Voting for Candidate 4
          </h3>
          <p className="text-red-700">
            <strong>Position:</strong> 4
          </p>
          <p className="text-red-700">
            <strong>Candidate:</strong> {getCandidateName(candidate)}
          </p>
          <p className="text-red-700">
            <strong>Code:</strong> {candidate.code}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm">Table Color:</span>
            <div
              className="w-6 h-6 rounded border"
              style={{ backgroundColor: currentBgColor }}
            ></div>
            <span className="text-sm font-mono">{currentBgColor}</span>
          </div>
        </div> */}

        {/* Voting Table */}
        <VotingTable
          candidate={candidate}
          votingCompleted={votingCompleted}
          isProcessing={isProcessing}
          handleVote={handleLocalVote} // Use local function that plays beep
          t={t}
          getCandidateName={getCandidateName}
          currentBgColor={currentBgColor}
          position={4}
          showOnlyOne={true}
        />

        {/* Navigation */}
        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={() => navigate("/c3")}
            className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg shadow transition-all"
          >
            ← Back to Candidate 3
          </button>

          {/* <div className="text-center">
            {localVoteDone ? (
              <div className="flex items-center gap-2 text-green-600 font-bold">
                <span>✓ Vote Recorded!</span>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-600"></div>
                <span>Redirecting to NOTA...</span>
              </div>
            ) : (
              <button
                onClick={handleVote}
                disabled={votingCompleted || isProcessing}
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold rounded-lg shadow-lg hover:from-red-700 hover:to-pink-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? t.processing : `Vote for ${candidate.code}`}
              </button>
            )}
          </div> */}

          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow transition-all"
          >
            Back to Home
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="mt-4 bg-white/80 backdrop-blur-sm rounded-lg p-3 border">
          <div className="flex justify-between text-sm mb-1">
            <span>Voting Progress</span>
            <span>4 of 5</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-red-600 h-2.5 rounded-full transition-all duration-500"
              style={{ width: "80%" }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Next: NOTA (None of the Above)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Candidate4Page;
