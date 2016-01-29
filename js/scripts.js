function Customer(name,psize,topping,cost) {
  this.name = name;
  this.psize = psize;
  this.topping = topping;
  this.cost = 0
}

customer.prototype.sizeselect = function(){
    this.psize = psize;
    if (vsize === "small") {
      this.cost += 5;
    }
    else if (vsize === "medium"){
      this.cost += 8;
    }
    else if (vsize === "large"){
      this.cost += 12;
    }
    else if (vsize === "xlarge"){
      this.cost += 15;
 }
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
