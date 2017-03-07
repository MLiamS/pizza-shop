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
  $("form#pizzaForm").submit(function(event){
    event.preventDefault();
    var orderTops = [];
    var orderSize = $("input:radio[name=size]:checked").val();
    $("input:checkbox[name=toppings]:checked").each(function(){
      orderTops.push($(this).val());
    });

    var newPie  = new Pizza(orderTops, orderSize);
    price = newPie.cost();
    $("#order").append("<li>" +"One " + newPie.size + "</li>");
    $("#order").append("<li>" + "With: " + newPie.toppings + "</li>");
    $("#order").append("<li>" + "At  $" + price + "'s" +"</li>"+"<br>");
    totalPrice = (totalPrice + price)
    console.log(totalPrice);
    document.getElementById("pizzaForm").reset();
    $(".toppingSize").hide();
    $("#addPie").show();
    $("#completePie").show();
    $(".order").show();
  });
});

var orderName = $("input#orderName").val();

$("#addPie").click(function(){
  $(".toppingSize").show();
  $("#addPie").hide();
  $("#completePie").hide();
  });

$("#completePie").click(function(){
  $(".deliveryOr").show();
  $("#createPizza").hide();
  $("#addPie").hide();
  $("#completePie").hide();
  });

$("#createPizza").click(function(){
  $(".toppingSize").show();
  $("#createPizza").hide();
  });

$("#pickUp").click(function(){
  $(".namePhone").show();
  $(".finalOrder").show();
  $(".newOrder").show();
  $("#finalOrder").show();
  $(".deliveryOr").hide();
});

  $("#delivery").click(function(){
    $(".namePhone").show();
    $(".finalOrder").show();
    $(".address").show();
    $(".newOrder").show();
    $("#finalOrder").show();
    $(".deliveryOr").hide();
  });

$("#finalOrder").submit(function(){
  $("#items").text("items");
  $("#receipt").modal();
$("#newOrder").click(function() {
});
});
