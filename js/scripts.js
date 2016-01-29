function Customer(name, psize,ptopping) {
  this.name = name;
  this.psize = psize;
  this.ptopping = ptopping;
}

customer.prototype.sizeselect = function(){
    return  this.psize = psize;
 }
 customer.prototype.toppingselect = function()
 {
     return  this.ptopping = ptopping;
  }
$(document).ready(function() {
  $("form#question").submit(function(event) {
    event.preventDefault();
    var nameentry = $("input#customer").val();
    var newcust = new Customer(nameentry);

    $("form#roll").submit(function(event) {
      event.preventDefault();
      var vsize = $("select#pizzasize").val();
      newcust.sizeselect(nameentry,vsize);
        $("form#toppings").submit(function(event) {
          event.preventDefault();
          var vtopping = $("select#pizzatoppings").val();
          newcust.toppingselect(nameentry,vsize);
    });

  });

});
// });
