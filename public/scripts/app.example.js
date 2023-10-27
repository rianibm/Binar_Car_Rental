class App {
  constructor() {
    this.filterByDriver = document.getElementById("driver");
    this.filterByDate = document.getElementById("datepicker");
    this.filterByTime = document.getElementById("timepicker");
    this.filterByCapacity = document.getElementById("quantity");
    // this.clearButton = document.getElementById("clear-btn");
    this.searchButton = document.getElementById("search-btn");
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init() {
    await this.load();

    // Register click listeners
    // this.clearButton.onclick = this.clear.bind(this);
    this.searchButton.onclick = this.run.bind(this);
  }

  run() {
    this.clear();
    const datepicker = Date.parse(
      this.filterByDate.value + "T" + this.filterByTime.value
    );
    const quantity = this.filterByCapacity.value;

    Car.list.forEach((car) => {
      if (this.isCarAvailable(car, datepicker, quantity)) {
        this.renderCar(car);
      }
    });
  }

  isCarAvailable(car, datepicker, quantity) {
    const carDate = Date.parse(car.availableAt);
    return carDate >= datepicker && car.capacity >= quantity;
  }

  renderCar(car) {
    const node = document.createElement("div");
    node.innerHTML = car.render();
    this.carContainerElement.appendChild(node);
  }

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear() {
    while (this.carContainerElement.firstElementChild) {
      this.carContainerElement.firstElementChild.remove();
    }
  }
}
