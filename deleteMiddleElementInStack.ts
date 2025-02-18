// NOTE: here the recursion tree will be skewd , so we use induction , base condition and hypothesis approach here
// essentially we are saying that if it's not the middle element then go remeove it and after that i'll append this element to the stack

function deleteMiddleElementInStack(st: number[], sizeOfStack: number): void {
  if (st.length === 0) {
    return;
  }

  let topNum = st.pop()!;

  if (st.length !== Math.round(sizeOfStack / 2) - 1) {
    deleteMiddleElementInStack(st, sizeOfStack);
    st.push(topNum);
  }
}

let st: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

deleteMiddleElementInStack(st, st.length);

console.log(st);
