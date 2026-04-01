import _ from "lodash";

export function parseNumbers(input) {
  const numbersOrNull = _.map(input, (str) => {
    const parsed = Number(str);
    return Number.isFinite(parsed) ? parsed : null;
  });

  return _.compact(numbersOrNull);
}

export function isValidOperation(operation) {
  const validOps = ["add", "subtract", "multiply", "divide"];
  return _.includes(validOps, operation);
}