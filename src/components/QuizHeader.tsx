import "../styles/QuizHeader.css";

export default function QuizHeader({ questionStatus, barPercentage }: any) {
  return (
    <header>
      <h4>Question {questionStatus}</h4>
      <div className="bar">
        <div
          className="completion"
          style={{ width: `${barPercentage}%` }}
        ></div>
      </div>
    </header>
  );
}
