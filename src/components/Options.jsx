import css from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback }) => {
  return (
    <>
      <ul className={css.bntWrapper}>
@@ -14,7 +14,11 @@ const Options = ({ updateFeedback, resetFeedback }) => {
          <button onClick={() => updateFeedback("bad")}>Bad</button>
        </li>
        <li>
          <button onClick={() => resetFeedback()}>Reset</button>
        </li>
      </ul>
    </>



// const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
//   return (
//     <div>
//       <button onClick={() => updateFeedback('good')}>Good</button>
//       <button onClick={() => updateFeedback('neutral')}>Neutral</button>
//       <button onClick={() => updateFeedback('bad')}>Bad</button>
//       {totalFeedback > 0 && (
//         <button onClick={() => resetFeedback()}>Reset</button>
//       )}
//     </div>
//   );
// };

// export default Options;
