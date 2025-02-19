// function to print all the subsets of the string str
function printAllSubsets(str: string, output: string, index: number): void {
  // if the string is empty or has beeen processd then print the output and return
  if (str.length === 0 || index === str.length) {
    console.log(output);
    return;
  }

  // exclude
  printAllSubsets(str, output, index + 1);

  // include
  printAllSubsets(str, output + str[index], index + 1);
}

printAllSubsets("abc", "", 0);
