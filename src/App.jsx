import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/Homepage";
import Candidate1Page from "./pages/Candidate1Page";
import Candidate2Page from "./pages/Candidate2Page";
import Candidate3Page from "./pages/Candidate3Page";
import Candidate4Page from "./pages/Candidate4Page";
import NotaPage from "./pages/NotaPage";
import {
  ajikysane,
  audiobeep,
  audiolast,
  dipalikulkarni,
  kamalsign,
  shyambadode,
  supriyakhode,
} from "./assets";
// Your MPEG file

// Language translations
const translations = {
  en: {
    title: "Municipal Corporation Dummy Voting Machine",
    demoInstruction:
      "For demo voting press the blue button in front candidate name and symbol",
    votingMachine: "Municipal Corporation Dummy Voting Machine",
    candidateList:
      "Candidate List: A - Adv.Shyam Dharmraj Badode, B - Khode Supriya Sunil, C - Kulkarni Deepali Sachin (BJP), D - Sane Ajinkya Vijay (BJP)",
    voteThem: "Vote them in by a huge margin by clicking the button!",
    pollingDate: "Polling Date",
    pollingDateValue: "- Thursday, 2026-01-15 From 7 AM to 6 PM",
    division: "Division No.",
    divisionValue: "- 30",
    tableHeaders: ["SrNo", "Candidate Name", "Photo", "Symbol", "Button"],
    pressButton: "Press Button",
    share: "Share",
    currentStep: "Currently voting for candidate",
    finalStep: "Final step:",
    nota: "NOTA",
    votingCompleted: "Voting Completed Successfully!",
    thankYou:
      "Thank you for participating in the Municipal Corporation Dummy Election",
    totalVotes: "Total Votes Recorded:",
    resetButton: "Reset & Vote Again",
    replayMessage: "🔊 Play Sound",
    instructions: "Instructions:",
    instruction1:
      "• Click the 'Press Button' to vote for each candidate one by one",
    instruction2: "• You will hear a confirmation beep after each vote",
    instruction3: "• After voting for all candidates, you can vote for NOTA",
    instruction4: "• When completed, you will hear completion sound",
    instruction5:
      "• Use the 'Reset & Vote Again' button to restart the voting process",
    footer: "Appdroid Tech Solutions 8788343984",
    testSound: "Test Sound 🔊",
    processing: "Processing...",
    voteSummary: "Voting Summary",
    currentStatus: "Current Voting Status",
    nextToVote: "Next to vote:",
    clickToVote:
      "Click the 'Press Button' in front of candidate to cast your vote",
    finalStepDesc:
      "Click the button to select NOTA if you don't want to vote for any candidate",
    completedMessage:
      "✅ Your vote has been successfully submitted. Thank you!",
  },
  hi: {
    title: "महानगर पालिका डमी वोटिंग मशीन",
    demoInstruction:
      "डेमो मतदान के लिए उम्मीदवार के नाम और चिन्ह के सामने नीले बटन को दबाएं",
    votingMachine: "महानगर पालिका डमी वोटिंग मशीन",
    candidateList:
      "उम्मीदवार सूची: अ - अ‍ॅड.श्याम धर्मराज बडोदे, ब - खोडे सुप्रिया सुनील, क - कुलकर्णी दीपाली सचिन (भाजपा), ड - साने अजिंक्य विजय (भाजपा)",
    voteThem:
      "उनके नाम और चिन्ह के सामने बटन दबाकर उन्हें भारी मतों से जिताएं!",
    pollingDate: "मतदान तिथि",
    pollingDateValue: "- गुरुवार, 2026-01-15 सुबह ७ बजे से शाम ६ बजे तक",
    division: "प्रभाग क्र.",
    divisionValue: "- ३०",
    tableHeaders: ["अ. क्र.", "उम्मीदवार का नाम", "छवि", "चिन्ह", "बटन"],
    pressButton: "बटन दबाएँ",
    share: "शेयर करें",
    currentStep: "वर्तमान में मतदान कर रहे हैं",
    finalStep: "अंतिम चरण:",
    nota: "नोटा",
    votingCompleted: "मतदान सफलतापूर्वक पूर्ण हुआ!",
    thankYou: "महानगर पालिका डमी चुनाव में भाग लेने के लिए धन्यवाद",
    totalVotes: "कुल मत दर्ज किए गए:",
    resetButton: "रीसेट करें और फिर से मतदान करें",
    replayMessage: "🔊 ध्वनि चलाएं",
    instructions: "निर्देश:",
    instruction1:
      "• प्रत्येक उम्मीदवार के लिए मतदान करने के लिए 'बटन दबाएँ' पर क्लिक करें",
    instruction2: "• प्रत्येक मतदान के बाद आप एक पुष्टि बीप सुनेंगे",
    instruction3:
      "• सभी उम्मीदवारों के लिए मतदान करने के बाद, आप नोटा के लिए मतदान कर सकते हैं",
    instruction4: "• पूरा होने पर, आप पूरा होने की ध्वनि सुनेंगे",
    instruction5:
      "• मतदान प्रक्रिया को फिर से शुरू करने के लिए 'रीसेट करें और फिर से मतदान करें' बटन का उपयोग करें",
    footer: "Appdroid Tech Solutions 8788343984",
    testSound: "ध्वनि परीक्षण 🔊",
    processing: "प्रसंस्करण...",
    voteSummary: "मतदान सारांश",
    currentStatus: "वर्तमान मतदान स्थिति",
    nextToVote: "अगले मतदान के लिए:",
    clickToVote:
      "मतदान करने के लिए उम्मीदवार के सामने 'बटन दबाएँ' पर क्लिक करें",
    finalStepDesc:
      "यदि आप किसी उम्मीदवार को मत नहीं देना चाहते हैं तो नोटा चुनने के लिए बटन दबाएं",
    completedMessage: "✅ आपका वोट सफलतापूर्वक दर्ज किया गया है। धन्यवाद!",
  },
  mr: {
    title: "महानगर पालिका डमी मतदान मशीन",
    demoInstruction:
      "डेमो मतदानासाठी उमेदवाराच्या नाव आणि चिन्हासमोरील निळ्या बटणावर क्लिक करा",
    votingMachine: "महानगर पालिका डमी मतदान मशीन",
    candidateList:
      "उमेदवार यादी: अ - अ‍ॅड.श्याम धर्मराज बडोदे, ब - खोडे सुप्रिया सुनील, क - कुलकर्णी दीपाली सचिन (भाजपा), ड - साने अजिंक्य विजय (भाजपा)",
    voteThem:
      "त्यांचे नाव आणि चिन्हासमोरील बटणावर क्लिक करून त्यांना प्रचंड मतांनी विजयी करा!",
    pollingDate: "मतदान दिनांक",
    pollingDateValue:
      "- गुरुवार, 2026-01-15 रोजी सकाळी ७ ते सायंकाळी ६ वाजेपर्यत",
    division: "प्रभाग क्र.",
    divisionValue: "- ३०",
    tableHeaders: ["क्रमांक", "उमेदवाराचे नाव", "छायाचित्र", "चिन्ह", "बटण"],
    pressButton: "बटण दाबा",
    share: "शेअर करा",
    currentStep: "सध्या मतदान करीत आहेत",
    finalStep: "अंतिम चरण:",
    nota: "नोटा",
    votingCompleted: "मतदान यशस्वीरित्या पूर्ण झाले!",
    thankYou: "महानगर पालिका डमी निवडणुकीत सहभागी झाल्याबद्दल धन्यवाद",
    totalVotes: "एकूण मते नोंदविली:",
    resetButton: "रीसेट करा आणि पुन्हा मतदान करा",
    replayMessage: "🔊 ध्वनी चालवा",
    instructions: "सूचना:",
    instruction1: "• प्रत्येक उमेदवाराला मत देण्यासाठी 'बटण दाबा' वर क्लिक करा",
    instruction2: "• प्रत्येक मतदानानंतर आपण एक पुष्टीकरण बीप ऐकू शकाल",
    instruction3: "• सर्व उमेदवारांना मत दिल्यानंतर, आपण नोटा साठी मत देऊ शकता",
    instruction4: "• पूर्ण झाल्यावर, आपण पूर्ण होण्याचा आवाज ऐकू शकाल",
    instruction5:
      "• मतदान प्रक्रिया पुन्हा सुरू करण्यासाठी 'रीसेट करा आणि पुन्हा मतदान करा' बटण वापरा",
    footer: "Appdroid Tech Solutions 8788343984",
    testSound: "ध्वनी चाचणी 🔊",
    processing: "प्रक्रिया करीत आहे...",
    voteSummary: "मतदान सारांश",
    currentStatus: "वर्तमान मतदान स्थिती",
    nextToVote: "पुढील मतदानासाठी:",
    clickToVote: "मत देण्यासाठी उमेदवारासमोर 'बटण दाबा' वर क्लिक करा",
    finalStepDesc:
      "जर तुम्हाला कोणत्याही उमेदवाराला मत द्यायचे नसेल तर नोटा निवडण्यासाठी बटण दाबा",
    completedMessage: "✅ तुमचे मत यशस्वीरित्या नोंदवले गेले आहे. धन्यवाद!",
  },
};

