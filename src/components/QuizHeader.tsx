import "../styles/QuizHeader.css";
import { MdQuiz } from "react-icons/md";

export default function QuizHeader({ questionStatus, barPercentage }: any) {
  return (
    <header className="quiz-header">
      <h4>
        <MdQuiz /> Question {questionStatus}
      </h4>
      <div className="bar">
        <div
          className="completion"
          style={{ width: `${barPercentage}%` }}
        ></div>
      </div>
    </header>
  );
}
