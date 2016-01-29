function Customer(name,psize,topping,cost) {
  this.name = name;
  this.psize = psize;
  this.topping = topping;
  this.cost = 0
}

Customer.prototype.sizeselect = function(vsize){
    if (vsize === "small") {
      this.psize === vsize;
      this.cost += 5;
      return this.cost;
    }
    else if (vsize === "medium"){
      this.psize === vsize;
      this.cost += 8;
      return this.cost;
    }
    else if (vsize === "large"){
      this.psize === vsize;
      this.cost += 12;
      return this.cost;
    }
    else if (vsize === "xlarge"){
      this.psize === vsize;
      this.cost += 15;
      return this.cost;
 }
 console.log(this.cost);
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
          newcust.sizeselect(vsize);

          $("form#toppings").submit(function(event) {
            var nameentry = $("input#customer").val();
            var vtopping = $("select#pizzatoppings").val();
            newcust.toppingselect(nameentry,vsize,vtopping);
        });
    });

  });

});
});
