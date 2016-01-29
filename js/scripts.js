function Customer(name) {
  this.name = name;
  // this.psize = psize;
}

// customer.prototype.sizeselect = function(){
//     return  this.psize = vsize
//     // this.currentscore = new_array;
//  } else {
//      $("#dishonor").show();
//   }
//   if (this.totalscore >= 100) {
//     $("#winning").show();
//   }
// }// this.totalscore += this.currentscore + d10;
  //eturn this.currentscore;

$(document).ready(function() {
  $("form#question").submit(function(event) {
    event.preventDefault();
    var nameentry = $("input#customer").val();
    var newcust = new Customer(nameentry);

    $("form#roll").submit(function(event) {
      event.preventDefault();
      var vsize = $("select#pizzatoppings").val();
      // var player2 = Player1();
      // var d10 = Math.floor((Math.random()*6) + 1);
      newcust.sizeselect(nameentry,vsize);
      $("#sth").append("<li>" + newturn.totalscore + "</li>");
      // $("#player1score").append(newturn.totalSCore)
      console.log("total" + newturn.totalscore);


    });

  });

});
// });
