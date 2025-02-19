// note that at every point we didn't had two choices here ,
// - if both closing and opening paranthesis were to have the same value we didn't had any choice but to go with the opening brackets so as to maintain the balance of the paranthesis.
// - we had two choices when we had more of a closing brackets than the opening once

// to note such key things it's really important to draw the recursive tree and carefully look at our options and what choices can we make.

// function to generate all possible balanced paranthesis combinations
function generateBalancedParanthesis(
  opening: number,
  closing: number,
  output: string
): void {
  // if both are exausted then we have the output ready
  if (opening == 0 && closing == 0) {
    console.log(output);
    return;
  }

  // we can only append the closing brackets only when we have more of them than opening ones
  // essentially we can only use them to balance the string
  if (opening < closing) {
    generateBalancedParanthesis(opening, closing - 1, output + ")");

    // note we need this condition as 0 < 1 and if not for this condition the opening -1 would take the opening value below zero and it'll go infinite
    // the same is not required for closing braces as they will be exausted at last and will reduce by one so hence they will hit the base condition and not cause infinite loop
    if (opening > 0) {
      generateBalancedParanthesis(opening - 1, closing, output + "(");
    }
  }

  // we can use opening parantheses everytime as then can be balanced later by closing ones
  else generateBalancedParanthesis(opening - 1, closing, output + "(");
}

function balancedParanthesis(numberOfParanthesis: number): void {
  generateBalancedParanthesis(numberOfParanthesis, numberOfParanthesis, "");
}

balancedParanthesis(3);
