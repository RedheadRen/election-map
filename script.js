var politicianInfo = function(name, partyColor){
  
  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.tallyUpTotalVotes = function(){
    this.totalVotes = 0;
    for (var i = 0; i < this.electionResults.length; i++) {
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  };
  politician.partyColor = partyColor;
  
  return politician;
};

var flo = politicianInfo("Flo Florrick", [132, 17, 11]);

var jane = politicianInfo("Jane Doesitall", [245, 141, 136]);
console.log();

flo.electionResults = [5, 1, 7 ,2 ,33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2]
jane.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1]

flo.electionResults [9] = 1;
jane.electionResults [9] = 28;

flo.electionResults [4] = 17;
jane.electionResults [4] = 38;

flo.electionResults [43] = 11;
jane.electionResults [43] = 27;

console.log(flo.electionResults);
console.log(jane.electionResults);
flo.tallyUpTotalVotes();
jane.tallyUpTotalVotes();
console.log(flo.totalVotes);
console.log(jane.totalVotes);

var winner = "???";

setStateResults = function(state){
  theStates[state].winner = null;
  if (flo.electionResults[state] > jane.electionResults[state]){
    theStates[state].winner = flo;
  }else if (flo.electionResults[state] < jane.electionResults[state]){
    theStates[state].winner = jane;
  }
  var stateWinner = theStates[state].winner;
  if (stateWinner !== null){
    theStates[state].rgbColor = stateWinner.partyColor;
  }
  else {
    theStates[state].rgbColor = [11,32,57];
  }

var countryInfoTable = document.getElementById("countryResults");
var row = countryInfoTable.children[0].children[0];
  row.children[0].innerText = flo.name;
  row.children[1].innerText = flo.totalVotes;
  row.children[2].innerText = jane.name;
  row.children[3].innerText = jane.totalVotes;
  row.children[5].innerText = winner;

var stateInfoTable = document.getElementById("stateResults");
var header = stateInfoTable.children[0];
var body = stateInfoTable.children [1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var name1 = body.children[0].children[0];
var name2 = body.children[1].children[0];
var name1Results = body.children[0].children[1];
var name2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];

stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" +theStates[state].nameAbbrev +")";
  
  name1.innerText = flo.name;
  name2.innerText = jane.name;
  
  name1Results.innerText = flo.electionResults[state];
  name2Results.innerText = jane.electionResults[state];

  if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
 } else {
   winnersName.innerText = theStates[state].winner.name;
 }
}

if (flo.totalVotes > jane.totalVotes){
  winner = flo.name;
}else if (flo.totalVotes < jane.totalVotes){
  winner = jane.name;
}
else {
  winner = "DRAW";
}



console.log("And the winner is " + winner + "!");
console.log("Flo's color is: " + flo.partyColor);
console.log("Jane's color is: " + jane.partyColor);
