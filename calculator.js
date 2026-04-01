import { add, subtract, multiply, divide } from "./utils/operations.js";
import { parseNumbers, isValidOperation } from "./utils/parser.js";
import _ from "lodash";

const operation = process.argv[2];
const rawNumbers = process.argv.slice(3);

if (!isValidOperation(operation)) {
	console.log("Invalid operation. Use: add, subtract, multiply, or divide");
	process.exit(0);
}

const numbers = parseNumbers(rawNumbers);

if (_.isEmpty(numbers) || numbers.length !== rawNumbers.length) {
	console.log("Please provide valid numeric inputs.");
	process.exit(0);
}

let result;

switch (operation) {
	case "add":
		result = add(numbers);
		break;
	case "subtract":
		result = subtract(numbers);
		break;
	case "multiply":
		result = multiply(numbers);
		break;
	case "divide":
		result = divide(numbers);
		break;
	default:
		console.log("Invalid operation. Use: add, subtract, multiply, or divide");
		process.exit(0);
}

console.log(`Result: ${result}`);

