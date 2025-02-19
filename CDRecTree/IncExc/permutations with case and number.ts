function permutationsWithCaseAndNumber(
  input: string,
  output: string,
  index: number
): void {
  if (input.length === 0 || input.length === index) {
    console.log(output);
    return;
  }

  let currentChar = input[index];

  // cheak if current char is a alphabate or not
  if (
    (currentChar >= "a" && currentChar <= "z") ||
    (currentChar >= "A" && currentChar <= "Z")
  ) {
    // exclude
    permutationsWithCaseAndNumber(
      input,
      output + currentChar.toLowerCase(),
      index + 1
    );

    // include
    permutationsWithCaseAndNumber(
      input,
      output + currentChar.toUpperCase(),
      index + 1
    );
  } else {
    // include the number
    permutationsWithCaseAndNumber(input, output + currentChar, index + 1);
  }
}

permutationsWithCaseAndNumber("a1b2c", "", 0);
