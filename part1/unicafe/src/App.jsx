import { useState } from "react";
import "./App.css";

const Statistics = ({ text, value }) => {
  return (
    <div>
      <strong>{text}</strong>
      <span> {value}</span>
    </div>
  );
};

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

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
        <Button text="Good" handleClick={() => handleFeedbackCount("good")} />
        <Button
          text="Neutral"
          handleClick={() => handleFeedbackCount("neutral")}
        />
        <Button text="Bad" handleClick={() => handleFeedbackCount("bad")} />
      </div>
      <h2>Statistics</h2>
      {totalFeedbackCount > 0 ? (
        <article>
          <Statistics text="Good" value={good} />
          <Statistics text="Neutral" value={neutral} />
          <Statistics text="bad" value={bad} />
          <Statistics text="Total" value={totalFeedbackCount} />
          <Statistics text="Average" value={averageFeedbackCount} />
          <Statistics
            text="Positive Feedback"
            value={`${percentageOfGoodFeed || 0}%`}
          />
        </article>
      ) : (
        <span>No feedback given</span>
      )}
    </>
  );
}

export default App;
