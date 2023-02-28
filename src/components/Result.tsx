import { Link } from "react-router-dom";

import "../styles/Result.css";

export default function Result(props: any) {
  const { quizQuestionLength, numberOfCorrectAnswers } = props;
  return (
    <div className="results">
      <p>Your Results</p>
      <h1>
        {numberOfCorrectAnswers}/{quizQuestionLength}
      </h1>
      <Link to="/">Go Back</Link>
    </div>
  );
}
