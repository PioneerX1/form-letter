$(document).ready(function() {
  $("#formOne").submit(function() {
    var myNameInput = $("input#my-name").val();
    var myNameInput = myNameInput.toUpperCase();
    var firstNameInput = $("input#first-name").val();
    var lastNameInput = $("input#last-name").val();
    var streetInput = $("input#street-address").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();

    $(".my-name").text(myNameInput);
    $(".first-name").text(firstNameInput);
    $(".last-name").text(lastNameInput);
    $(".street-address").text(streetInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);

    event.preventDefault();
  });
});
