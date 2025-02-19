function permutationsWithSpaces(str: string): void {
  if (str.length === 0) {
    return;
  }

  let output = str[0];

  findPermutationsWithSpaces(str, output, 1);
}

function findPermutationsWithSpaces(
  str: string,
  output: string,
  index: number
): void {
  if (str.length === 0 || index === str.length) {
    console.log(output);
    return;
  }

  // exclude
  findPermutationsWithSpaces(str, output + str[index], index + 1);

  // include
  findPermutationsWithSpaces(str, output + " " + str[index], index + 1);
}

permutationsWithSpaces("abc");
