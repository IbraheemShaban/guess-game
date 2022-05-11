import './App.css';
import { useState } from 'react';

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const answer = randomIntFromInterval(1, 10);

function App() {
  const [number, setNumber] = useState(0);
  const [tries, setTries] = useState(3);
  const [messege, setMessege] = useState('');
  const [mainScreen, setMainScreen] = useState('App');
  const [winScreen, setWinScreen] = useState('hide');
  const [lostScreen, setLostScreen] = useState('hide');

  const guess = () => {
    if (tries > 1) {
      if (number < 0 || number > 10) {
        alert('Enter a number between 1-10');
      } else if (number == answer) {
        setMainScreen('hide');
        setWinScreen('App');
      } else if (number < answer) {
        setTries(tries - 1);
        setMessege('The Right Answer is higher');
      } else if (number > answer) {
        setTries(tries - 1);
        setMessege('The Right Answer is lower');
      }
    } else {
      setTries(tries - 1);
      if (number == answer) {
        setMainScreen('hide');
        setWinScreen('App');
      } else {
        setTimeout(() => {
          setMainScreen('hide');
          setLostScreen('App');
        }, '210');
      }
    }
  };
  return (
    <div>
      <div className={mainScreen}>
        <h1>Guessing Game</h1>
        <h3>Find The Secret Number</h3>
        <input
          onChange={(event) => setNumber(event.target.value)}
          className="input"
          type="text"
          placeholder="1-10"
        />
        <button onClick={guess}>Guess</button>
        <h2>{messege}</h2>
        <h2>tries remaining {tries}</h2>
      </div>
      <div className={winScreen}>
        <h1>You won</h1>
        <button onClick={() => window.location.reload()}>Restart</button>
      </div>
      <div className={lostScreen}>
        <h1>You Lost</h1>
        <button onClick={() => window.location.reload()}>Restart</button>
      </div>
    </div>
  );
}

export default App;
