import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  // Calculate total feedback
  const totalFeedback = good + neutral + bad;

  // Check if feedback has been provided
  const hasFeedback = totalFeedback > 0;

  // If no feedback, display a message indicating no data
  if (!hasFeedback) {
    return <p>No feedback given yet.</p>;
  }

  // If there is feedback, calculate and display statistics
  const averageFeedback = (good - bad) / totalFeedback || 0;
  const positivePercentage = (good / totalFeedback) * 100 || 0;

  return (
    <div>
      <h2>Statistics:</h2>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Total" value={totalFeedback} />
          <StatisticLine text="Average" value={averageFeedback} />
          <StatisticLine text="Positive Percentage" value={`${positivePercentage.toFixed(2)}%`} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Unicafe give Feedback</h1>
      <div>
        <Button onClick={handleGoodClick} text="Good" />
        <Button onClick={handleNeutralClick} text="Neutral" />
        <Button onClick={handleBadClick} text="Bad" />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App