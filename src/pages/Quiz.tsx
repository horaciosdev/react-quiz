import quizes from "../data/quizes.json";
import { useParams } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import { useEffect, useState } from "react";
import Question from "../components/Question";
import Result from "../components/Result";

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const [questionStatus, setQuestionStatus] = useState("0");
  const [barPercentage, setBarPercentage] = useState(0);

  const { id } = useParams();
  const quiz = quizes.find((quiz) => quiz.id == Number(id));

  const onOptionSelected = (isCorrect: boolean) => {
    if (isCorrect) {
      setNumberOfCorrectAnswers(numberOfCorrectAnswers + 1);
    }

    if (quiz!.questions.length - 1 === currentQuestionIndex) {
      setShowResults(true);
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  useEffect(() => {
    setQuestionStatus(`${currentQuestionIndex} / ${quiz!.questions.length}`);
    setBarPercentage((currentQuestionIndex / quiz!.questions.length) * 100);
  }, [currentQuestionIndex]);

  return (
    <>
      {quiz && (
        <div>
          <QuizHeader
            questionStatus={questionStatus}
            barPercentage={barPercentage}
          />
          <div>
            {!showResults ? (
              <Question
                question={quiz.questions[currentQuestionIndex]}
                selectOption={onOptionSelected}
              />
            ) : (
              <Result
                quizQuestionLength={quiz.questions.length}
                numberOfCorrectAnswers={numberOfCorrectAnswers}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
