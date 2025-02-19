function permutationsWithCase(
  str: string,
  output: string,
  index: number
): void {
  if (str.length === 0 || index === str.length) {
    console.log(output);
    return;
  }

  // exclude
  permutationsWithCase(str, output + str[index], index + 1);

  // include
  output += str[index].toLocaleUpperCase();

  permutationsWithCase(str, output, index + 1);
}

permutationsWithCase("abc", "", 0);
