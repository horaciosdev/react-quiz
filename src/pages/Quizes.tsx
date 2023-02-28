import QuizCard from "../components/QuizCard";
import "./Quizes.css";

export default function Quizes() {
  return (
    <>
      <div className="quizes-container">
        <header>
          <h1>Quizes</h1>
          <input type="text" placeholder="Search..." />
        </header>
        <div className="options-container">
          <QuizCard />
          <QuizCard />
          <QuizCard />
          <QuizCard />
        </div>
      </div>
    </>
  );
}
