import s from "./Statistic.module.css";
import Notification from "../Notification/Notification";
import PropTypes from "prop-types";
function Statistics({ good, neutral, bad, countTotal, positiveFeedback }) {
  return (
    <>
      {countTotal ? (
        <ul>
          <li className={s.item}>
            <span>
              <b>Good:</b> {good}
            </span>
          </li>
          <li className={s.item}>
            <span>
              <b>Neutral:</b> {neutral}
            </span>
          </li>
          <li className={s.item}>
            <span>
              <b>Bad:</b> {bad}
            </span>
          </li>
          <li className={s.item}>
            <span>
              <b>Total:</b> {countTotal}
            </span>
          </li>
          <li className={s.item}>
            <span>
              <b>Positive feedback:</b> {positiveFeedback}%
            </span>
          </li>
        </ul>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Statistics;
