import { useState } from "react";
import "./App.css";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedbackCount = (type) => {
    if (type === "good") setGood(good + 1);
    if (type === "neutral") setNeutral(neutral + 1);
    if (type === "bad") setBad(bad + 1);
  };

  const totalFeedbackCount = good + bad + neutral;
  const averageFeedbackCount = totalFeedbackCount / 3;
  const percentageOfGoodFeed = (good / totalFeedbackCount) * 100;

  return (
    <>
      <h1>Give Feedback</h1>
      <div>
        <button onClick={() => handleFeedbackCount("good")}>Good</button>
        <button onClick={() => handleFeedbackCount("neutral")}>Neutral</button>
        <button onClick={() => handleFeedbackCount("bad")}>Bad</button>
      </div>
      <article>
        <h2>Statistics</h2>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <p>Total {totalFeedbackCount}</p>
        <p>Average {averageFeedbackCount}</p>
        <p>Postive Feedback {percentageOfGoodFeed || 0}%</p>
      </article>
    </>
  );
}

export default App;
