import React from "react";
import "./Question.css";
import AnswerQuestion from "./AnswerQuestion";
import QuestionDetail from "./QuestionDetail";

const Question = () => {
  return (
    <div>
      <h1>Hello from Question Page</h1>
      <AnswerQuestion />
      <QuestionDetail />
    </div>
  );
};

export default Question;
