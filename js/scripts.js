//Back-End
function Pizza(names, toppings, size)  {
  this.names = names
  this.toppings = toppings;
  this.size = size;
  this.price = price;

}
var tops = [];
var Pizza = new Pizza(name, tops, size, price);

function names(input)  {
return"Inputed Name"
}
// function toppings() {}=


$(function() {
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=toppings]:checked").each(function(){
      var tops = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
    });
    $('#transportation_survey').hide();
  });
});

});
