function removeMultiplesAndReturnList(inputList) {
    // Check if the length of the list is a multiple of 10
    if (inputList.length % 10 !== 0) {
        throw new Error("List length must be a multiple of 10.");
    }

    // Remove items at positions which are a multiple of 2 or 3
    const filteredList = inputList.filter((_, index) => (index + 1) % 2 !== 0 && (index + 1) % 3 !== 0);

    return filteredList;
}

// Test cases
const testCases = [
    {
        input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        expectedOutput: [1, 5, 7]
    },
    {
        input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        expectedOutput: [1, 5, 7, 11, 13, 17, 19]
    },
    {
        input: [10, 20, 30, 40, 50, 60, 70, 80, 90],
        expectedOutput: [10, 40, 50, 70, 80, 100]
    }
    // Add more test cases as needed
];

function runTests() {
    testCases.forEach((testCase, index) => {
        console.log(`Running Test Case ${index + 1}`);
        try {
            const output = removeMultiplesAndReturnList(testCase.input);
            const expectedOutput = testCase.expectedOutput;

            if (arraysEqual(output, expectedOutput)) {
                console.log("Test Passed! Got the expected output");
            } else {
                console.log(`Test Failed! Expected ${expectedOutput}, but got ${output}`);
            }
        } catch (error) {
            console.log(`Test Failed! Error: ${error.message}`);
        }
        console.log("-----------------------");
    });
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

// Run tests
runTests();

module.exports = {
    removeMultiplesAndReturnList
};
