function Customer(name,psize,topping) {
  this.name = name;
  this.psize = psize;
  this.topping = topping;
}

// customer.prototype.sizeselect = function(){
//     this.psize = psize;
//     // this.currentscore = new_array;
//  }
//  customer.prototype.toppingselect = function(){
//        this.topping = topping;
//      // this.currentscore = new_array;
//   }
$(document).ready(function() {
  $("form#question").submit(function(event) {
    event.preventDefault();
    var nameentry = $("input#customer").val();
    var newcust = new Customer(nameentry);
     $("#customern").append(nameentry);
      $("form#number1").submit(function(event) {
        event.preventDefault();
        var pamount = parseInt($("input#amount").val());
        var appendText = [];
        for (var i = 1; i <= pamount; i++) {
          appendText.push(i);
        }
        $("#amountexp").append("<li>" + appendText + "</li>" );

        $("form#size").submit(function(event) {
          // event.preventDefault();
          var vsize = $("select#pizzasize").val();
          newcust.sizeselect(nameentry,vsize,vtopping);

          $("form#toppings").submit(function(event) {
            var nameentry = $("input#customer").val();
            var vtopping = $("select#pizzatoppings").val();
            newcust.toppingselect(nameentry,vsize,vtopping);
        });
    });

  });

});
});
