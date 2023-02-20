import { useState,useEffect } from 'react'
import './App.css'
import backgroundPic from './assets/backgroundIMG.png'
import goatPic from './assets/goat.png'
import Clock from './assets/Clock'

function App() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
  
  let interval;

  const startTimer = () => {
    const countDownDate = new Date('October 16, 2023').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));      
      const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));      
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if(distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <div className='App'>
      <section className="mobile-view">
        <img className='background-pic' src={backgroundPic}/>
        <div className='first-text-container'>
          <p>Ballon d'Or</p> <span>2023</span>
          <img className='pic' src={goatPic}/>
        </div>
        <div className="text-content-2">
          <p><span>Countdown</span> is on..</p>
        </div>
        <Clock 
        timerDays={timerDays} 
        timerHours={timerHours} 
        timerMinutes={timerMinutes} 
        timerSeconds={timerSeconds}
        />
      </section>
    </div>
 );
}

export default App;

