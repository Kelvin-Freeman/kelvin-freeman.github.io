
//document.getElementsByClassName targets the object 
//array.from creates an array of the 'box' class
const boxes = Array.from(document.getElementsByClassName('box'));

const playText = document.getElementById('playText');
// This is where the user will choose to restart the game. It is retrieving the reset button from the HTML.
const resetBtn = document.getElementById('resetBtn')

// the below array represents the empty spaces on the board
const emptyBox = [];
const player1 = 'O';
const player2 = 'X';
// This tells the game to start with player2
let currentPlayer = player2;

// console.log(boxes);


const drawBoard = () => {
    boxes.forEach((box, index) => {
        let styleString = '';
        if (index < 3) {
            styleString += `border-bottom: 3px solid var(--purple);`;
        }
        if (index % 3 === 0) {
            styleString += `border-right: 3px solid var(--purple);`;
        }
        if (index % 3 === 2) {
            styleString += `border-left: 3px solid var(--purple);`;
        }
        if (index > 5) {
            styleString += `border-top: 3px solid var(--purple);`;
        }
        box.style = styleString;
        box.addEventListener('click', boxClicked)
    })
}

// This is the click event that tells us which box in the ID has been clicked
const boxClicked = (e) => {
     const id = e.target.id;
     console.log(id);
     if(!emptyBox[id]) {
        emptyBox[id] = currentPlayer;
        // this targets the text of the current player. X or O
        e.target.innerText = currentPlayer; 
        // the below ternary allows the players to be switched between X and O
        currentPlayer = currentPlayer === player2 ? player1 : player2;

        // The logic behind if a player has won
        if(playerWins()) 
        playText.innerText = `${currentPlayer} has won!`;
        // if the player wins, return out of the function
        // return;
       
        
        }
    
     
    }


// Here we are checking to see if a player has won. These are all the different win conditions
const playerWins = () => {
    if(emptyBox[0] === currentPlayer){
       if(emptyBox[1] === currentPlayer && emptyBox[2] === currentPlayer) {
        console.log(`${currentPlayer} wins up top`);
        return true;
        }
        if(emptyBox[3] === currentPlayer && emptyBox[6] === currentPlayer) {
         console.log(`${currentPlayer} wins on the left`);
         return true;
        }
        if(emptyBox[4] === currentPlayer && emptyBox[8] === currentPlayer) {
            console.log(`${currentPlayer} wins diagonally`);
            return true;
        }
    }
    if(emptyBox[8] === currentPlayer){
        if(emptyBox[2] === currentPlayer && emptyBox[5] === currentPlayer) {
         console.log(`${currentPlayer} wins on the right`);
         return true;
         }
         if(emptyBox[6] === currentPlayer && emptyBox[7] === currentPlayer) {
          console.log(`${currentPlayer} wins on the bottom`);
          return true;
         }
        
    }
    if(emptyBox[6] === currentPlayer){
        if(emptyBox[4] === currentPlayer && emptyBox[2] === currentPlayer) {
          console.log(`${currentPlayer} wins on the diagonally`);
          return true;
         }
         
    }
    if(emptyBox[1] === currentPlayer){
        if(emptyBox[4] === currentPlayer && emptyBox[7] === currentPlayer) {
         console.log(`${currentPlayer} wins mid vertical`);
         return true;
         }
    }
    if(emptyBox[3] === currentPlayer){
        if(emptyBox[4] === currentPlayer && emptyBox[5] === currentPlayer) {
         console.log(`${currentPlayer} wins mid horizontally`);
         return true;
         }
         
         
         
    };

    //Here we are creating the function that will restart the game when the reset button is pressed.
    resetBtn.addEventListener("click", () => {
        emptyBox.forEach((emptyBoxes, index) => {
          emptyBox[index] = null;
        });
        boxes.forEach((box) => {
          box.innerText = " ";
        });
        playText.innerHTML = `Let's Go!`;
      
        currentPlayer = player2;
      });
   
}    

drawBoard(); 









