// script.js
//testimonial belum

//faq
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  $(".field").on("keyup change", function () {
    toggleSearchButton();
  });

  function toggleSearchButton() {
    let empty = true;

    $(".field").each(function () {
      empty = $(this).val() === "" || $(this).val() === null;
      if (empty) return false;
    });

    app.searchButton.disabled = empty;
  }

  function filterDriver(car) {
    const driver = app.filterByDriver.value;
    // dicocokan dengan properti apa di json?
    return true;
  }

  function filterDateTime(car) {
    const date = app.filterByDate.value;
    const time = app.filterByTime.value;
    let quantity = app.filterByCapacity.value;
    if (quantity <= 0) quantity = 1;
    const datetime = new Date(date + " " + time + ":00");
    return (
      car.carData.availableAt <= datetime && car.carData.capacity >= quantity
    );
  }

  $("form").submit(function (event) {
    event.preventDefault();
  });

  app.searchButton.onclick = function () {
    app.clear();
    list = [];
    list = Car.list;
    Car.list = Car.list.filter(filterDriver).filter(filterDateTime);
    app.run();
    Car.list = list;
    app.clearButton.hidden = false;
  };

  app.clearButton.onclick = function () {
    app.clear();
    $("form").trigger("reset");
    app.clearButton.hidden = true;
    toggleSearchButton();
  };
});
