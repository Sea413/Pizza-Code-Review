function Customer(name,psize,topping) {
  this.name = name;
  this.psize = psize;
  this.topping = topping;
}

customer.prototype.sizeselect = function(){
    this.psize = psize;
    this.topping = topping;
    // this.currentscore = new_array;
 }
 // customer.prototype.toppingselect = function(){
 //     return  this.topping = topping;
 //     // this.currentscore = new_array;
 //  }
$(document).ready(function() {
  $("form#question").submit(function(event) {
    event.preventDefault();
    var nameentry = $("input#customer").val();
    var newcust = new Customer(nameentry);

    $("form#size").submit(function(event) {
      // event.preventDefault();
      var vsize = $("select#pizzasize").val();
      newcust.sizeselect(nameentry,vsize,vtopping);

      $("form#toppings").submit(function(event) {
        var nameentry = $("input#customer").val();
        var vtopping = $("select#pizzatoppings").val();
        newcust.sizeselect(nameentry,vsize,vtopping);
        });
    });

  });

});
