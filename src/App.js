import { useState } from 'react';
import Square from './components/Square';
import NotSquare from './components/NotSquare';
import nSquaresData from './utils/nSquaresData';
import uniqid from 'uniqid'

function App() {
  const [nSquares, setNSquares] = useState(nSquaresData());

  const [squareTop, setSquareTop] = useState(0);
  const [squareLeft, setSquareLeft] = useState(185);
  const [score, setScore] = useState(0);

  const changePosition = () => {
    const sqrTop = Math.floor(Math.random()*500);
    const sqrLeft = Math.floor(Math.random()*500);


    nSquares.map( (nSquare, index) => {
      let nSqrTop = Math.floor(Math.random()*500);
      let nSqrLeft = Math.floor(Math.random()*500);

      const diamondSize = 30*Math.sqrt(2);
      let topDiff = Math.abs(sqrTop - nSqrTop);
      let leftDiff = Math.abs(sqrLeft - nSqrLeft);

      while (topDiff < diamondSize || leftDiff < diamondSize) {
        nSqrTop = Math.floor(Math.random()*500);
        nSqrLeft = Math.floor(Math.random()*500);
        topDiff = Math.abs(sqrTop - nSqrTop);
        leftDiff = Math.abs(sqrLeft - nSqrLeft);

      }
      setNSquares(nSquares.map((nSquareB, indexB) => {
        if (index == indexB) {
          nSquareB.top = nSqrTop;
          nSquareB.left = nSqrLeft;
        }
        return nSquareB;
      }));
    });

    

    setSquareTop(sqrTop);
    setSquareLeft(sqrLeft);
    
  }


  const incrementScore = () => {
    setScore(score + 1);
    changePosition();
    addSquare();
    
    
  }

  const decrementScore = () => {
    setScore(score - 1);
    changePosition();
  }

  const addSquare = () => {

    let nSqrTop =  Math.floor(Math.random()*500);
    let nSqrLeft =  Math.floor(Math.random()*500);

    const diamondSize = 30*Math.sqrt(2);
    let topDiff = Math.abs(squareTop - nSqrTop);
    let leftDiff = Math.abs(squareLeft - nSqrLeft);

    while (topDiff < diamondSize || leftDiff < diamondSize) {
      nSqrTop = Math.floor(Math.random()*500);
      nSqrLeft = Math.floor(Math.random()*500);
      topDiff = Math.abs(squareTop - nSqrTop);
      leftDiff = Math.abs(squareLeft - nSqrLeft);

    }

    setNSquares(nSquares.concat({
      top: nSqrTop,
      left: nSqrLeft,
      key: uniqid()
    }))
  }

  return (
    <div className="App">
      <h1>{"Score: " + score}</h1>
      <div className='game-board'>
        <Square top={squareTop} left={squareLeft} onClick={incrementScore} />
        {
          nSquares.map(nSquare => {
            return <NotSquare top={nSquare.top} left={nSquare.left} onClick={decrementScore} degree={Math.floor(Math.random()*40)+5} key={uniqid()}/>
          })

        }
        {/* <NotSquare top={nSquareTop} left={nSquareLeft} onClick={decrementScore} degree={Math.floor(Math.random()*40)+5}/> */}
      </div>
      
    </div>
  );
}

export default App;
