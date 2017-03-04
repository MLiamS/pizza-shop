//Back-End
function Pizza(name, toppings, size )  {
  this.name = name;
  this.toppings = toppings;
  this.size = size;
};

Pizza.prototype.cost=function()  {
p = 0;
p += (this.toppings.length*2);
  if (this.size === "Small"){
    p+= 8
  };
  if (this.size === "Medium"){
    p+= 10
  };
  if (this.size === "Large"){
    p+= 12
  };
  if (this.size === "Extra-Large"){
    p+= 14
  };
  return p;
};
// function addPrice(p1, total) { newPrice = p1 + total;
//   return newPrice;
// };
//Front End
$(function() {
  var totalPrice = 0;
  $("form#pizzaForm").submit(function(event){
    event.preventDefault();
    var orderTops = [];
    var orderName = $("input#orderName").val();
    var orderSize = $("input:radio[name=size]:checked").val();
    $("input:checkbox[name=toppings]:checked").each(function(){
      orderTops.push($(this).val());
    });

    var newPie  = new Pizza(orderName, orderTops, orderSize);
    price = newPie.cost();
    $("#order").append("<li>" + "Order for:  " + newPie.name + "</li>");
    $("#order").append("<li>" +"Size: " + newPie.size + "</li>");
    $("#order").append("<li>" + "Toppings: " + newPie.toppings + "</li>");
    $("#order").append("<li>" + "Price:  $" + price + "'s" +"</li>");
    $("#order").append("<li>" + "</li>");
    document.getElementById("pizzaForm").reset();
    // addPrice(price, totalPrice);
    // console.log(price, totalPrice);
    // console.log(newPrice);
    });
    // $("#place").click(function(){
    //   $("#items").text("items");
    //   $("#receipt").modal();
    // });
    // $("#newOrder").click(function() {
    // });
    });
