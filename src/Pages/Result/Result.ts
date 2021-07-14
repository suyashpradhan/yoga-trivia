import { Question } from "../../context/TriviaContext/trivia.types";

export type QuestionReviewBoxType = {
  question: Question;
  index: number;
};

export const QuestionReviewBox = ({
  question,
  index,
}: QuestionReviewBoxType): any => {
  return (
    <div key={question._id} className="quiz__result__review-body">
      <div className="quiz__result__review-question">
        <span className="quiz__result__review-question-q">Q.{index + 1}</span>
        {question.text}
      </div>
      <div className="quiz__result__review-options">
        {question.optionList.map((option) => {
          return <div key={option._id}>{option.text}</div>;
        })}
      </div>
    </div>
  );
};
