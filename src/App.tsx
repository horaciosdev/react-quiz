import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Quiz from "./pages/Quiz";
import Quizes from "./pages/Quizes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Quizes />} />
            <Route path="quizez" element={<Quizes />} />
            <Route path="quiz/:id" element={<Quiz />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
