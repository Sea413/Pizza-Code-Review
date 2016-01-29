function Customer(name, psize) {
  this.name = name;
  this.psize = psize;
}

customer.prototype.sizeselect = function(){
    return  this.psize = psize;
    // this.currentscore = new_array;
 }
$(document).ready(function() {
  $("form#question").submit(function(event) {
    event.preventDefault();
    var nameentry = $("input#customer").val();
    var newcust = new Customer(nameentry);

    $("form#roll").submit(function(event) {
      event.preventDefault();
      var vsize = $("select#pizzatoppings").val();
      newcust.sizeselect(nameentry,vsize);
      $("#sth").append("<li>" + newturn.totalscore + "</li>");
      // $("#player1score").append(newturn.totalSCore)
      console.log("total" + newturn.totalscore);


    });

  });

});
// });
