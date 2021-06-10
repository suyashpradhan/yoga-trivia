import { OptionsProps } from "../../Pages/Analysis/Analysis.types";

export const Options = ({ options }: OptionsProps) => {
  const getOptionStyle = (
    isOptionSelected: Boolean,
    isOptionRight: Boolean
  ): string => {
    if (isOptionRight) {
      return "option-btn option-correct";
    }
    if (isOptionSelected && !isOptionRight) {
      return "option-btn option-wrong";
    }
    return "option-btn option-unselected";
  };
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-5">
      {options.map((option) => {
        return (
          <div className={getOptionStyle(option.isSelected, option.isRight)}>
            {option.text}
          </div>
        );
      })}
    </div>
  );
};
