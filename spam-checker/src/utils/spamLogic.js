// Simple keyword-based spam detection logic
export const analyzeSpam = (text) => {
  const spamKeywords = [
    "free",
    "money",
    "win",
    "lottery",
    "click here",
    "offer",
    "urgent",
    "limited time"
  ];

  let score = 0;
  let suggestions = [];

  spamKeywords.forEach((word) => {
    if (text.toLowerCase().includes(word)) {
      score += 15;
      suggestions.push(`Avoid using the word: "${word}"`);
    }
  });

  if (score > 100) score = 100;

  return {
    score,
    message: score > 50 ? "⚠️ This email looks spammy!" : "✅ This email looks safe.",
    suggestions: suggestions.length > 0 ? suggestions : ["No major spam indicators found."]
  };
};
