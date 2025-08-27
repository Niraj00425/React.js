import React, { useState } from "react";
import Result from "./Result";
import { analyzeSpam } from "../utils/spamLogic";

const SpamChecker = () => {
  const [emailText, setEmailText] = useState("");
  const [result, setResult] = useState(null);

  const handleCheckSpam = () => {
    const analysis = analyzeSpam(emailText);
    setResult(analysis);
  };

  return (
    <div className="checker">
      <textarea
        placeholder="Paste your email text here..."
        value={emailText}
        onChange={(e) => setEmailText(e.target.value)}
      />
      <button onClick={handleCheckSpam}>Check Spam</button>

      {result && <Result data={result} />}
    </div>
  );
};

export default SpamChecker;
