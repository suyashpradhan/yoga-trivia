import { OptionPropType } from "../../context/TriviaContext/trivia.types";
import { useState } from "react";

export const Option = (props: OptionPropType): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);

  const selectOptionOnClick = (): void => {
    props.callback(props.option._id, props.option.isCorrect);
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  };

  return (
    <div
      onClick={selectOptionOnClick}
      className={
        loading
          ? props.option.isCorrect
            ? "bg-brand-dark border border-brand-dark text-white text-xl leading-normal tracking-tight font-headline font-medium rounded-md cursor-pointer mb-4 p-6"
            : "bg-brand-danger border border-brand-danger text-white text-xl leading-normal tracking-tight font-headline font-medium rounded-md cursor-pointer mb-4 p-6"
          : "border border-gray-300 p-6 text-xl leading-normal tracking-tight font-headline font-medium rounded-md cursor-pointer mb-4"
      }
    >
      {props.option.option}
    </div>
  );
};
