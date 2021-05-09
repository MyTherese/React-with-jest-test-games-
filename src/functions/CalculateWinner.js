

const calculateWinner = (squaresCopy) =>  {

  const possibleLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  // go over possible winning and make 

  for (let i = 0; i < possibleLines.length; i++) {
    const [a, b, c] = possibleLines[i];
    if (squaresCopy[a] && squaresCopy[a] === squaresCopy[b] && squaresCopy[a] === squaresCopy[c]) {
      return squaresCopy[a];
    }
  }
  // NO WINNER
  return null;
}

export default calculateWinner;