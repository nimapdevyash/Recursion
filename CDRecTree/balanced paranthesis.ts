// note that at every point we didn't had two choices here ,
// - if both closing and opening paranthesis were to have the same value we didn't had any choice but to go with the opening brackets so as to maintain the balance of the paranthesis.
// - we had two choices when we had more of a closing brackets than the opening once

// to note such key things it's really important to draw the recursive tree and carefully look at our options and what choices can we make.

// why we decided to use recursion here ?
// we hade the choises eaither to use open brackets or close ones and thus had to make some decisions at every point , hence we concluded to use the recursion and recursive approach of choices and decisions to be specific.

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

  // this if condition prevents the infinite recursion
  // we could always use opening paranthesis as closing paranthesis can then balance them out
  if (opening > 0) {
    generateBalancedParanthesis(opening - 1, closing, output + "(");
  }

  // we can only append the closing brackets when we have more of them than opening ones
  // essentially we can only use them to balance the string
  if (opening < closing) {
    generateBalancedParanthesis(opening, closing - 1, output + ")");
  }
}

function balancedParanthesis(numberOfParanthesis: number): void {
  generateBalancedParanthesis(numberOfParanthesis, numberOfParanthesis, "");
}

balancedParanthesis(3);
