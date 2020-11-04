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

var trump = politicianInfo("Donald Trump", [182, 9, 0]);

var biden = politicianInfo("Joe Biden", [12, 0, 182]);
console.log();

trump.electionResults = []
biden.electionResults = []

//trump.electionResults [] = ;
//biden.electionResults [] = ;

//trump.electionResults [] = ;
//biden.electionResults [] = ;

//trump.electionResults [] = ;
//biden.electionResults [] = ;

console.log(trump.electionResults);
console.log(biden.electionResults);
trump.tallyUpTotalVotes();
biden.tallyUpTotalVotes();
console.log(trump.totalVotes);
console.log(biden.totalVotes);

var winner = "???";

setStateResults = function(state){
  theStates[state].winner = null;
  if (trump.electionResults[state] > biden.electionResults[state]){
    theStates[state].winner = trump;
  }else if (trump.electionResults[state] < biden.electionResults[state]){
    theStates[state].winner = biden;
  }
  var stateWinner = theStates[state].winner;
  if (stateWinner !== null){
    theStates[state].rgbColor = stateWinner.partyColor;
  }
  else {
    theStates[state].rgbColor = [119,50,231];
  }

var countryInfoTable = document.getElementById("countryResults");
var row = countryInfoTable.children[0].children[0];
  row.children[0].innerText = trump.name;
  row.children[1].innerText = trump.totalVotes;
  row.children[2].innerText = biden.name;
  row.children[3].innerText = biden.totalVotes;
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
  
  name1.innerText = trump.name;
  name2.innerText = biden.name;
  
  name1Results.innerText = trump.electionResults[state];
  name2Results.innerText = biden.electionResults[state];

  if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
 } else {
   winnersName.innerText = theStates[state].winner.name;
 }
}

if (trump.totalVotes > biden.totalVotes){
  winner = trump.name;
}else if (trump.totalVotes < biden.totalVotes){
  winner = biden.name;
}
else {
  winner = "DRAW";
}



console.log("And the winner is " + winner + "!");
console.log("Trump's color is: " + trump.partyColor);
console.log("Biden's color is: " + biden.partyColor);
