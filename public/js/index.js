$(document).ready(function () {
  //init Side nav
  $('.button-collapse').sideNav();

  //init slider--
  $('.slider').slider({
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000,
  });

  // autocomplete-input
  $('.autocomplete').autocomplete({
    data: {
      "Aruba": null,
      "Cancun Mexico": null,
      "Hawaii": null,
      "Miami": null,
      "Los Angeles": null,
      "Jamaica": null,
      "Maui": null,
      "The Bahamas": null,
      "New York City": null,
    }
  });
});
