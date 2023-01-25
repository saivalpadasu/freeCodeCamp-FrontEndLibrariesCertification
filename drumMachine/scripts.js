function playQ(){
    const clickQ = document.querySelector("#Q");
    clickQ.play();
    document.getElementById('display-text').innerHTML = "heater 1"
  }
  document.addEventListener("keydown", e => {
    switch(e.key.toLowerCase()){
      case 'q':
        return playQ()
      case 'w':
        return playW()
      case 'e':
        return playE()
      case 'a':
        return playA()
      case 's':
        return playS()
      case 'd':
        return playD()
      case 'z':
        return playZ()
      case 'x':
        return playX()
      case 'c':
        return playC()
    }
  })
  function playW(){
    const clickW = document.querySelector("#W");
    clickW.play();
    document.getElementById('display-text').innerHTML = "heater 2"
  }
  
  function playE(){
    const clickE = document.querySelector("#E");
    clickE.play();
    document.getElementById('display-text').innerHTML = "heater 3"
  }
  
  function playA(){
    const clickA = document.querySelector("#A");
    clickA.play();
    document.getElementById('display-text').innerHTML = "heater 4"
  }
  
  function playS(){
    const clickS = document.querySelector("#S");
    clickS.play();
    document.getElementById('display-text').innerHTML = "clap"
  }
  
  function playD(){
    const clickD = document.querySelector("#D");
    clickD.play();
    document.getElementById('display-text').innerHTML = "open-hh"
  }
  
  function playZ(){
    const clickZ = document.querySelector("#Z");
    clickZ.play();
    document.getElementById('display-text').innerHTML = "kick-n'-hat"
  }
  
  function playX(){
    const clickX = document.querySelector("#X");
    clickX.play();
    document.getElementById('display-text').innerHTML = "kick"
  }
  
  function playC(){
    const clickC = document.querySelector("#C");
    clickC.play();
    document.getElementById('display-text').innerHTML = "closed-hh"
  }