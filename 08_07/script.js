/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 *
 * List of ISO language codes:
 * @link http://www.lingoes.net/en/translator/langcode.htm
 */

const formatter = (symbol) => {
  return symbol;
};

const tipCalculator = (sum, percentage, currency) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  console.log(`
      Sum before tip: ${formatter(currency)}${sum}
      Tip percentage: ${percentage}%
      Tip:            ${tip.toFixed(2)}
      Total:          ${formatter(currency)}${total.toFixed(2)}
    `);
};

tipCalculator(29.95, 18, "USD");
