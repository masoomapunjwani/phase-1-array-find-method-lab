// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

function winner(checkWinner){
    return (checkWinner.result === "W");
};

function superbowlWin(array){
    let win = array.find(winner);
    if (typeof win === "object"){
        return win.year;
    } else{
        return win;
    }
};