//Back-End
function Pizza(names, toppings, size, price)  {
  this.names = names
  this.toppings = toppings;
  this.size = size;
  this.price = price;
}
Pizza.prototype.cost=function(){
price = 0;
price += (this.toppings.length*2);
  if (this.size === "small"){
    price+= 8
  };
  if (this.size === "medium"){
    price+= 10
  };
  if (this.size === "large"){
    price+= 12
  };
  if (this.size === "xl"){
    price+= 14
  };
  return price;
};
//Front End
$(function() {
  $("form#pizzaForm").submit(function(event){
    event.preventDefault();
    var orderTops = [];
    var orderName = $("input#orderName").val();
    var orderSize = $("input:radio[name=size]:checked").val();
    $("input:checkbox[name=toppings]:checked").each(function(){
      orderTops.push($(this).val());
    });

console.log(orderTops, orderSize, orderName);
var newPie  = new Pizza(orderName, orderTops, orderSize);
console.log(newPie);
price = newPie.cost()
console.log(price);
});
});
