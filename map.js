var politicianInfo = function(name){
  
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
  
  
  return politician;
};

var flo = politicianInfo("Flo Florrick");

var jane = politicianInfo("Jane Doesitall");
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
console.log(jane.totalVotes)

var winner = "???";

if (flo.totalVotes > jane.totalVotes){
  winner = flo.name;
}else if (jane.totalVotes > flo.totalVotes){
  winner = jane.name;
}
else {
  winner = "DRAW";
}
  
  
console.log("And the winner is " + winner + "!");



