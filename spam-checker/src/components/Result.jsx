import React from "react";

const Result = ({ data }) => {
  return (
    <div className="result">
      <h3>Spam Score: {data.score}%</h3>
      <p>{data.message}</p>
      <ul>
        {data.suggestions.map((s, idx) => (
          <li key={idx}>{s}</li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
