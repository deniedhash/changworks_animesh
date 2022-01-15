import React, {Component} from "react";
import './App.css';
import { GlobalHotKeys} from "react-hotkeys";
import confetti from "canvas-confetti";



function App() {


  function showConf(){

    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 100 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
  }

  const keyMap = {
    CONFETTI: 'c h a n g w o r k s'
  };

  const handlers = {
    CONFETTI: showConf
  };


  return (
    <div className="App">
 
      <h1>Type "changworks"</h1>
      <GlobalHotKeys
      keyMap={keyMap}
      handlers={handlers}>

      </GlobalHotKeys>
    </div>
  );
}

export default App;
