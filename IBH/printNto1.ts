function printNto1(n: number): void {
  if (n <= 0) {
    return;
  }

  console.log(n);

  printNto1(n - 1);
}

printNto1(6);
