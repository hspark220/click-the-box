import { useState } from 'react';
import Square from './components/Square';
import NotSquare from './components/NotSquare';

function App() {

  const [nSquares, setNSquares] = useState([
    {
      top: 100,
      left: 100,
    },
    {
      top: 50,
      left: 50
    }
  ])

  const [squareLeft, setSquareLeft] = useState(0);
  const [squareTop, setSquareTop] = useState(0);
  const [nSquareLeft, setNSquareLeft] = useState([100, 40]);
  const [nSquareTop, setNSquareTop] = useState([100, 40]);
  const [score, setScore] = useState(0);

  const changePosition = () => {
    const sqrTop = Math.floor(Math.random()*100);
    const sqrLeft = Math.floor(Math.random()*100);

    let nSqrTop = Math.floor(Math.random()*100);
    let nSqrLeft = Math.floor(Math.random()*100);

    const diamondSize = 30*Math.sqrt(2);
    let topDiff = Math.abs(sqrTop - nSqrTop);
    let leftDiff = Math.abs(sqrLeft - nSqrLeft);

    while (topDiff < diamondSize || leftDiff < diamondSize) {
      nSqrTop = Math.floor(Math.random()*100);
      nSqrLeft = Math.floor(Math.random()*100);
      topDiff = Math.abs(sqrTop - nSqrTop);
      leftDiff = Math.abs(sqrLeft - nSqrLeft);

    }

    setSquareTop(sqrTop);
    setSquareLeft(sqrLeft);
    setNSquareTop(nSqrTop);
    setNSquareLeft(nSqrLeft);
  }


  const incrementScore = () => {
    setScore(score + 1);
    changePosition();
  }

  const decrementScore = () => {
    setScore(score - 1);
    changePosition();
  }

  return (
    <div className="App">
      <h1>{score}</h1>
      <div className='game-board'>
        <Square top={squareTop} left={squareLeft} onClick={incrementScore} />
        {
          nSquares.map(nSquare => {
            return <NotSquare top={nSquare.top} left={nSquare.left} onClick={decrementScore} degree={Math.floor(Math.random()*40)+5} />
          })

        }
        {/* <NotSquare top={nSquareTop} left={nSquareLeft} onClick={decrementScore} degree={Math.floor(Math.random()*40)+5}/> */}
      </div>
      
    </div>
  );
}

export default App;
