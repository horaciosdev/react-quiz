import "../styles/Question.css";

export default function Question(props: any) {
  const { question, selectOption } = props;
  return (
    <>
      <div className="question-container">
        <h1 className="question">{question.text}</h1>
      </div>
      <div>
        {question.options.map((option: any) => (
          <div
            key={option.id}
            className="option"
            onClick={() => selectOption(option.isCorrect)}
          >
            <p className="option-label">{option.label}</p>
            <div className="option-value">
              <p>{option.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
