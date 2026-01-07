import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const HomePage = ({
  votes,
  setVotes,
  language,
  handleLanguageChange,
  testBeepSound,
  t,
}) => {
  const voteDigits = votes.toString().padStart(8, "0").split("");

  return (
    <div className="min-h-screen bg-neutral-100 text-slate-900">
      <Header
        title={t.title}
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
        {/* Start Voting Button */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">
            Start Voting Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-300">
              <h3 className="text-xl font-bold text-green-700 mb-3">
                Voting Flow
              </h3>
              <ol className="text-left space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center">
                    1
                  </span>
                  <span>Candidate 1 (Position 1)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center">
                    2
                  </span>
                  <span>Candidate 2 (Position 2)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center">
                    3
                  </span>
                  <span>Candidate 3 (Position 3)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center">
                    4
                  </span>
                  <span>Candidate 4 (Position 4)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center">
                    5
                  </span>
                  <span>NOTA (Position 16)</span>
                </li>
              </ol>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-300">
              <h3 className="text-xl font-bold text-blue-700 mb-3">
                Instructions
              </h3>
              <ul className="text-left space-y-2">
                <li>• Each candidate has separate page</li>
                <li>• Table background color changes for each candidate</li>
                <li>• Only one candidate visible at a time</li>
                <li>• Click "Press Button" to vote</li>
                <li>• You will hear beep sound on vote</li>
                <li>• Vote count will increase by 1</li>
                <li>• Navigation buttons guide you through process</li>
              </ul>
            </div>
          </div>

          <Link
            to="/c1"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-bold rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 animate-pulse"
          >
            🗳️ Start Voting Process
          </Link>

          <p className="mt-4 text-gray-600">
            Click above to begin with Candidate 1
          </p>
        </div>

        {/* Candidate Preview */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-6">
            Candidate Preview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Link to="/c1" className="block">
              <div className="bg-white p-4 rounded-xl shadow border-2 border-blue-300 hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-white rounded-full flex items-center justify-center text-2xl font-bold">
                  अ
                </div>
                <h4 className="font-bold">Candidate 1</h4>
                <p className="text-sm text-gray-600">Position 1</p>
              </div>
            </Link>
            <Link to="/c2" className="block">
              <div className="bg-white p-4 rounded-xl shadow border-2 border-purple-300 hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-purple-100 rounded-full flex items-center justify-center text-2xl font-bold">
                  ब
                </div>
                <h4 className="font-bold">Candidate 2</h4>
                <p className="text-sm text-gray-600">Position 2</p>
              </div>
            </Link>
            <Link to="/c3" className="block">
              <div className="bg-white p-4 rounded-xl shadow border-2 border-yellow-300 hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-yellow-100 rounded-full flex items-center justify-center text-2xl font-bold">
                  क
                </div>
                <h4 className="font-bold">Candidate 3</h4>
                <p className="text-sm text-gray-600">Position 3</p>
              </div>
            </Link>
            <Link to="/c4" className="block">
              <div className="bg-white p-4 rounded-xl shadow border-2 border-red-300 hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-red-100 rounded-full flex items-center justify-center text-2xl font-bold">
                  ड
                </div>
                <h4 className="font-bold">Candidate 4</h4>
                <p className="text-sm text-gray-600">Position 4</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
