import { useState } from 'react';
import Square from './components/Square';
import NotSquare from './components/NotSquare';

function App() {

  const [squareLeft, setSquareLeft] = useState(50);
  const [squareTop, setSquareTop] = useState(50);
  const [nSquareLeft, setNSquareLeft] = useState(50);
  const [nSquareTop, setNSquareTop] = useState(50);
  const [score, setScore] = useState(0);

  const changePosition = shape => {
    const newTop = Math.floor(Math.random()*100);
    const newLeft = Math.floor(Math.random()*100);

    setSquareTop(newTop);
    setSquareLeft(newLeft);

    if (shape == 'square') incrementScore();
    else decrementScore();
  }

  const incrementScore = () => {
    setScore(score + 1);
  }

  const decrementScore = () => {
    setScore(score - 1);
  }

  return (
    <div className="App">
      <h1>{score}</h1>
      <Square top={squareTop} left={squareLeft} onClick={changePosition}/>
      <NotSquare onClick={changePosition} />
    </div>
  );
}

export default App;
