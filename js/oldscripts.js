function Player(name) {
  this.name = name;
  this.currentscore = 0;
  this.totalscore = 0;
}

Player.prototype.dieroll = function(){
  var d10 = Math.floor((Math.random()*6) + 1);
  // this.currentscore = d10;
  if (d10 !== 1) {
    this.currentscore = d10;
    this.totalscore += d10;
    console.log("current score" + this.currentscore);
    console.log("total score" + this.totalscore);
    $("#dishonor").hide();
    // var new_array = sequence.concat();
    // this.currentscore = new_array;
 } else {
     $("#dishonor").show();
  }
  if (this.totalscore >= 100) {
    $("#winning").show();
  }
}// this.totalscore += this.currentscore + d10;
  //eturn this.currentscore;

$(document).ready(function() {
  $("form#question").submit(function(event) {
    event.preventDefault();
     var test = $("input#player1").val();
    // var player2 = Player1();
    // var d10 = Math.floor((Math.random()*6) + 1);
    var newturn = new Player(test);
    $("#print").append(test);
    // newturn.dieroll();
    console.log("total" + newturn.totalscore);

    $("form#roll").submit(function(event) {
      event.preventDefault();
      var test = $("input#player1").val();
      // var player2 = Player1();
      // var d10 = Math.floor((Math.random()*6) + 1);
      newturn.dieroll();
      $("#sth").append("<li>" + newturn.totalscore + "</li>");
      // $("#player1score").append(newturn.totalSCore)
      console.log("total" + newturn.totalscore);


    });

  });

});
// });
