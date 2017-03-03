//Back-End
function Pizza(names, toppings, size)  {
  this.names = names
  this.toppings = toppings;
  this.size = size;
  this.price = price;

}
// var tops = [];
// var Pizza = new Pizza(name, tops, size, price);

function names(input)  {
return"Inputed Name"
}
// function toppings() {}=


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




});

});
