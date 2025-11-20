function CorrectedText({ text, corrections }) {
  if (!text) return <p>Start typing above...</p>;

  let correctedCount = 0;

  // Split → Correct → Join
  const correctedWords = text.split(" ").map((word) => {
    if (corrections[word]) {
      correctedCount++;
      return corrections[word];
    }
    return word;
  });

  const correctedSentence = correctedWords.join(" ");

  return (
    <div>
      <p style={{ fontSize: "18px" }}>{correctedSentence}</p>
      <p><b>Corrected Words:</b> {correctedCount}</p>
    </div>
  );
}

export default CorrectedText;
