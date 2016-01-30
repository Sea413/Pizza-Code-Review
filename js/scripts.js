function Customer(name,psize,topping,currentprice,cost) {
  this.name = name;
  this.psize = psize;
  this.topping = topping;
  this.currentprice = 0;
  this.cost = 0;
}

Customer.prototype.sizeselect = function(vsize){
  if (vsize === "Trifling") {
    this.psize === vsize;
    this.cost += 5;
    return this.cost;
  }
  else if (vsize === "Picayune"){
    this.psize === vsize;
    this.cost += 8;
    return this.cost;
  }
  else if (vsize === "Abhorrent"){
    this.psize === vsize;
    this.cost += 12;
    return this.cost;
  }
  else if (vsize === "Brobdingnagian"){
    this.psize === vsize;
    this.cost += 15;
    return this.cost;
  }
}

 Customer.prototype.toppingselect = function(vtopping){
   if (vtopping === "Atari") {
     this.currentprice += 15;
     this.topping === vtopping;
     this.cost += 15;
     return this.cost;
   }
   else if (vtopping === "Tears"){
     this.currentprice += 28;
     this.topping === vtopping;
     this.cost += 28;
     return this.cost;
   }
   else if (vtopping === "Bento"){
     this.currentprice += 32;
     this.topping === vtopping;
     this.cost += 32;
     return this.cost;
   }
   else if (vtopping === "Cheese"){
     this.currentprice += 45;
     this.topping === vtopping;
     this.cost += 45;
     return this.cost;
  }
  else if (vtopping === "Choice"){
    this.currentprice += 1000;
    this.topping === vtopping;
    this.cost += 1000;
    return this.cost;
  }
  else if (vtopping === "Kale"){
    this.currentprice += 55;
     this.topping === vtopping;
     this.cost += 55;
     return this.cost;
   }
 }
$(document).ready(function() {
  $("form#question").submit(function(event) {
    event.preventDefault();
    var nameentry = $("input#customer").val();
    var newcust = new Customer(nameentry);
    $("#customern").append(nameentry);
    $("#size").show();
  $("form#size").submit(function(event) {
    event.preventDefault();
    var vsize = $("select#pizzasize").val();
    newcust.sizeselect(vsize);
    $("#pizzat").append(vsize + " " + "$" + newcust.cost);
    $("#toppings").show();
  $("form#toppings").submit(function(event) {
    event.preventDefault();
    var nameentry = $("input#customer").val();
    var vtopping = $("select#pizzatoppings").val();
    newcust.toppingselect(vtopping);
    $("#toppingt").append( " " + vtopping + " " + "$" + newcust.currentprice);
    $("#confirmation").show();
  $("form#confirmation").submit(function(event) {
    event.preventDefault();
    $("#finalcost").html("$" + newcust.cost);
    $("#winning").show();

     });
    });
   });
 });
});
