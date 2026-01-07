import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const CandidateDetail = () => {
  const { candidateId } = useParams();

  // Fetch candidate data based on candidateId
  const candidate = candidates.find((c) => c.id === parseInt(candidateId));

  return (
    <div className="min-h-screen bg-neutral-100 text-slate-900">
      <Header />

      <div className="max-w-2xl mx-auto px-3 md:px-8 py-8">
        {/* Show only this candidate with enhanced details */}
        <div className="bg-white rounded-2xl border-2 border-[#cccccc] p-8">
          <h2 className="text-2xl font-bold mb-4">Candidate Details</h2>
          {/* Display candidate-specific details here */}
        </div>
      </div>

      <Footer />
    </div>
  );
};
