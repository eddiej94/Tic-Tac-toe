const boxes = Array.from(document.getElementsByClassName('box'));
    console.log(boxes);
const replayBtn = document.getElementById('replay-btn')
const restartBtn = document.getElementById('restart-btn')
const winTEXT = document.getElementById('winTEXT');
const noSpace = [];
const player1_Text = "X";
const player1_Win = document.getElementById('player1_Win');
let player1_score = 0;
const player2_Text = "O"; 
const player2_Win = document.getElementById('player2_Win');
let player2_score = 0;
const boxElements = document.querySelectorAll('[data-box]')
var currentPlayer = player1_Text;
let playsCounter = [];
    const buildBoard = () => {
        boxes.forEach((box, index) => {
           box.addEventListener('click', boxClick)
        });
    };
    function boxClick (e) {
      const id = e.target.id;
        console.log(id);
      playsCounter.push(boxClick);
      if(playsCounter.length === 9) {
       heading.innerHTML = "Draw - Hit Rematch to Play Again!";
       console.log(playsCounter);
       return;
      }   
      if(!noSpace[id]) {
        noSpace[id] = currentPlayer;
        e.target.innerText = currentPlayer;
        if(playerWins(currentPlayer)) {
            heading.innerHTML = `${currentPlayer} Wins the round!`;
            if(currentPlayer === player1_Text){
              player1_score++
              player1_Win.innerHTML = player1_score
              noSpace.forEach((space, index) => {
              noSpace[index] = null;
            });
            boxes.forEach((box) => {
              box.innerText = "";
            });
            } else {
              player2_score++
              player2_Win.innerHTML = player2_score
              noSpace.forEach((space, index) => {
              noSpace[index] = null;
            });
            boxes.forEach((box) => {
              box.innerText = "";
            });
            }  
            return;
        } 
        currentPlayer = currentPlayer === player1_Text ? player2_Text : player1_Text;
        if(currentPlayer){
        var turn = document.getElementById("heading")
        turn.innerHTML = `${currentPlayer} it's your turn`
        return turn;
        }
      } 
    }
    const playerWins = (player) => {
  //from top left
  if (noSpace[0] === player) {
    if (noSpace[1] === player && noSpace[2] === player) {
      console.log(`${player} wins up top`);
      return true;
    }
    if (noSpace[3] === player && noSpace[6] === player) {
      console.log(`${player} wins on the left`);
      return true;
    }
    //diagonal
    if (noSpace[4] === player && noSpace[8] === player) {
      console.log(`${player} wins on the diagonal`);
      return true;
    }
  }
  //from bottom check up and across
  if (noSpace[8] === player) {
    if (noSpace[2] === player && noSpace[5] === player) {
      console.log(`${player} wins on the right`);
      return true;
    }
    if (noSpace[7] === player && noSpace[6] === player) {
      console.log(`${player} wins on the bottom`);
      return true;
    }
  }
  //from middle check middle vertical and middle horizontal
  if (noSpace[4] === player) {
    if (noSpace[3] === player && noSpace[5] === player) {
      console.log(`${player} wins on the middle horizontal`);
      return true;
    }
    if (noSpace[1] === player && noSpace[7] === player) {
      console.log(`${player} wins on the middle vertical`);
      return true;
    }
  }
  //diagonal
    if (noSpace[2] === player) {
        if(noSpace[4] === player && noSpace[6] === player) {
            console.log(`${player} wins on the top right diagonal`);
            return true;   
        }
     } 
}; 
restartBtn.addEventListener("click", () => {
    window.location.reload();
});
buildBoard();