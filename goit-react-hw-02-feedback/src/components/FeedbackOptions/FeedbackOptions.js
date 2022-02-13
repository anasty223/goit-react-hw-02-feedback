import s from "./FeedbackOptions.module.css";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul>
      {options.map((option) => (
        <button
          type="button"
          key={option}
          onClick={onLeaveFeedback}
          className={s.button}
        >
          {option}
        </button>
      ))}
    </ul>
  );
}
export default FeedbackOptions;
