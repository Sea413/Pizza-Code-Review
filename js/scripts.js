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
    }
//  }
 Customer.prototype.toppingselect = function(vtopping){
   if (vtopping === "atari") {
     this.topping === vtopping;
     this.cost += 15;
     return this.cost;
   }
   else if (vtopping === "tears"){
     this.psize === vtopping;
     this.cost += 28;
     return this.cost;
   }
   else if (vtopping === "bento"){
     this.psize === vtopping;
     this.cost += 32;
     return this.cost;
   }
   else if (vtopping === "cheese"){
     this.psize === vtopping;
     this.cost += 45;
     return this.cost;
} else if (vtopping === "choice"){
  this.psize === vtopping;
  this.cost += 75;
  return this.cost;
} else if (vtopping === "kale"){
   this.psize === vtopping;
   this.cost += 55;
   return this.cost;
 }
 }
 console.log(this.cost);
$(document).ready(function() {
  $("form#question").submit(function(event) {
    event.preventDefault();
    var nameentry = $("input#customer").val();
    var newcust = new Customer(nameentry);
     $("#customern").append(nameentry);
      // $("form#number1").submit(function(event) {
      //   event.preventDefault();
      //   var pamount = parseInt($("input#amount").val());
      //   var appendText = [];
      //   for (var i = 1; i <= pamount; i++) {
      //     appendText.push(i);
      //   }
        // $("#amountexp").append("<li>" + appendText + "</li>" );

        $("form#size").submit(function(event) {
          // event.preventDefault();
          var vsize = $("select#pizzasize").val();
          newcust.sizeselect(vsize);

          $("form#toppings").submit(function(event) {
            var nameentry = $("input#customer").val();
            var vtopping = $("select#pizzatoppings").val();
            newcust.toppingselect(vtopping);
        });
        console.log(this.cost);
    });

  });

});
// });
