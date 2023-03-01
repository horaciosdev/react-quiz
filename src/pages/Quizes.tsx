import { InputHTMLAttributes, useEffect, useState } from "react";
import Card from "../components/Card";
import quizesdata from "../data/quizes.json";
import "../styles/Quizes.css";

export default function Quizes() {
  const [quizes, setQuizes] = useState(quizesdata);
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    const newSearch = e.currentTarget.value;
    setSearch(newSearch);
  };

  useEffect(() => {
    const newQuizes = quizesdata.filter((quiz) =>
      quiz.name.toLocaleLowerCase().includes(search)
    );
    setQuizes(newQuizes);
  }, [search]);

  return (
    <div className="quizes-container">
      <header>
        <h1>DevQuizes</h1>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => handleSearch(e)}
        />
      </header>
      <div className="options-container">
        {quizes.map((quiz) => (
          <Card key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
}
