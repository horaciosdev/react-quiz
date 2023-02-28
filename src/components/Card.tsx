import "../styles/Card.css";

export default function Card({ quiz }: any) {
  return (
    <div className="card">
      <img src={quiz.img} alt="" />
      <div className="card-text">
        <h2>{quiz.name}</h2>
        <p>{quiz.questions.length} questions</p>
      </div>
    </div>
  );
}