function App() {
  const [votes, setVotes] = useState(2544);
  const [votedCandidates, setVotedCandidates] = useState([]);
  const [votingCompleted, setVotingCompleted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [language, setLanguage] = useState("mr");

  // Audio refs
  const beepAudioRef = useRef(null);
  const successAudioRef = useRef(null);
  const endAudioRef = useRef(null);
  const candidate4AudioRef = useRef(null); // New audio for candidate 4

  // Initialize audio on component mount
  useEffect(() => {
    // Initialize audio elements
    beepAudioRef.current = new Audio(audiobeep);
    successAudioRef.current = new Audio(audiobeep);
    endAudioRef.current = new Audio(audiobeep);
    candidate4AudioRef.current = new Audio(audiolast); // You can use audiolast for candidate 4
    // Set audio properties
    beepAudioRef.current.volume = 0.7;
    successAudioRef.current.volume = 0.7;
    endAudioRef.current.volume = 0.7;
    candidate4AudioRef.current.volume = 0.7;

    // Preload audio
    beepAudioRef.current.preload = "auto";
    successAudioRef.current.preload = "auto";
    endAudioRef.current.preload = "auto";
    candidate4AudioRef.current.preload = "auto";

    // For browsers that require user interaction, we'll load audio on first interaction
    const handleFirstInteraction = () => {
      beepAudioRef.current.load();
      successAudioRef.current.load();
      endAudioRef.current.load();
      candidate4AudioRef.current.load();

      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };

    document.addEventListener("click", handleFirstInteraction);
    document.addEventListener("keydown", handleFirstInteraction);
    document.addEventListener("touchstart", handleFirstInteraction);

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, []);

  // Current language translations
  const t = translations[language];

  // Candidate data
  const candidates = [
    {
      id: 1,
      srNo: 1,
      name: "अ‍ॅड.श्याम धर्मराज बडोदे",
      nameHindi: "अ‍ॅड.श्याम धर्मराज बडोदे",
      nameMarathi: "अ‍ॅड.श्याम धर्मराज बडोदे",
      nameEnglish: "Adv.Shyam Dharmraj Badode",
      party: "Independent",
      photo: shyambadode,
      symbol: kamalsign,
      symbolText: "Lotus",
      code: "अ",
      bgColor: "#ffffff",
    },
    {
      id: 2,
      srNo: 2,
      name: "खोडे सुप्रिया सुनील",
      nameHindi: "खोडे सुप्रिया सुनील",
      nameMarathi: "खोडे सुप्रिया सुनील",
      nameEnglish: "Khode Supriya Sunil",
      party: "Independent",
      photo: supriyakhode,
      symbol: kamalsign,
      symbolText: "Lotus",
      code: "ब",
      bgColor: "#c777b0",
    },
    {
      id: 3,
      srNo: 3,
      name: "कुलकर्णी दीपाली सचिन",
      nameHindi: "कुलकर्णी दीपाली सचिन",
      nameMarathi: "कुलकर्णी दीपाली सचिन",
      nameEnglish: "Kulkarni Deepali Sachin",
      party: "भाजपा पुरस्कृत",
      photo: dipalikulkarni,
      symbol: kamalsign,
      symbolText: "Lotus",
      code: "क",
      bgColor: "#f0e47f",
    },
    {
      id: 4,
      srNo: 4,
      name: "साने अजिंक्य विजय",
      nameHindi: "साने अजिंक्य विजय",
      nameMarathi: "साने अजिंक्य विजय",
      nameEnglish: "Sane Ajinkya Vijay",
      party: "भाजपा पुरस्कृत",
      photo: ajikysane,
      symbol: kamalsign,
      symbolText: "Lotus",
      code: "ड",
      bgColor: "#7384d1",
    },
  ];

  // NOTA candidate
  const notaCandidate = {
    id: 16,
    srNo: 16,
    name: "NOTA",
    nameHindi: "नोटा",
    nameMarathi: "नोटा",
    nameEnglish: "NOTA",
    party: "None of the Above",
    photo: "",
    symbol: "",
    symbolText: "",
    code: "N",
    bgColor: "#ffffff",
  };

  // Get candidate name based on language
  const getCandidateName = (candidate) => {
    if (!candidate) return "";
    if (language === "en") return candidate.nameEnglish || candidate.name;
    if (language === "hi") return candidate.nameHindi || candidate.name;
    if (language === "mr") return candidate.nameMarathi || candidate.name;
    return candidate.name;
  };
  console.log("ss");
  // Play beep sound from your MPEG file
  const playBeepSound = () => {
    if (beepAudioRef.current) {
      try {
        beepAudioRef.current.currentTime = 0; // Reset to start
        beepAudioRef.current.play().catch((e) => {
          console.log("Beep audio failed to play:", e);
          // You can add a fallback here if needed
        });
      } catch (error) {
        console.error("Error playing beep sound:", error);
      }
    } else {
      console.warn("Beep audio ref is not initialized");
    }
  };
  // Play special sound for candidate 4
  const playCandidate4Sound = () => {
    if (candidate4AudioRef.current) {
      try {
        candidate4AudioRef.current.currentTime = 0;
        candidate4AudioRef.current.play().catch((e) => {
          console.log("Candidate 4 audio failed to play:", e);
          // Fallback to regular beep
          // playBeepSound();
        });
      } catch (error) {
        console.error("Error playing candidate 4 sound:", error);
        // playBeepSound();
      }
    } else {
      // playBeepSound();
    }
  };
  // Play success sound
  const playSuccessSound = () => {
    if (successAudioRef.current) {
      successAudioRef.current.currentTime = 0;
      successAudioRef.current
        .play()
        .catch((e) => console.log("Success audio failed:", e));
    }
  };

  // Play end voting sound
  const playEndVotingSound = () => {
    if (endAudioRef.current) {
      endAudioRef.current.currentTime = 0;
      endAudioRef.current
        .play()
        .catch((e) => console.log("End audio failed:", e));
    }
  };

  // Generate beep using Web Audio API (fallback)
  const playGeneratedBeep = () => {
    try {
      const audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = 800; // Frequency in Hz
      oscillator.type = "sine"; // Type of wave

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + 0.1
      );

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (error) {
      console.error("Web Audio API not supported:", error);
    }
  };

  // Handle vote for candidate - UPDATED TO PLAY BEEP
  const handleVote = (candidate) => {
    if (votingCompleted) return;

    // Play appropriate sound based on candidate
    console.log("Voting for candidate:", candidate.srNo); // Debug log

    if (candidate.srNo === 4) {
      console.log("Playing special audio for candidate 4");
      playCandidate4Sound(); // Special sound for candidate 4
    } else {
      console.log("Playing regular beep for candidate", candidate.srNo);
      playBeepSound(); // Regular beep for other candidates
    }

    setIsProcessing(true);

    // Add to voted candidates
    setVotedCandidates((prev) => [...prev, candidate]);

    // Increment votes counter
    setVotes((prev) => prev + 1);

    // If it's NOTA, mark voting as completed
    if (candidate.srNo === 16) {
      setVotingCompleted(true);
      // Play success sounds for NOTA
      setTimeout(() => {
        playSuccessSound();
        setTimeout(() => playEndVotingSound(), 1000);
      }, 300);
    }

    setTimeout(() => {
      setIsProcessing(false);
    }, 500);
  };

  // Handle language change
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };
  const testBeepSound = () => {
    playBeepSound();
  };
  return (
    <Router>
      {/* Audio elements are now managed by refs, no need for separate audio tags */}

      <Routes>
        <Route
          path="/"
          element={
            <Candidate1Page
              votes={votes}
              setVotes={setVotes}
              language={language}
              handleLanguageChange={handleLanguageChange}
              testBeepSound={playBeepSound}
              t={t}
              getCandidateName={getCandidateName}
              handleVote={handleVote}
              votingCompleted={votingCompleted}
              isProcessing={isProcessing}
              candidate={candidates[0]}
              playBeepSound={playBeepSound} // Pass beep function to page
            />
          }
        />

        <Route
          path="/c1"
          element={
            <Candidate1Page
              votes={votes}
              setVotes={setVotes}
              language={language}
              handleLanguageChange={handleLanguageChange}
              testBeepSound={playBeepSound}
              t={t}
              getCandidateName={getCandidateName}
              handleVote={handleVote}
              votingCompleted={votingCompleted}
              isProcessing={isProcessing}
              candidate={candidates[0]}
              playBeepSound={playBeepSound} // Pass beep function to page
            />
          }
        />

        <Route
          path="/c2"
          element={
            <Candidate2Page
              votes={votes}
              setVotes={setVotes}
              language={language}
              handleLanguageChange={handleLanguageChange}
              testBeepSound={playBeepSound}
              t={t}
              getCandidateName={getCandidateName}
              handleVote={handleVote}
              votingCompleted={votingCompleted}
              isProcessing={isProcessing}
              candidate={candidates[1]}
              playBeepSound={playBeepSound} // Pass beep function to page
            />
          }
        />

        <Route
          path="/c3"
          element={
            <Candidate3Page
              votes={votes}
              setVotes={setVotes}
              language={language}
              handleLanguageChange={handleLanguageChange}
              testBeepSound={playBeepSound}
              t={t}
              getCandidateName={getCandidateName}
              handleVote={handleVote}
              votingCompleted={votingCompleted}
              isProcessing={isProcessing}
              candidate={candidates[2]}
              playBeepSound={playBeepSound} // Pass beep function to page
            />
          }
        />

        <Route
          path="/c4"
          element={
            <Candidate4Page
              votes={votes}
              setVotes={setVotes}
              language={language}
              handleLanguageChange={handleLanguageChange}
              testBeepSound={playBeepSound}
              t={t}
              getCandidateName={getCandidateName}
              handleVote={handleVote}
              votingCompleted={votingCompleted}
              isProcessing={isProcessing}
              candidate={candidates[3]}
              playBeepSound={playBeepSound} // Pass beep function to page
              playCandidate4Sound={playCandidate4Sound} // Pass special sound
            />
          }
        />

        <Route
          path="/nota"
          element={
            <NotaPage
              votes={votes}
              setVotes={setVotes}
              language={language}
              handleLanguageChange={handleLanguageChange}
              testBeepSound={playBeepSound}
              t={t}
              getCandidateName={getCandidateName}
              handleVote={handleVote}
              votingCompleted={votingCompleted}
              isProcessing={isProcessing}
              notaCandidate={notaCandidate}
              playSuccessSound={playSuccessSound}
              playEndVotingSound={playEndVotingSound}
              playBeepSound={playBeepSound} // Pass beep function to page
              playCandidate4Sound={playCandidate4Sound} // Pass special sound
            />
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
