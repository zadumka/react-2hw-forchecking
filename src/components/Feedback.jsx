const Feedback = ({ good, neutral, bad, totalFeedback, postiveFeedback }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>postiveFeedback: {postiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
