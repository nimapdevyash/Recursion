// problem statement : there are n peoples standing in circle and the first of them standing at position 0 starts the counting till k and then kills him and the counting will continue from the person who got killed (an alive person next to him) , we have to return the last surviving persons position.

// why rucursion : the problem itself says that the input will reduce in a predictable and fixed manner , hence we can apply recursion here, IBH to be specific.

function killKth(
  peoples: number[],
  k: number,
  personToCountFrom: number
): void {
  if (peoples.length === 1) {
    console.log("person who servived : " + peoples[0]);
    return;
  }

  let index = (personToCountFrom + k) % peoples.length;

  peoples.splice(index, 1);

  killKth(peoples, k, index);
}

(function josephusProblem(numberOfPeoples: number, k: number): void {
  if (numberOfPeoples === 0) {
    return;
  }

  let peoples: number[] = [];

  for (let i = 1; i <= numberOfPeoples; i++) {
    peoples.push(i);
  }

  killKth(peoples, k - 1, 0);
})(40, 7);
