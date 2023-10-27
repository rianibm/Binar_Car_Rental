class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((carData) => new this(carData));
  }

  constructor(carData) {
    this.carData = carData;
  }

  render() {
    const {
      manufacture,
      model,
      image,
      rentPerDay,
      description,
      capacity,
      transmission,
      year,
    } = this.carData;

    return `
      <div class="col">
        <div class="card shadow bg-white" style="width: 18rem; border-radius: 8px;">
          <img src="${image}" class="card-img-top img-fluid" style="height: 190px; object-fit: cover;" />
          <div class="card-body" style="font-size: 14px; padding: 24px;">
            <p class="card-title">${manufacture} ${model}</p>
            <p class="fw-bold">Rp ${rentPerDay} / hari</p>
            <p class="card-text" style="height: 90px">${description}</p>
            <div> <i class="bi bi-people-fill me-2"></i>${capacity} Orang</div>
            <div class="mt-3 mb-3"> <i class="bi bi-gear me-2"></i>${transmission}</div>
            <div> <i class="bi bi-calendar4 me-2"></i>${year}</div>
            <a href="#" class="btn btn-primary text-white w-100 mt-4 fw-bold" style="font-size: 14px">Pilih Mobil</a>
          </div>
        </div>
      </div>
    `;
  }
}
