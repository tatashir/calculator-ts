function calculate(num1: number, num2: number, operator: string): number {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            throw new Error("Invalid operator");
    }
}

function main() {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Enter the first number: ", (num1) => {
        rl.question("Enter the second number: ", (num2) => {
            rl.question("Enter the operator (+, -, *, /): ", (operator) => {
                try {
                    const result = calculate(Number(num1), Number(num2), operator);
                    console.log(`Result: ${result}`);
                } catch (error) {
                    console.error(error.message);
                } finally {
                    rl.close();
                }
            });
        });
    });
}

main();