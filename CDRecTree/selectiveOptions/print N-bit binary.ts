// NOTE: here we are using the approach to maximize the ones and unlike balancing here we start with zeros and increment as we go up.

// function to find the binaris of size n such that their prefixes at any index from the right to left have more  or equal (>=) of ones than zeros
function printNBitBinaryOfLenN(
  ones: number,
  zeros: number,
  n: number,
  output: string
): void {
  if (n === 0) {
    console.log(output);
    return;
  }

  // this is the key condition in recursive tree , it's essential to draw the recursive tree to notice such details.
  if (zeros < ones) {
    printNBitBinaryOfLenN(ones, zeros + 1, n - 1, output + "0");
  }

  printNBitBinaryOfLenN(ones + 1, zeros, n - 1, output + "1");
}

printNBitBinaryOfLenN(0, 0, 5, "");
