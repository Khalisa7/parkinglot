const fs = require('fs');
const terminal = require('readline');
const ParkingLot = require('./module/parkinglot');

const cmd = terminal.createInterface({
  input: fs.createReadStream('./brute_input.txt'),
  output: process.stdout
});

const main = () => {

  const parkingLot = new ParkingLot();
  console.log('Selamat Datang!!!');

  cmd.on("line", (input) => {
    const syntax = input.split(' ');
    switch (syntax[0]) {
      case 'create_parking_lot':
        try {
          const result = parkingLot._initialize(syntax[1]);
          console.log(result);
        } catch (err) {
          console.log(err);
        }
        break;
      case 'park':
        try {
          const result = parkingLot._add({ carId: syntax[1], color: syntax[2] });
          console.log(result);
        } catch (err) {
          console.log(err);
        }
        break;
      case 'leave':
        try {
          const result = parkingLot._remove({ carId: syntax[1], hour: syntax[2] });
          console.log(result);
        } catch (err) {
          console.log(err)
        }
        break;
      case 'status':
        try {
          const result = parkingLot._print();
          console.log(result);
        } catch (err) {
          console.log(err)
        }
        break;
      default:
        console.log('Unknown Syntax!!!');
        break;
    };
  });
};

main();