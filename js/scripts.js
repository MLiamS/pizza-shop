//Back-End
function Pizza(toppings, size )  {
  this.toppings = toppings;
  this.size = size;
};

Pizza.prototype.cost = function()  {
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



$(function() {
  var totalPrice = 0;
  var piesTotal = 0;
  var toppingsTotal = [];
  $("form#pizzaForm").submit(function(event){
    event.preventDefault();
    var orderName = "";
    var orderAddress = "";
    var orderPhone = "";
    var orderTops = [];
    var orderSize = $("input:radio[name=size]:checked").val();
    $("input:checkbox[name=toppings]:checked").each(function(){
      orderTops.push($(this).val());
    });
    orderName = orderName.concat($("#orderName").val());
    orderAddress = orderAddress.concat($("#orderAddress").val());
    orderPhone = orderPhone.concat($("#orderPhone").val());
    var newPie  = new Pizza(orderTops, orderSize);
    price = newPie.cost();
    $("#order").append("<li>" +"One " + newPie.size + "</li>");
    $("#order").append("<li>" + "With: " + newPie.toppings + "</li>");
    $("#order").append("<li>" + "At  $" + price + "'s" +"</li>"+"<br>");
    totalPrice = (totalPrice + price);
    piesTotal ++;
    toppingsTotal = toppingsTotal.concat(newPie.toppings);
    console.log(totalPrice,piesTotal,toppingsTotal);
    document.getElementById("pizzaForm").reset();
    $(".toppingSize").hide();
    $("#addPie").show();
    $("#completePie").show();
    $(".order").show();
    totalNumToppings = toppingsTotal.length;
    $("#items").text("You've ordered " + piesTotal + " pizza(s) with a total of " + totalNumToppings + " topping(s)." +  "For a grand total of $" + totalPrice + ".00's ");
  });


var orderName = $("input#orderName").val();

$("#createPizza").click(function(){
  $(".deliveryOr").show();
  $("#createPizza").hide();
  });

  $("#pickUp").click(function(){
    $(".namePhone").show();
    $(".deliveryOr").hide();
    $("#pizzaTypeButton").show();
  });

  $("#delivery").click(function(){
    $(".namePhone").show();
    $(".address").show();
    $(".deliveryOr").hide();
    $("#pizzaTypeButton").show();
  });

  $("#pizzaTypeButton").click(function(){
    $("#pizzaTypeButton").hide();
    $(".namePhone").hide();
    $(".address").hide();
    $(".toppingSize").show();
  });

  $("#addPie").click(function(){
    $(".toppingSize").show();
    $("#addPie").hide();
    $("#completePie").hide();
  });





  $("#completePie").click(function(){
    $("#items").text("Hi " + orderName + " you have ordered " + piesTotal + " pizza(s) with a total of " + totalNumToppings + " topping(s)." + "For a grand total of $" + totalPrice + ".00 ");

    $("#receipt").modal();

});

});
