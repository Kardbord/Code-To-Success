// only one default export per file
export default function () {
    return '<div>Logo</div>';
}

// but you can have many named exports
export function multiply(numOne, numTwo) {
    return numOne * numTwo;
}

export const greeting = 'Hi there';