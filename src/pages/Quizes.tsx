import Card from "../components/Card";
import quizesdata from "../data/quizes.json";
import "../styles/Quizes.css";

export default function Quizes() {
  return (
    <>
      <div className="quizes-container">
        <header>
          <h1>Quizes</h1>
          <input type="text" placeholder="Search..." />
        </header>
        <div className="options-container">
          {quizesdata.map((quiz) => (
            <Card key={quiz.id} quiz={quiz} />
          ))}
        </div>
      </div>
    </>
  );
}
