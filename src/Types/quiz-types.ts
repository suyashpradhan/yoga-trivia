export type Quiz = {
  quizDetails: QuizDetails;
};

export type QuizDetails = {
  name: string;
  noOfQuestions: number;
  difficulty: string;
  totalTimeInsSeconds: number;
  totalPoints: number;
  questions: Questions[];
};

export type Questions = {
  id: string;
  question: string;
  correctAnswerPoints: number;
  negativePoints: number;
  timeInSeconds: number;
  options: Options[];
};

export type Options = {
  optionOne: string;
  isRight: boolean;
};
