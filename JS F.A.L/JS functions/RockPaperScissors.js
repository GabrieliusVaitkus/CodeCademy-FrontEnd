const getUserChoise = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors" ||
      userInput == "bomb"
    ) {
      return userInput;
    } else {
      console.log("Error");
    }
  };
  
  const getComputerChoise = () => {
    let random = Math.floor(Math.random() * 3);
    switch (random) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
    return random;
  };
  
  const determineWinner = (userChoise, computerChoise) => {
    if (userChoise === computerChoise) {
      return "The game is a tie.";
    }
    if (userChoise === "rock") {
      if (computerChoise === "paper") {
        return "The computer has won";
      } else {
        return "The user has won";
      }
    }
  
    if (userChoise === "paper") {
      if (computerChoise === "scissors") {
        return "The computer has won";
      } else {
        return "The user has won";
      }
    }
  
    if (userChoise === 'scissors') {
      if (computerChoise === 'paper') {
        return 'The user has won';
      } else {
        return 'The computer has won';
      }
    }
  
    if (userChoise === 'bomb') {
      return 'User has won with cheatcodes';
    }
  };
  
  function playGame() {
    let userChoise = getUserChoise('bomb');
    let computerChoise = getComputerChoise();
    console.log(`You threw: ${userChoise}`);
    console.log(`The computer threw: ${computerChoise}`);
    console.log(determineWinner(userChoise, computerChoise));
  }
  
  playGame();