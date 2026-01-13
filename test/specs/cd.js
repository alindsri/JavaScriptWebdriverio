function divideNumbers(numerator, denominator) {
  try {
    // Code that might throw an error
    if (denominator === 0) {
      throw new Error("Division by zero is not allowed.");
    }

    const result = numerator / denominator;
    console.log(`The result of ${numerator} / ${denominator} is: ${result}`);
    return result;
  } catch (error) {
    // Code to handle the error
    console.error("An error occurred:", error.message);
    return null; // Or handle the error in another appropriate way
  } finally {
    // Code that will always execute, regardless of whether an error occurred
    console.log("Division operation attempted.");
  }
}

// Example usage:
console.log("--- Valid Division ---");
divideNumbers(10, 2);

