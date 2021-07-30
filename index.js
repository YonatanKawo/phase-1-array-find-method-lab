const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ] 
  
function superbowlWin(record) {
  let winnerYear = record.find((record) => record.result === "W");
  if (winnerYear){
      return winnerYear.year;
    }
    else{
        return undefined;
    } 
}

console.log(superbowlWin(record))