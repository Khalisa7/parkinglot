class ParkingLot {
  constructor() {
    this.parkingSlot = [];
  };


  /**
   *    Initialize function (create slot capacity)
   */
  _initialize(params) {
    if (isNaN(params) && params < 1) { return `${params} Invalid input`; };
    var slot = { carId: null, color: null, status: "available" };
    for (var i = 0; i < params; i++) { this.parkingSlot.push(slot); }
    return `Created parking lot with ${this.parkingSlot.length} slots`;
  };


  /**
   *    Add car on parking lot
   */
  _add({ carId, color }) {
    if (typeof carId === 'undefined' && ParkingLot.length > 0) { return "Undefined Parameter Or Parking Lot Does Not Initialize Yet"; };

    var availableSlot = [];
    this.parkingSlot.forEach((data, i) => { if (data.status === "available") { availableSlot.push(i); }; });

    if (availableSlot.length) {
      this.parkingSlot[availableSlot[0]] = { carId: carId, color: color, status: "unavailable" };
      return `Allocated slot number: ${availableSlot[0] + 1}`;
    } else {
      return "Sorry, parking lot is full";
    }
  };


  /**
   *    Remove car from parking lot
   */
  _remove({ carId, hour }) {
    if (isNaN(hour) && hour < 0) {
      return `${hour} Invalid Input`;
    };


    var fee = hour > 2 ? ((hour - 2) * 10) + 10 : 10;
    var searchIndex = [];
    this.parkingSlot.forEach((data, i) => {
      if (data.carId === carId) {
        searchIndex.push(i);
      }
    });

    if (searchIndex.length) {
      this.parkingSlot[searchIndex[0]] = { carId: null, color: null, status: "available" };
      return `Registration number ${carId} with Slot Number 1 is free with Charge ${fee}`;
    }
    else {
      return `Registration number ${carId} not found`;
    }
  };


  /**
   *    Print Status
   */
  _print() {
    var result = "Slot No, \tRegistration No.";
    for (var i = 0; i < this.parkingSlot.length; i++) {
      if (this.parkingSlot[i].carId !== null) {
        result += `\n${i + 1}\t${this.parkingSlot[i].carId}`;
      }
    };
    return result;
  }
};


module.exports = ParkingLot;