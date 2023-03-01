import { useNavigate } from "react-router-dom";
import "../styles/Card.css";

export default function Card({ quiz }: any) {
  const navigate = useNavigate();

  const navigateToQuiz = () => {
    navigate(`quiz/${quiz.id}`);
  };
  return (
    <div className="card" onClick={() => navigateToQuiz()}>
      <img src={quiz.img} alt={`${quiz.name} quiz`} />
      <div className="card-text">
        <h2>{quiz.name}</h2>
        <p>{quiz.questions.length} questões</p>
      </div>
    </div>
  );
}
